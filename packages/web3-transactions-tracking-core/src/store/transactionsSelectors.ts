import { Transaction } from '../types';
import { TransactionPool } from './initializeTxTrackingStore';

export const selectAllTransactions = <TR, T extends Transaction<TR>>(transactionsPool: TransactionPool<TR, T>) => {
  return Object.values(transactionsPool).sort((a, b) => Number(a.localTimestamp) - Number(b.localTimestamp));
};

export const selectPendingTransactions = <TR, T extends Transaction<TR>>(
  transactionsPool: TransactionPool<TR, T>,
): Array<T> => {
  return selectAllTransactions(transactionsPool).filter((tx) => tx.pending);
};

export const selectTXByKey = <TR, T extends Transaction<TR>>(
  transactionsPool: TransactionPool<TR, T>,
  key: string,
): T | undefined => {
  return transactionsPool[key];
};

export const selectTXByHash = <TR, T extends Transaction<TR>>(
  transactionsPool: TransactionPool<TR, T>,
  hash: string,
): T | undefined => {
  const txByKey = selectTXByKey<TR, T>(transactionsPool, hash);
  if (txByKey) {
    return txByKey;
  }
  return selectAllTransactions(transactionsPool).find((tx) => tx.hash === hash);
};

export const selectAllTransactionsByActiveWallet = <TR, T extends Transaction<TR>>(
  transactionsPool: TransactionPool<TR, T>,
  from: string,
): T[] => {
  return selectAllTransactions(transactionsPool).filter((tx) => tx.from === from);
};

export const selectPendingTransactionsByActiveWallet = <TR, T extends Transaction<TR>>(
  transactionsPool: TransactionPool<TR, T>,
  from: string,
): Array<T> => {
  return selectPendingTransactions(transactionsPool).filter((tx) => tx.from === from);
};
