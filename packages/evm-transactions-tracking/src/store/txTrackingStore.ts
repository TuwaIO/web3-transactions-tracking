import {
  initializeTxTrackingStore,
  ITxTrackingStore,
  Transaction,
  TransactionStatus,
} from '@tuwa/web3-transactions-tracking-core/dist';
import { Config, getAccount } from '@wagmi/core';
import dayjs from 'dayjs';
import { Draft, produce } from 'immer';
import { Chain, zeroAddress } from 'viem';
import { persist, PersistOptions } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

import { ActionTxKey, TransactionTracker } from '../types';
import { checkAndInitializeTrackerInStore } from '../utils/checkAndInitializeTrackerInStore';
import { checkChainForTx } from '../utils/checkChainForTx';
import { checkTransactionsTracker } from '../utils/checkTransactionsTracker';

/**
 * Creates a transaction tracking store with provided configurations.
 *
 * @param {object} options - Configuration for the transaction tracking store.
 * @param {Chain[]} options.appChains - The blockchain chains to be tracked.
 * @param {function} [options.onSucceedCallbacks] - Optional callback executed when a transaction succeeds.
 * @return {ReturnType<typeof createStore<ITxTrackingStore<T>>>} A store to manage transaction tracking states and operations.
 */
export function createTxTrackingStore<T extends Transaction<TransactionTracker>>({
  onSucceedCallbacks,
  appChains,
  ...options
}: {
  appChains: Chain[];
  onSucceedCallbacks?(tx: unknown): Promise<void>;
} & PersistOptions<ITxTrackingStore<TransactionTracker, T, Config, ActionTxKey>>) {
  return createStore<ITxTrackingStore<TransactionTracker, T, Config, ActionTxKey>>()(
    persist(
      (set, get) => ({
        ...initializeTxTrackingStore<TransactionTracker, T>({ onSucceedCallbacks })(set, get),

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
          const { desiredChainID, payload, type, title, description, withTrackedModal, actionKey } = params;
          const activeWallet = getAccount(config);
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
            title,
            description,
            actionKey,
          } as Draft<T>;

          const trackingTxInitialParams = {
            initializedOnChain: false,
            isFailed: !activeWallet,
            isSucceed: false,
            isReplaced: false,
            isProcessing: !!activeWallet,
            error: !activeWallet ? 'Connect your wallet before making a transaction' : '',
            isTrackedModalOpen: withTrackedModal,
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
            throw new Error(`TX error: ${errorMessage}`);
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
                      isTrackedModalOpen: draft.trackedTransaction?.isTrackedModalOpen ?? false,
                      isSucceed: finalTx?.status === TransactionStatus.Success,
                      isReplaced: finalTx?.status === TransactionStatus.Replaced,
                      error: finalTx?.errorMessage ?? '',
                      isFailed: !!finalTx.errorMessage || finalTx.isError || false,
                      initializedOnChain: !!finalTx?.status,
                      isProcessing: !finalTx?.status,
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
      }),
      {
        ...options,
      },
    ),
  );
}
