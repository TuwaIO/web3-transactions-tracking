/**
 * @file This file contains the factory function for creating the main transaction tracking Zustand store.
 * It combines the core store logic with EVM-specific functionalities like handling wagmi config and transaction submission.
 */

import { initializeTxTrackingStore, ITxTrackingStore, Transaction } from '@tuwa/web3-transactions-tracking-core/dist';
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
 * Creates and configures the main Zustand store for transaction tracking.
 * This store is persistent (uses localStorage by default) and includes all actions
 * for handling the full lifecycle of EVM transactions.
 *
 * @template T - A union type representing all possible transaction shapes for the application.
 * @param {object} options - Configuration for the transaction tracking store.
 * @param {Chain[]} options.appChains - The blockchain chains supported by the application.
 * @param {function} [options.onSucceedCallbacks] - Optional callback executed when any transaction succeeds.
 * @param {PersistOptions} options - Standard options for the `persist` middleware from Zustand.
 * @returns {StoreApi<ITxTrackingStore<...>>} A vanilla Zustand store instance.
 */
export function createTxTrackingStore<T extends Transaction<TransactionTracker>>({
  onSucceedCallbacks,
  appChains,
  ...options
}: {
  appChains: Chain[];
  onSucceedCallbacks?: (tx: T) => Promise<void> | void;
} & PersistOptions<ITxTrackingStore<TransactionTracker, T, Config, ActionTxKey>>) {
  return createStore<ITxTrackingStore<TransactionTracker, T, Config, ActionTxKey>>()(
    persist(
      (set, get) => ({
        ...initializeTxTrackingStore<TransactionTracker, T>({ onSucceedCallbacks })(set, get),

        /**
         * Initializes trackers for all pending transactions in the pool.
         * This is essential for resuming tracking after a page reload.
         */
        initializeTransactionsPool: async () => {
          await Promise.all(
            Object.values(get().transactionsPool).map(async (tx) => {
              if (tx.pending) {
                checkAndInitializeTrackerInStore({ tracker: tx.tracker, tx, chains: appChains, ...get() });
              }
            }),
          );
        },

        /**
         * The main function to orchestrate sending and tracking a new transaction.
         * It handles chain switching, wallet interactions, state updates, and tracker initialization.
         */
        handleTransaction: async ({ actionFunction, params, config }) => {
          set({ initialTx: undefined }); // Clear any previous initial state
          const { desiredChainID, ...restParams } = params;
          const activeWallet = getAccount(config);
          const walletType = activeWallet.connector?.type ?? '';
          const localTimestamp = dayjs().unix();

          const txInitialParams = {
            ...restParams,
            tracker: TransactionTracker.Ethereum, // Default tracker
            chainId: Number(desiredChainID),
            localTimestamp,
            walletType,
            from: activeWallet.address ?? zeroAddress,
            txKey: '', // Will be populated after the action
            pending: false,
            isTrackedModalOpen: params.withTrackedModal,
          } as Draft<T>;

          const handleError = (e: unknown) => {
            const errorMessage = e instanceof Error ? e.message : String(e);
            set((state) =>
              produce(state, (draft) => {
                if (draft.initialTx) {
                  draft.initialTx.isInitializing = false;
                  draft.initialTx.errorMessage = errorMessage;
                }
              }),
            );
            // Re-throw to allow the caller to handle the error as well
            throw new Error(`Transaction failed to initialize: ${errorMessage}`);
          };

          // Set initial state for immediate UI feedback
          set({
            initialTx: {
              ...params,
              localTimestamp,
              isInitializing: true,
            },
          });

          try {
            // 1. Ensure the wallet is on the correct chain
            await checkChainForTx(desiredChainID, config);

            // 2. Execute the action (e.g., wallet call) to get a transaction key (hash, taskId, etc.)
            const txKeyFromAction = await actionFunction();

            if (txKeyFromAction) {
              // 3. Determine the correct tracker and final txKey
              const { tracker: updatedTracker, txKey: finalTxKey } = checkTransactionsTracker(
                txKeyFromAction,
                walletType,
              );

              // 4. Add the transaction to the pool
              get().addTxToPool({
                tx: {
                  ...txInitialParams,
                  tracker: updatedTracker,
                  txKey: finalTxKey,
                  hash: updatedTracker === TransactionTracker.Ethereum ? txKeyFromAction : undefined,
                } as T,
              });

              // Update initial state to reflect that initialization is complete
              set((state) =>
                produce(state, (draft) => {
                  if (draft.initialTx) {
                    draft.initialTx.isInitializing = false;
                    draft.initialTx.lastTxKey = finalTxKey;
                  }
                }),
              );

              // 5. Start the background tracking process for the new transaction
              const tx = get().transactionsPool[finalTxKey];
              await checkAndInitializeTrackerInStore({ tracker: updatedTracker, tx, chains: appChains, ...get() });
            } else {
              // Action was likely cancelled by the user, clear the initial state
              set({ initialTx: undefined });
            }
          } catch (e) {
            handleError(e);
          }
        },
      }),
      {
        ...options, // Zustand persist middleware options
      },
    ),
  );
}
