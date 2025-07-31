import { Transaction, TransactionStatus } from '@tuwa/web3-transactions-tracking-core/dist/types';
import {
  Chain,
  Client,
  GetTransactionReturnType,
  Hex,
  isHex,
  ReplacementReturnType,
  TransactionReceipt,
  WaitForTransactionReceiptParameters,
} from 'viem';
import { getBlock, getTransaction, waitForTransactionReceipt } from 'viem/actions';

import { ITxTrackingStore } from '../store/txTrackingStore';
import { TransactionTracker } from '../types';
import { createViemClient } from '../utils/createViemClient';

export type EVMTrackerParams = {
  onFinished: (localTx: GetTransactionReturnType, txn: TransactionReceipt, client: Client) => Promise<void>;
  onReplaced: (replacement: ReplacementReturnType) => void;
  chains: Chain[];
  onFailed: (e?: unknown) => void;
  onInitialize?: () => void;
  tx: Pick<Transaction<TransactionTracker>, 'chainId' | 'txKey'>;
  retryCount?: number;
  retryTimeout?: number;
  waitForTransactionReceiptParams?: WaitForTransactionReceiptParameters; // https://viem.sh/docs/actions/public/waitForTransactionReceipt#parameters
};

/**
 * Tracker method to track a transaction on the all viem (https://viem.sh/) supported chains
 *
 * @param {Object} params - The parameters object containing various callback functions and configuration options.
 * @param {Function} params.onInitialize - Callback function to be executed when the tracking process initializes.
 * @param {Function} params.onFinished - Callback function to be executed when the transaction is successfully tracked.
 * @param {Function} params.onFailed - Callback function to be executed when an error occurs during tracking.
 * @param {Function} params.onReplaced - Callback function to be executed when the transaction is replaced.
 * @param {Object} params.tx - Transaction details object.
 * @param {Array} params.chains - Array of chain details.
 * @param {number} params.retryCount - Number of times to retry tracking the transaction.
 * @param {number} params.retryTimeout - Timeout value in milliseconds between retry attempts.
 * @param {Object} params.waitForTransactionReceiptParams - Additional parameters for waiting for transaction receipt.
 *
 * @return {Promise<void>} A Promise that resolves once the tracking process is completed.
 */
export async function evmTracker({
  onInitialize,
  onFinished,
  onFailed,
  onReplaced,
  tx,
  chains,
  retryCount,
  retryTimeout,
  waitForTransactionReceiptParams,
}: EVMTrackerParams): Promise<void> {
  const rc = retryCount ?? 10;
  const client = createViemClient(tx.chainId, chains);

  if (onInitialize) {
    onInitialize();
  }

  if (client) {
    for (let i = 0; i < rc; i++) {
      try {
        const localTx = await getTransaction(client, { hash: tx.txKey as Hex });

        let txWasReplaced = false;
        const hash = localTx.hash as Hex;

        try {
          const txn = await waitForTransactionReceipt(client, {
            hash,
            onReplaced: (replacement: ReplacementReturnType) => {
              onReplaced(replacement);
              txWasReplaced = true;
            },
            ...waitForTransactionReceiptParams,
            pollingInterval: waitForTransactionReceiptParams?.pollingInterval ?? 10_000,
          });

          if (txWasReplaced) {
            return;
          }

          await onFinished(localTx, txn, client);
        } catch (e) {
          onFailed(e);
          console.error('Error when check TX receipt:', e);
        }

        return;
      } catch (e) {
        if (i === rc - 1) {
          onFailed(e);
          console.error('Error when tracking ETH TX:', e);
          return;
        }
      }

      await new Promise((resolve) => setTimeout(resolve, retryTimeout ?? 3000));
    }
  }
}

export async function evmTrackerForStore<T extends Transaction<TransactionTracker>>({
  tx,
  chains,
  transactionsPool,
  updateTxParams,
  onSucceedCallbacks,
}: Pick<EVMTrackerParams, 'chains'> &
  Pick<ITxTrackingStore<T>, 'transactionsPool' | 'updateTxParams' | 'onSucceedCallbacks'> & {
    tx: T;
  }) {
  return await evmTracker({
    tx,
    chains,
    onInitialize: () => {
      updateTxParams({
        txKey: tx.txKey,
        hash: tx.txKey as Hex,
        pending: tx.pending,
      });
    },
    onFinished: async (localTx, txn, client) => {
      const txBlock = await getBlock(client, { blockNumber: txn.blockNumber });
      const timestamp = Number(txBlock.timestamp);
      updateTxParams({
        txKey: tx.txKey,
        status: txn.status === 'success' ? TransactionStatus.Success : TransactionStatus.Reverted,
        to: isHex(txn.to) ? txn.to : undefined,
        nonce: localTx.nonce,
        pending: false,
        isError: txn.status !== 'success',
        hash: localTx.hash,
        finishedTimestamp: timestamp,
      });
      const updatedTX = transactionsPool[tx.txKey];
      if (onSucceedCallbacks) {
        onSucceedCallbacks(updatedTX);
      }
    },
    onReplaced: (replacement) => {
      updateTxParams({
        txKey: tx.txKey,
        status: TransactionStatus.Replaced,
        replacedTxHash: replacement.transaction.hash,
        pending: false,
      });
    },
    onFailed: () => {
      updateTxParams({
        txKey: tx.txKey,
        status: TransactionStatus.Failed,
        pending: false,
        isError: true,
      });
    },
  });
}
