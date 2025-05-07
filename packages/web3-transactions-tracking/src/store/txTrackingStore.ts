import { Config } from '@wagmi/core';
import dayjs from 'dayjs';
import { Draft, produce } from 'immer';
import { Chain, zeroAddress } from 'viem';
import { persist, PersistOptions } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

import { ActionTxKey, Transaction, TransactionStatus, TransactionTracker } from '../types';
import { checkAndInitializeTrackerInStore } from '../utils/checkAndInitializeTrackerInStore';
import { checkChainForTx } from '../utils/checkChainForTx';
import { checkTransactionsTracker } from '../utils/checkTransactionsTracker';
import { getActiveWalletAndClient } from '../utils/getActiveWalletAndClient';

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

  initializeTransactionsPool: () => Promise<void>;

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
  return createStore<ITxTrackingStore<T>>()(
    persist(
      (set, get) => ({
        onSucceedCallbacks,

        transactionsPool: {},

        initializeTransactionsPool: async () => {
          await Promise.all(
            Object.values(get().transactionsPool).map(async (tx) => {
              if (tx.pending) {
                checkAndInitializeTrackerInStore({ tracker: tx.tracker, tx, chains: appChains, ...get() });
              }
            }),
          );
        },

        handleTransaction: async ({ actionFunction, params, config }) => {
          const { desiredChainID, payload, type } = params;
          const { activeWallet } = getActiveWalletAndClient(config);
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
              const { tracker: updatedTracker, txKey: finalTxKey } = checkTransactionsTracker(
                txKeyFromAction,
                walletType,
              );

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
                await checkAndInitializeTrackerInStore({ tracker: updatedTracker, tx, chains: appChains, ...get() });
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
