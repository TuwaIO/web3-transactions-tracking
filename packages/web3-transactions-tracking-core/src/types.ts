import { StoreApi } from 'zustand';

import { IInitializeTxTrackingStore } from './store/initializeTxTrackingStore';

/**
 * A utility type for creating modular Zustand store slices.
 * @template T The state slice type.
 * @template E The full store state type.
 */
export type StoreSlice<T extends object, E extends object = T> = (
  set: StoreApi<E extends T ? E : E & T>['setState'],
  get: StoreApi<E extends T ? E : E & T>['getState'],
) => T;

/**
 * Represents the final statuses of a transaction.
 */
export enum TransactionStatus {
  Failed = 'Failed',
  Success = 'Success',
  Replaced = 'Replaced',
  Reverted = 'Reverted', // Added for completeness
}

/**
 * Represents a transaction object being tracked by the system.
 * @template T - The type of the tracker associated with the transaction (e.g., 'evm', 'gelato').
 */
export type Transaction<T> = {
  /** The specific tracker responsible for monitoring this transaction. */
  tracker: T;
  /** The unique key for this transaction, used as an identifier throughout the system. */
  txKey: string;
  /** A key identifying the retry logic for this transaction from the actions registry. */
  actionKey?: string;
  /** The type or category of the transaction (e.g., 'increment', 'approve'). */
  type: string;
  /** The ID of the blockchain network. */
  chainId: number;
  /** The sender's address. */
  from: string;
  /** The recipient's address (optional). */
  to?: string;
  /** The transaction nonce (optional). */
  nonce?: number;
  /** The on-chain transaction hash (optional, becomes available after submission). */
  hash?: string;
  /** The hash of a transaction that this one replaced (e.g., for speed-up). */
  replacedTxHash?: string;
  /** The final status of the transaction. */
  status?: TransactionStatus;
  /** Indicates if the transaction is still pending confirmation. */
  pending: boolean;
  /** The local timestamp (in seconds) when the transaction was initiated by the user. */
  localTimestamp: number;
  /** The timestamp (in seconds) when the transaction was finalized on-chain. */
  finishedTimestamp?: number;
  /** The type of wallet used for the transaction. */
  walletType: string;
  /** A title for the transaction, can be a single string or an array for different states [pending, success, error, replaced]. */
  title?: string | [string, string, string, string];
  /** A description for the transaction, with the same structure as the title. */
  description?: string | [string, string, string, string];
  /** Any additional data associated with the transaction. */
  payload?: object;
  /** An error message if the transaction failed. */
  errorMessage?: string;
  /** A flag indicating if the detailed tracking modal should be open for this transaction. For UI purposes. */
  isTrackedModalOpen?: boolean;
};

/**
 * Represents the parameters required to initiate a new transaction.
 */
export type InitialTransactionParams = {
  /** The type or category of the transaction (e.g., 'increment', 'approve'). */
  type: string;
  /** The ID of the desired blockchain network. */
  desiredChainID: number;
  /** A key identifying the retry logic from the actions registry. */
  actionKey?: string;
  /** Any additional data to be associated with the transaction. */
  payload?: object;
  /** A title for the transaction, can be a single string or an array for different states. */
  title?: string | [string, string, string, string];
  /** A description for the transaction, with the same structure as the title. */
  description?: string | [string, string, string, string];
  /** If true, the detailed tracking modal will open automatically for this transaction. */
  withTrackedModal?: boolean;
};

/**
 * Interface for the complete transaction tracking store.
 * @template TR - The type of the tracker identifier.
 * @template T - The transaction type.
 * @template C - The configuration object type (e.g., wagmi config).
 * @template A - The return type of the action function being wrapped.
 */
export type ITxTrackingStore<TR, T extends Transaction<TR>, C, A> = IInitializeTxTrackingStore<TR, T> & {
  /**
   * Initializes all active trackers to start polling for transaction updates.
   */
  initializeTransactionsPool: () => Promise<void>;

  /**
   * A wrapper function that handles the entire lifecycle of a transaction.
   * It adds the transaction to the store, executes the on-chain action, and tracks its status.
   * @param params - The parameters for handling the transaction.
   * @param params.config - The wagmi config object.
   * @param params.actionFunction - The async function to execute (e.g., a smart contract write call).
   * @param params.params - The metadata for the transaction to be created.
   */
  handleTransaction: (params: {
    config: C;
    actionFunction: () => Promise<A | undefined>;
    params: InitialTransactionParams;
  }) => Promise<ITrackedTransaction | undefined>;
};
