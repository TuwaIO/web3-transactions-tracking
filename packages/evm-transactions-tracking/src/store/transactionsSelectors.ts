import { TransactionPool } from '@tuwa/web3-transactions-tracking-core/dist/store/initializeTxTrackingStore';
import { selectTXByHash } from '@tuwa/web3-transactions-tracking-core/dist/store/transactionsSelectors';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { Chain, Hex } from 'viem';

import { TransactionTracker } from '../types';
import { gnosisSafeLinksHelper } from '../utils/safeConstants';

export const selectTxExplorerLink = <TR, T extends Transaction<TR>>(
  transactionsPool: TransactionPool<TR, T>,
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
