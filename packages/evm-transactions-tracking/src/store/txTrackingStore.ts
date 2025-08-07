import {
  initializeTxTrackingStore,
  InitialTransaction,
  ITxTrackingStore,
  Transaction,
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
          set({ initialTx: undefined });
          const { desiredChainID, payload, type, title, description, actionKey, withTrackedModal } = params;
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
            isTackingModalOpen: withTrackedModal,
          } as Draft<T>;

          const handleError = (e: unknown) => {
            const errorMessage = e instanceof Error ? e.message : String(e);
            set((state) =>
              produce(state, (draft) => {
                draft.initialTx = {
                  ...draft.initialTx,
                  isInitializing: false,
                  errorMessage,
                } as Draft<InitialTransaction>;
              }),
            );
            throw new Error(`TX error: ${errorMessage}`);
          };

          set({
            initialTx: {
              type,
              payload,
              title,
              description,
              actionKey,
              chainId: txInitialParams.chainId,
              localTimestamp,
              isTackingModalOpen: withTrackedModal,
              isInitializing: true,
              errorMessage: undefined,
              lastTxKey: undefined,
            },
          });

          try {
            await checkChainForTx(params.desiredChainID, config);
          } catch (e) {
            handleError(e);
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

              set((state) =>
                produce(state, (draft) => {
                  draft.initialTx = {
                    ...draft.initialTx,
                    isInitializing: false,
                    lastTxKey: finalTxKey,
                  } as Draft<InitialTransaction>;
                }),
              );

              try {
                const tx = get().transactionsPool[finalTxKey];
                await checkAndInitializeTrackerInStore({ tracker: updatedTracker, tx, chains: appChains, ...get() });
              } catch (e) {
                handleError(e);
              }
            }
          } catch (e) {
            handleError(e);
          }
        },
      }),
      {
        ...options,
      },
    ),
  );
}
