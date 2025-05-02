import { Config } from '@wagmi/core';
import dayjs from 'dayjs';
import { Draft, produce } from 'immer';
import { Chain, zeroAddress } from 'viem';
import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

import { checkChainForTx } from '../helpers/checkChainForTx';
import { getActiveWallet } from '../helpers/getActiveWallet';
import { ethereumTrackerForStore } from '../trackers/ethereumTracker';
import { gelatoTrackerForStore, isGelatoTxKey } from '../trackers/gelatoTracker';
import { ActionTxKey, Transaction, TransactionStatus, TransactionTracker } from '../types';

export type TransactionPool<T extends Transaction> = Record<string, T>;

type UpdatedParamsFields = Pick<
  Transaction,
  | 'to'
  | 'nonce'
  | 'txKey'
  | 'pending'
  | 'isError'
  | 'hash'
  | 'status'
  | 'replacedTxHash'
  | 'errorMessage'
  | 'finishedTimestamp'
>;

export type ITxTrackingStore<T extends Transaction> = {
  onSucceedCallbacks: (tx: T) => void;

  transactionsPool: TransactionPool<T>;

  trackedTransaction?: {
    initializedOnChain: boolean;
    isFailed: boolean;
    isSucceed: boolean;
    isReplaced: boolean;
    isProcessing: boolean;
    error: string;
    tx?: T;
  };
  handleTransaction: (params: {
    config: Config;
    actionFunction: () => Promise<ActionTxKey | undefined>;
    params: {
      type: T['type'];
      payload: T['payload'];
      desiredChainID: number;
    };
  }) => Promise<void>;

  addTxToPool: ({ tx }: { tx: T }) => void;
  updateTxParams: (fields: UpdatedParamsFields, withTracked?: boolean) => void;
  updateTxParamsForTrackedTransaction: (fields: UpdatedParamsFields) => void;
  removeTxFromPool: (txKey: string) => void;
};

