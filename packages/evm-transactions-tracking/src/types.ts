import { Hex } from 'viem';

import { GelatoTxKey } from './trackers/gelatoTracker';

/**
 * Enum representing different types of transaction trackers.
 *
 * @enum {string}
 */
export enum TransactionTracker {
  Ethereum = 'ethereum',
  Safe = 'safe',
  Gelato = 'gelato',
}

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
 * Represents a transaction object.
 * @typedef {Object} Transaction
 * @property {TransactionTracker} tracker - The transaction tracker associated with the transaction.
 * @property {number} chainId - The chain ID of the transaction.
 * @property {string} type - The type of the transaction.
 * @property {Hex} from - The sender address in hexadecimal format.
 * @property {number} localTimestamp - The local timestamp of the transaction.
 * @property {string} txKey - The transaction key.
 * @property {boolean} pending - Indicates if the transaction is pending.
 * @property {string} walletType - The type of wallet used for the transaction.
 * @property {Hex} [hash] - The hash of the transaction in hexadecimal format.
 * @property {TransactionStatus} [status] - The status of the transaction.
 * @property {object} [payload] - Additional payload data related to the transaction.
 * @property {number} [finishedTimestamp] - The timestamp when the transaction was finished.
 * @property {string} [errorMessage] - The error message associated with the transaction, if any.
 * @property {boolean} [isError] - Indicates if the transaction encountered an error.
 * @property {Hex} [replacedTxHash] - The hash of the transaction that this transaction replaced.
 * @property {Hex} [to] - The recipient address in hexadecimal format.
 * @property {number} [nonce] - The nonce value of the transaction.
 */
export type Transaction = {
  tracker: TransactionTracker;
  chainId: number;
  type: string;
  from: Hex;
  localTimestamp: number;
  txKey: string;
  pending: boolean;
  walletType: string;
  hash?: Hex;
  status?: TransactionStatus;
  payload?: object;
  finishedTimestamp?: number;
  errorMessage?: string;
  isError?: boolean;
  replacedTxHash?: Hex;
  to?: Hex;
  nonce?: number;
};

/**
 * Represents a key that can be either a hexadecimal string or a Gelato transaction key.
 * @typedef {Hex | GelatoTxKey} ActionTxKey
 */
export type ActionTxKey = Hex | GelatoTxKey;
