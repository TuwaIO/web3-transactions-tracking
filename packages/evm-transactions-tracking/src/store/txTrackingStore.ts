import {
  IInitializeTxTrackingStore,
  initializeTxTrackingStore,
} from '@tuwa/web3-transactions-tracking-core/dist/store/initializeTxTrackingStore';
import { Transaction, TransactionStatus } from '@tuwa/web3-transactions-tracking-core/dist/types';
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
 * Represents a store interface for tracking transactions within a specific context utilizing the `Transaction` and `TransactionTracker` types.
 *
 * @template T - A type that extends `Transaction<TransactionTracker>`.
 *
 * @extends IInitializeTxTrackingStore
 *
 * @property {Function} initializeTransactionsPool - Initializes the transaction pool asynchronously, ensuring it is set up correctly.
 *
 * @property {Object} [trackedTransaction] - An optional object representing the currently tracked transaction with relevant metadata.
 * @property {boolean} trackedTransaction.initializedOnChain - Indicates whether the transaction has been initialized on the blockchain.
 * @property {boolean} trackedTransaction.isFailed - Indicates if the transaction has failed.
 * @property {boolean} trackedTransaction.isSucceed - Indicates if the transaction has succeeded.
 * @property {boolean} trackedTransaction.isReplaced - Indicates if the transaction has been replaced.
 * @property {boolean} trackedTransaction.isProcessing - Indicates if the transaction is currently being processed.
 * @property {string} trackedTransaction.error - Describes any error associated with the transaction.
 * @property {T} [trackedTransaction.tx] - The transaction object, if available.
 *
 * @property {Function} handleTransaction - Handles the execution of a specific transaction with provided parameters and configuration.
 * @param {Object} params - Parameters for handling the transaction.
 * @param {Config} params.config - Configuration object for the transaction.
 * @param {Function} params.actionFunction - Asynchronous action function responsible for performing the transaction and potentially returning a transaction key.
 * @param {Object} params.params - Details related to the transaction being handled.
 * @param {T['type']} params.params.type - The type of transaction being executed.
 * @param {number} params.params.desiredChainID - The desired blockchain chain ID for the transaction.
 * @param {T['payload']} [params.params.payload] - Optional payload associated with the transaction.
 * @param {T['title']} [params.params.title] - Optional title for the transaction.
 * @param {T['description']} [params.params.description] - Optional description for the transaction.
 *
 * @returns {Promise<void>} Resolves once the transaction handling completes.
 */
export type ITxTrackingStore<T extends Transaction<TransactionTracker>> = IInitializeTxTrackingStore<
  TransactionTracker,
  T
> & {
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
      desiredChainID: number;
      payload?: T['payload'];
      title?: T['title'];
      description?: T['description'];
    };
  }) => Promise<void>;
};

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
} & PersistOptions<ITxTrackingStore<T>>) {
  return createStore<ITxTrackingStore<T>>()(
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
          const { desiredChainID, payload, type, title, description } = params;
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
          } as Draft<T>;

          const trackingTxInitialParams = {
            initializedOnChain: false,
            isFailed: !activeWallet,
            isSucceed: false,
            isReplaced: false,
            isProcessing: !!activeWallet,
            error: !activeWallet ? 'Connect your wallet before making a transaction' : '',
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
      }),
      {
        ...options,
      },
    ),
  );
}
