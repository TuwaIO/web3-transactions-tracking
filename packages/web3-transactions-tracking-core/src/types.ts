/**
 * @file This file defines the core data structures and TypeScript types for the Web3 transaction tracking system.
 * It includes types for transactions, their statuses, store interfaces, and utility types for Zustand slices.
 * These types are framework-agnostic and form the foundation of the entire tracking suite.
 */

import { StoreApi } from 'zustand';

import { IInitializeTxTrackingStore } from './store/initializeTxTrackingStore';

/**
 * A utility type for creating modular Zustand store slices.
 * @template T The state slice type.
 * @template E The full store state type, defaults to T.
 */
export type StoreSlice<T extends object, E extends object = T> = (
  set: StoreApi<E extends T ? E : E & T>['setState'],
  get: StoreApi<E extends T ? E : E & T>['getState'],
) => T;

/**
 * Represents the final statuses of a transaction.
 */
export enum TransactionStatus {
  /** Indicates that the transaction failed to execute. */
  Failed = 'Failed',
  /** Indicates that the transaction was successfully mined and executed. */
  Success = 'Success',
  /** Indicates that the transaction was replaced by another one (e.g., speed-up). */
  Replaced = 'Replaced',
}

/**
 * Represents a transaction object being tracked by the system.
 * @template T - The type of the tracker associated with the transaction (e.g., 'evm', 'gelato').
 */
export type Transaction<T> = {
  /** The specific tracker responsible for monitoring this transaction (e.g., 'evm', 'safe', 'gelato'). */
  tracker: T;
  /** The unique key for this transaction, used as an identifier throughout the system (e.g., transaction hash, gelato task id). */
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
  /** A flag indicating if has error status. */
  isError?: boolean;
  /** The maximum fee per gas for the transaction (EIP-1559). */
  maxFeePerGas?: string;
  /** The maximum priority fee per gas for the transaction (EIP-1559). */
  maxPriorityFeePerGas?: string;
  /** The value (in wei) being sent with the transaction. */
  value?: string;
  /** The data payload for the transaction, typically for contract interactions. */
  input?: string;
};

/**
 * Represents the parameters required to initiate a new transaction via the `handleTransaction` method.
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
 * Represents a transaction in its initial, pre-submission state within the store.
 * This is used for UI feedback while the transaction is being signed and sent.
 */
export type InitialTransaction = InitialTransactionParams & {
  /** True if the transaction is currently being processed (e.g., waiting for user signature). */
  isInitializing: boolean;
  /** The local timestamp when the user initiated the action. */
  localTimestamp: number;
  /** The key of the transaction that was last added to the pool from this initial action. */
  lastTxKey?: string;
  /** An error message if the initialization process fails (e.g., user rejects signature). */
  errorMessage?: string;
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
   * Initializes all active trackers for pending transactions in the pool.
   * This is useful for resuming tracking after a page reload.
   */
  initializeTransactionsPool: () => Promise<void>;

  /**
   * A wrapper function that handles the entire lifecycle of a transaction.
   * It adds the transaction to the store, executes the on-chain action, and tracks its status.
   * @param params - The parameters for handling the transaction.
   * @param params.config - The web3 config object (e.g., from wagmi).
   * @param params.actionFunction - The async function to execute (e.g., a smart contract write call).
   * @param params.params - The metadata for the transaction to be created.
   */
  handleTransaction: (params: {
    config: C;
    actionFunction: () => Promise<A | undefined>;
    params: InitialTransactionParams;
  }) => Promise<void>;
};
