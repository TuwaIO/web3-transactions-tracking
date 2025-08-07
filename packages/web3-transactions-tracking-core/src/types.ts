import { StoreApi } from 'zustand';

import { IInitializeTxTrackingStore } from './store/initializeTxTrackingStore';

export type StoreSlice<T extends object, E extends object = T> = (
  set: StoreApi<E extends T ? E : E & T>['setState'],
  get: StoreApi<E extends T ? E : E & T>['getState'],
) => T;

/**
 * Represents the different statuses of a transaction.
 */
export enum TransactionStatus {
  Failed = 'Failed',
  Success = 'Success',
  Replaced = 'Replaced',
}

/**
 * Represents a transaction object used to track various details of a transaction in the system.
 *
 * @template T - The type of the tracker associated with the transaction.
 * @property {T} tracker - The tracker instance associated with the transaction.
 * @property {number} chainId - The ID of the blockchain network the transaction is associated with.
 * @property {string} type - The type or category of the transaction.
 * @property {string} from - The sender or initiator address of the transaction.
 * @property {number} localTimestamp - The local timestamp when the transaction was created.
 * @property {string} txKey - A unique key identifier for the transaction.
 * @property {boolean} pending - Indicates if the transaction is still pending.
 * @property {string} walletType - The type of wallet used for the transaction.
 * @property {string} [hash] - The hash of the transaction, if available.
 * @property {TransactionStatus} [status] - The current status of the transaction.
 * @property {object} [payload] - Additional data associated with the transaction.
 * @property {number} [finishedTimestamp] - The timestamp when the transaction was completed or finalized.
 * @property {string} [errorMessage] - An error message if the transaction encountered an issue.
 * @property {boolean} [isError] - Indicates whether the transaction resulted in an error.
 * @property {string} [replacedTxHash] - The hash of a transaction that this one replaced, if applicable.
 * @property {string} [to] - The recipient address of the transaction, if applicable.
 * @property {number} [nonce] - The nonce assigned to the transaction for execution order.
 * @property {string | [string, string, string, string]} [title] - The title of the transaction, optionally localized.
 * @property {string | [string, string, string, string]} [description] - The description of the transaction, optionally localized.
 * @property {string} [actionKey] - A key identifying a specific action related to the transaction.
 * @property {boolean} [isTackingModalOpen] - A key identifying is tracking modal is open, only for UI things.
 */
export type Transaction<T> = {
  tracker: T;
  chainId: number;
  type: string;
  from: string;
  localTimestamp: number;
  txKey: string;
  pending: boolean;
  walletType: string;
  hash?: string;
  status?: TransactionStatus;
  payload?: object;
  finishedTimestamp?: number;
  errorMessage?: string;
  isError?: boolean;
  replacedTxHash?: string;
  to?: string;
  nonce?: number;
  title?: string | [string, string, string, string];
  description?: string | [string, string, string, string];
  actionKey?: string;
  isTackingModalOpen?: boolean;
};

/**
 * Represents the initial state of a transaction, including its properties and optional metadata.
 *
 * @typedef {Object} InitialTransaction
 * @property {boolean} isInitializing - Indicates whether the transaction is in the initializing state.
 * @property {number} chainId - The ID of the blockchain chain associated with the transaction.
 * @property {number} localTimestamp - The local timestamp of when the transaction was initialized.
 * @property {string} type - The type or category of the transaction.
 * @property {string} [actionKey] - Optional unique identifier for the action being performed.
 * @property {string} [lastTxKey] - Optional key referencing the last transaction, if any.
 * @property {string} [errorMessage] - Optional error message if the transaction fails.
 * @property {boolean} [isTackingModalOpen] - Optional flag indicating whether a tracking modal is open.
 * @property {string | [string, string, string, string]} [title] - Optional title of the transaction as a string or an array of strings for localization.
 * @property {string | [string, string, string, string]} [description] - Optional description of the transaction as a string or an array of strings for localization.
 * @property {object} [payload] - Optional generic object containing additional data or payload related to the transaction.
 */
export type InitialTransaction = {
  isInitializing: boolean;
  chainId: number;
  localTimestamp: number;
  type: string;
  actionKey?: string;
  lastTxKey?: string;
  errorMessage?: string;
  isTackingModalOpen?: boolean;
  title?: string | [string, string, string, string];
  description?: string | [string, string, string, string];
  payload?: object;
};

/**
 * Interface representing a transaction tracking store, extending functionality for initializing
 * transaction tracking and managing transaction lifecycle operations.
 *
 * @template TR - Represents the transaction tracker type.
 * @template T - Represents the transaction type, which extends the generic Transaction type with a specific tracker type.
 * @template C - Represents a configuration object type for handling transactions.
 * @template A - Represents the return type of the action function.
 */
export type ITxTrackingStore<TR, T extends Transaction<TR>, C, A> = IInitializeTxTrackingStore<TR, T> & {
  initializeTransactionsPool: () => Promise<void>;

  handleTransaction: (params: {
    config: C;
    actionFunction: () => Promise<A | undefined>;
    params: {
      type: T['type'];
      desiredChainID: number;
      payload?: T['payload'];
      title?: T['title'];
      description?: T['description'];
      actionKey?: string;
      withTrackedModal?: boolean;
    };
  }) => Promise<void>;
};
