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
 * Represents a key that can be either a hexadecimal string or a Gelato transaction key.
 * @typedef {Hex | GelatoTxKey} ActionTxKey
 */
export type ActionTxKey = Hex | GelatoTxKey;