export function initializeTxTrackingStore<T extends Transaction>({
  onSucceedCallbacks,
  appChains,
  ...options
}: {
  appChains: Chain[];
  onSucceedCallbacks(tx: unknown): Promise<void>;
} & PersistOptions<ITxTrackingStore<T>>) {
  return create<ITxTrackingStore<T>>()(
    persist(
      (set, get) => ({
        onSucceedCallbacks,

        transactionsPool: {},

        handleTransaction: async ({ actionFunction, params, config }) => {
          const { desiredChainID, payload, type } = params;
          const activeWallet = getActiveWallet(config);
          const chainId = Number(desiredChainID);
          const tracker = TransactionTracker.Ethereum;

          const connections = config.state.connections.values();
          const walletType = connections.next().value?.connector.type ?? '';
          const localTimestamp = dayjs().unix();

          const txInitialParams = {
            tracker,
            type,
            payload,
            chainId,
            localTimestamp,
            walletType,
            from: activeWallet.address ?? zeroAddress,
            txKey: '',
            pending: false,
          } as Draft<T>;

          const trackingTxInitialParams = {
            initializedOnChain: false,
            isFailed: false,
            isSucceed: false,
            isReplaced: false,
            isProcessing: true,
            error: '',
            tx: txInitialParams,
          };

          set((state) =>
            produce(state, (draft) => {
              draft.trackedTransaction = trackingTxInitialParams;
            }),
          );

          const handleError = (e: unknown, params: typeof trackingTxInitialParams, errorTx?: T) => {
            const errorMessage = e instanceof Error ? e.message : String(e);
            set((state) =>
              produce(state, (draft) => {
                draft.trackedTransaction = {
                  ...params,
                  error: errorMessage,
                  isFailed: true,
                  initializedOnChain: true,
                  isProcessing: false,
                  tx: (errorTx ?? params.tx) as Draft<T>,
                };
              }),
            );
            console.error('TX error: ', errorMessage);
          };

          try {
            await checkChainForTx(params.desiredChainID, config);
          } catch (e) {
            handleError(e, trackingTxInitialParams);
          }

          try {
            const txKeyFromAction = await actionFunction();
            if (txKeyFromAction) {
              let updatedTracker = txInitialParams.tracker;
              let finalTxKey = txInitialParams.txKey;
              if (isGelatoTxKey(txKeyFromAction)) {
                updatedTracker = TransactionTracker.Gelato;
                finalTxKey = txKeyFromAction.taskId;
              } else {
                finalTxKey = txKeyFromAction;
              }

              get().addTxToPool({
                tx: {
                  ...txInitialParams,
                  tracker: updatedTracker,
                  txKey: finalTxKey,
                  hash: updatedTracker === TransactionTracker.Ethereum ? txKeyFromAction : undefined,
                } as T,
              });

              const tx = get().transactionsPool[finalTxKey];

              set((state) =>
                produce(state, (draft) => {
                  draft.trackedTransaction = {
                    ...trackingTxInitialParams,
                    initializedOnChain: true,
                    tx: tx as Draft<T>,
                  };
                }),
              );

              try {
                switch (updatedTracker) {
                  case TransactionTracker.Ethereum:
                    await ethereumTrackerForStore({
                      tx,
                      chains: appChains,
                      ...get(),
                    });
                    break;
                  case TransactionTracker.Gelato:
                    await gelatoTrackerForStore({
                      tx,
                      ...get(),
                    });
                    break;
                  case TransactionTracker.Safe:
                    await ethereumTrackerForStore({
                      tx,
                      chains: appChains,
                      ...get(),
                    }); // TODO: need new tracking for safe
                    break;
                  // ...more
                  default:
                    await ethereumTrackerForStore({
                      tx,
                      chains: appChains,
                      ...get(),
                    });
                }
                const finalTx = get().transactionsPool[finalTxKey];
                set((state) =>
                  produce(state, (draft) => {
                    draft.trackedTransaction = {
                      ...trackingTxInitialParams,
                      isSucceed: finalTx?.status === TransactionStatus.Success,
                      isReplaced: finalTx?.status === TransactionStatus.Replaced,
                      error: finalTx?.errorMessage ?? '',
                      isFailed: !!finalTx.errorMessage || finalTx.isError || false,
                      initializedOnChain: true,
                      isProcessing: false,
                      tx: finalTx as Draft<T>,
                    };
                  }),
                );
              } catch (e) {
                const errorTx = get().transactionsPool[finalTxKey];
                handleError(e, trackingTxInitialParams, errorTx);
              }
            }
          } catch (e) {
            handleError(e, trackingTxInitialParams);
          }
        },

        addTxToPool: ({ tx }) => {
          set((state) =>
            produce(state, (draft) => {
              if (tx.txKey) {
                draft.transactionsPool[tx.txKey] = {
                  ...tx,
                  pending: true,
                } as Draft<T>;
              }
            }),
          );
        },
        updateTxParams: (tx, withTracked) => {
          set((state) =>
            produce(state, (draft) => {
              draft.transactionsPool[tx.txKey] = {
                ...draft.transactionsPool[tx.txKey],
                ...tx,
              };
            }),
          );
          if (withTracked) {
            get().updateTxParamsForTrackedTransaction(tx);
          }
        },
        updateTxParamsForTrackedTransaction: (tx) => {
          set((state) =>
            produce(state, (draft) => {
              draft.trackedTransaction = {
                ...draft.trackedTransaction,
                initializedOnChain: draft.trackedTransaction?.initializedOnChain || false,
                isSucceed: tx?.status === TransactionStatus.Success,
                isReplaced: tx?.status === TransactionStatus.Replaced,
                error: tx?.errorMessage ?? '',
                isFailed: !!tx.errorMessage || tx.isError || false,
                isProcessing: draft.trackedTransaction?.isProcessing || false,
                tx: draft.trackedTransaction?.tx
                  ? ({
                      ...draft.trackedTransaction?.tx,
                      ...tx,
                    } as Draft<T>)
                  : undefined,
              };
            }),
          );
        },
        removeTxFromPool: (txKey) => {
          set((state) =>
            produce(state, (draft) => {
              delete draft.transactionsPool[txKey];
            }),
          );
        },
      }),
      {
        ...options,
      },
    ),
  );
}
