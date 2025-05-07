import { Chain, Client, GetTransactionReturnType, Hex, isHex, ReplacementReturnType, TransactionReceipt } from 'viem';
import { getBlock, getTransaction, waitForTransactionReceipt } from 'viem/actions';

import { ITxTrackingStore } from '../store/txTrackingStore';
import { Transaction, TransactionStatus } from '../types';
import { createViemClient } from '../utils/createViemClient';

export type EthereumTrackerParams = {
  onFinished: (localTx: GetTransactionReturnType, txn: TransactionReceipt, client: Client) => Promise<void>;
  onReplaced: (replacement: ReplacementReturnType) => void;
  chains: Chain[];
  onFailed: (e?: unknown) => void;
  onInitialize?: () => void;
  tx: Pick<Transaction, 'chainId' | 'txKey'>;
};

export async function ethereumTracker({
  onInitialize,
  onFinished,
  onFailed,
  onReplaced,
  tx,
  chains,
}: EthereumTrackerParams) {
  const retryCount = 10;
  const client = createViemClient(tx.chainId, chains);

  if (onInitialize) {
    onInitialize();
  }

  if (client) {
    for (let i = 0; i < retryCount; i++) {
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
            pollingInterval: 10_000,
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
        if (i === retryCount - 1) {
          onFailed(e);
          console.error('Error when tracking ETH TX:', e);
          return;
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }
}

export async function ethereumTrackerForStore<T extends Transaction>({
  tx,
  chains,
  transactionsPool,
  updateTxParams,
  onSucceedCallbacks,
}: Pick<EthereumTrackerParams, 'chains'> &
  Pick<ITxTrackingStore<T>, 'transactionsPool' | 'updateTxParams' | 'onSucceedCallbacks'> & {
    tx: T;
  }) {
  return await ethereumTracker({
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
      onSucceedCallbacks(updatedTX);
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
