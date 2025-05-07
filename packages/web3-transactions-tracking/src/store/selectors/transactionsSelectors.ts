import { Chain, Hex } from 'viem';

import { Transaction, TransactionTracker } from '../../types';
import { gnosisSafeLinksHelper } from '../../utils/safeConstants';
import { TransactionPool } from '../txTrackingStore';

/**
 * Retrieves all transactions from a provided transaction pool and sorts them based on local timestamp.
 *
 * @param transactionsPool - The transaction pool containing transactions.
 * @template T - Type information for the transactions.
 * @returns An array of transactions sorted by local timestamp.
 */
export const selectAllTransactions = <T extends Transaction>(transactionsPool: TransactionPool<T>) => {
  return Object.values(transactionsPool).sort((a, b) => Number(a.localTimestamp) - Number(b.localTimestamp));
};

/**
 * Selects pending transactions from the provided transactions pool.
 *
 * @template T - The type of transactions in the pool
 * @param {TransactionPool<T>} transactionsPool - The pool of transactions to select from
 * @returns {Array<T>} - An array of pending transactions selected from the pool
 */
export const selectPendingTransactions = <T extends Transaction>(transactionsPool: TransactionPool<T>): Array<T> => {
  return selectAllTransactions(transactionsPool).filter((tx) => tx.pending);
};

/**
 * Retrieves a transaction from a transaction pool based on the provided key.
 *
 * @template T - The type of transactions in the pool.
 * @param {TransactionPool<T>} transactionsPool - The pool of transactions to search in.
 * @param {string} key - The key used to retrieve the transaction.
 * @returns {T | undefined} The transaction associated with the key, or undefined if not found.
 */
export const selectTXByKey = <T extends Transaction>(
  transactionsPool: TransactionPool<T>,
  key: string,
): T | undefined => {
  return transactionsPool[key];
};

/**
 * Finds and returns a transaction from a transaction pool based on the provided hash.
 *
 * @template T - Type of Transaction
 * @param {TransactionPool<T>} transactionsPool - The transaction pool containing transactions
 * @param {Hex} hash - The hash of the transaction to search for
 * @returns {T | undefined} - The transaction with the provided hash, or undefined if not found
 */
export const selectTXByHash = <T extends Transaction>(
  transactionsPool: TransactionPool<T>,
  hash: Hex,
): T | undefined => {
  const txByKey = selectTXByKey<T>(transactionsPool, hash);
  if (txByKey) {
    return txByKey;
  }
  return selectAllTransactions(transactionsPool).find((tx) => tx.hash === hash);
};

/**
 * Selects all transactions from the given transaction pool that match the specified 'from' wallet address.
 *
 * @template T - The type of transaction to retrieve
 * @param {TransactionPool<T>} transactionsPool - The transaction pool to search for transactions
 * @param {Hex} from - The wallet address to filter transactions by
 * @returns {T[]} - An array of transactions where the 'from' address matches the specified wallet address
 */
export const selectAllTransactionsByActiveWallet = <T extends Transaction>(
  transactionsPool: TransactionPool<T>,
  from: Hex,
): T[] => {
  return selectAllTransactions(transactionsPool).filter((tx) => tx.from === from);
};

/**
 * Selects pending transactions from the provided transaction pool that match the specified 'from' address.
 *
 * @template T - The type of transactions in the pool.
 * @param {TransactionPool<T>} transactionsPool - The pool containing the transactions to filter from.
 * @param {Hex} from - The 'from' address to filter transactions by.
 * @returns {Array<T>} - An array of pending transactions with the specified 'from' address.
 */
export const selectPendingTransactionsByActiveWallet = <T extends Transaction>(
  transactionsPool: TransactionPool<T>,
  from: Hex,
): Array<T> => {
  return selectPendingTransactions(transactionsPool).filter((tx) => tx.from === from);
};

/**
 * Function that generates a transaction explorer link for a given transaction hash, based on the provided parameters.
 *
 * @template T - Generic type extending Transaction
 * @param transactionsPool - The transaction pool containing transactions
 * @param chains - An array of Chain objects
 * @param txHash - The hash of the transaction for which the explorer link is generated
 * @param replacedTxHash - Optional. The hash of the replaced transaction
 *
 * @returns A transaction explorer link for the specified transaction hash
 */
export const selectTxExplorerLink = <T extends Transaction>(
  transactionsPool: TransactionPool<T>,
  chains: Chain[],
  txHash: Hex,
  replacedTxHash?: Hex,
) => {
  const tx = selectTXByHash(transactionsPool, txHash);
  if (!tx) {
    return '';
  }

  const returnValue = (hash: string) => {
    if (tx.tracker !== TransactionTracker.Safe) {
      return `${chains.filter((chain) => chain.id === tx.chainId)[0].blockExplorers?.default.url}/tx/${hash}`;
    } else {
      return `${gnosisSafeLinksHelper[tx.chainId]}${tx.from}/transactions/tx?id=multisig_${tx.from}_${tx.txKey}`;
    }
  };

  if (replacedTxHash) {
    return returnValue(replacedTxHash);
  } else {
    return returnValue(txHash);
  }
};
