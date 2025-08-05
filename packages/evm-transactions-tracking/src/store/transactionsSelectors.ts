import { TransactionPool } from '@tuwa/web3-transactions-tracking-core/dist/store/initializeTxTrackingStore';
import { selectTXByHash } from '@tuwa/web3-transactions-tracking-core/dist/store/transactionsSelectors';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { Chain, Hex } from 'viem';

import { TransactionTracker } from '../types';
import { gnosisSafeLinksHelper } from '../utils/safeConstants';

/**
 * Generates and returns a transaction explorer link based on the provided transaction hash and related information.
 *
 * @template TR - The type representing transaction request details.
 * @template T - The type representing a transaction, extending the base Transaction<TR>.
 *
 * @param {TransactionPool<TR, T>} transactionsPool - The transaction pool containing all transactions.
 * @param {Chain[]} chains - An array of chain objects, each representing a blockchain network.
 * @param {Hex} txHash - The hash of the transaction for which the explorer link is being generated.
 * @param {Hex} [replacedTxHash] - The hash of a replaced transaction, if applicable, to override the original hash.
 *
 * @returns {string} The transaction explorer link as a string. Returns an empty string if the transaction with the given hash is not found.
 */
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
