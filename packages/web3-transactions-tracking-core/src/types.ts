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
  Reverted = 'Reverted',
  Success = 'Success',
  Replaced = 'Replaced',
  Failed = 'Failed',
}

/**
 * Represents a transaction entity with various associated properties.
 *
 * @template T - The tracker type associated with the transaction.
 *
 * @typedef {object} Transaction
 *
 * @property {T} tracker - The tracker instance or value associated with this transaction.
 * @property {number} chainId - The blockchain network identifier where the transaction occurred.
 * @property {string} type - The type of the transaction.
 * @property {string} from - The sender's address initiating the transaction.
 * @property {number} localTimestamp - The local timestamp when the transaction is initiated.
 * @property {string} txKey - A unique identifier for the transaction.
 * @property {boolean} pending - Indicates whether the transaction is currently pending confirmation.
 * @property {string} walletType - Specifies the type of wallet used for the transaction.
 * @property {string} [hash] - The hash uniquely identifying the transaction on the blockchain.
 * @property {TransactionStatus} [status] - The current status of the transaction, if available.
 * @property {object} [payload] - Additional data payload associated with the transaction.
 * @property {number} [finishedTimestamp] - The timestamp when the transaction was completed.
 * @property {string} [errorMessage] - An error message if the transaction fails.
 * @property {boolean} [isError] - Flag indicating if an error occurred during the transaction.
 * @property {string} [replacedTxHash] - The hash of a transaction that replaced this transaction, if applicable.
 * @property {string} [to] - The recipient's address for the transaction.
 * @property {number} [nonce] - The transaction's nonce for ordering on the blockchain.
 * @property {string | [string, string, string, string]} [title] - A descriptive title for the transaction, supports multiple statuses formats (pending, successed, error, replaced).
 * @property {string | [string, string, string, string]} [description] - A detailed description of the transaction, supports multiple statuses formats (pending, successed, error, replaced).
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
};

export type ITxTrackingStore<TR, T extends Transaction<TR>, C, A> = IInitializeTxTrackingStore<TR, T> & {
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
    config: C;
    actionFunction: () => Promise<A | undefined>;
    params: {
      type: T['type'];
      desiredChainID: number;
      payload?: T['payload'];
      title?: T['title'];
      description?: T['description'];
      withTrackedModal?: boolean;
      actionKey?: string;
    };
  }) => Promise<void>;
};
