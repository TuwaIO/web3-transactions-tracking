import { Chain, Hex } from 'viem';

import { Transaction, TransactionTracker } from '../../types';
import { gnosisSafeLinksHelper } from '../../utils/safeConstants';
import { TransactionPool } from '../txTrackingStore';

export const selectAllTransactions = <T extends Transaction>(transactionsPool: TransactionPool<T>) => {
  return Object.values(transactionsPool).sort((a, b) => Number(a.localTimestamp) - Number(b.localTimestamp));
};

export const selectPendingTransactions = <T extends Transaction>(transactionsPool: TransactionPool<T>) => {
  return selectAllTransactions(transactionsPool).filter((tx) => tx.pending);
};

export const selectTXByKey = <T extends Transaction>(transactionsPool: TransactionPool<T>, key: string) => {
  return transactionsPool[key];
};

export const selectTXByHash = <T extends Transaction>(transactionsPool: TransactionPool<T>, hash: Hex) => {
  const txByKey = selectTXByKey<T>(transactionsPool, hash);
  if (txByKey) {
    return txByKey;
  }
  return selectAllTransactions(transactionsPool).find((tx) => tx.hash === hash);
};

export const selectAllTransactionsByWallet = <T extends Transaction>(
  transactionsPool: TransactionPool<T>,
  from: Hex,
) => {
  return selectAllTransactions(transactionsPool).filter((tx) => tx.from === from);
};

export const selectPendingTransactionsByWallet = <T extends Transaction>(
  transactionsPool: TransactionPool<T>,
  from: Hex,
) => {
  return selectPendingTransactions(transactionsPool).filter((tx) => tx.from === from);
};

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
      return `${gnosisSafeLinksHelper[tx.chainId]}${tx.from}/transactions/tx?id=multisig_${tx.from}_${hash}`;
    }
  };

  if (replacedTxHash) {
    return returnValue(replacedTxHash);
  } else {
    return returnValue(txHash);
  }
};
