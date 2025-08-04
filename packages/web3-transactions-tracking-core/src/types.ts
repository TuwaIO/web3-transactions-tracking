import { StoreApi } from 'zustand';

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
};
