import { Chain, Client, GetTransactionReturnType, Hex, isHex, ReplacementReturnType, TransactionReceipt } from 'viem';
import { getBlock, getTransaction, waitForTransactionReceipt } from 'viem/actions';

import { createViemClient } from '../helpers/createViemClient';
import { ITxTrackingStore } from '../store/txTrackingStore';
import { BaseTransaction, Transaction, TransactionStatus } from '../types';

export type EthereumTransaction = BaseTransaction & {
  to?: Hex;
  nonce?: number;
};

type EthereumTrackerParams<T extends Transaction> = {
  tx: T;
  chains: Chain[];
  onInitialize?: () => void;
  onSucceed: (localTx: GetTransactionReturnType, txn: TransactionReceipt, client: Client) => Promise<void>;
  onFailed: (e?: unknown) => void;
  onReplaced: (replacement: ReplacementReturnType) => void;
};

export async function ethereumTracker<T extends Transaction>({
  onInitialize,
  onSucceed,
  onFailed,
  onReplaced,
  tx,
  chains,
}: EthereumTrackerParams<T>) {
  const retryCount = 10;
  const client = createViemClient(tx.chainId, chains);

  if (onInitialize) {
    onInitialize();
  }

  if (client) {
    for (let i = 0; i < retryCount; i++) {
      try {
        // Find the transaction in the waiting pool
        const localTx = await getTransaction(client, { hash: tx.txKey as Hex });

        let txWasReplaced = false;
        const hash = localTx.hash as Hex;

        try {
          // If the transaction is found, wait for the receipt
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

          await onSucceed(localTx, txn, client);
        } catch (e) {
          onFailed(e);
          console.error('Error when check TX receipt:', e);
        }

        return;
      } catch (e) {
        if (i === retryCount - 1) {
          // If the transaction is not found after the last retry, set the status to unknownError (it could be replaced with completely new one or lost in mempool)
          onFailed(e);
          console.error('Error when tracking ETH TX:', e);
          return;
        }
      }

      // Wait before the next retry
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }
}

export async function ethereumTrackerForStore<T extends Transaction>({
  tx,
  chains,
  transactionsPool,
  updateTxStatus,
  onSucceedCallbacks,
}: Pick<EthereumTrackerParams<T>, 'tx' | 'chains'> &
  Pick<ITxTrackingStore<T>, 'transactionsPool' | 'updateTxStatus' | 'onSucceedCallbacks'>) {
  return await ethereumTracker<T>({
    tx,
    chains,
    onInitialize: () => {
      updateTxStatus({
        txKey: tx.txKey,
        hash: tx.txKey as Hex,
        pending: tx.pending,
      });
    },
    onSucceed: async (localTx, txn, client) => {
      updateTxStatus({
        txKey: tx.txKey,
        status: txn.status === 'success' ? TransactionStatus.Success : TransactionStatus.Reverted,
        to: isHex(txn.to) ? txn.to : undefined,
        nonce: localTx.nonce,
        pending: false,
        isError: txn.status !== 'success',
        hash: localTx.hash,
      });

      const updatedTX = transactionsPool[tx.txKey];
      const txBlock = await getBlock(client, { blockNumber: txn.blockNumber });
      const timestamp = Number(txBlock.timestamp);

      onSucceedCallbacks({
        ...updatedTX,
        timestamp,
      });
    },
    onReplaced: (replacement) => {
      updateTxStatus({
        txKey: tx.txKey,
        status: TransactionStatus.Replaced,
        replacedTxHash: replacement.transaction.hash,
        pending: false,
        isError: true,
      });
    },
    onFailed: () => {
      updateTxStatus({
        txKey: tx.txKey,
        status: TransactionStatus.Failed,
        pending: false,
        isError: true,
      });
    },
  });
}
