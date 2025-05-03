import { Chain, Hex } from 'viem';

import { GelatoTxKey } from './trackers/gelatoTracker';
import { SafeTx } from './trackers/safeTracker';

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

export type TrackerParams<T extends Transaction> = {
  tx: T;
  chains: Chain[];
  onInitialize?: () => void;
  onFailed: (e?: unknown) => void;
};

export type ActionTxKey = Hex | GelatoTxKey | SafeTx; // ...more;
