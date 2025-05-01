import { Hex } from 'viem';

import { EthereumTransaction } from './trackers/ethereumTracker';

export enum TransactionTracker {
  Ethereum = 'ethereum',
  Safe = 'safe',
  Gelato = 'gelato',
  // more
}

export enum TransactionStatus {
  Reverted = 'Reverted',
  Success = 'Success',
  Replaced = 'Replaced',
  Failed = 'Failed',
}

export type BaseTransaction = {
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
};

export type Transaction = EthereumTransaction; // more
