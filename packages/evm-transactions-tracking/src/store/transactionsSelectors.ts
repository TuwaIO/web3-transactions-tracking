/**
 * @file This file contains selector functions specific to the EVM package.
 * These selectors help derive UI-specific data, such as block explorer links, from the store state.
 */

import { selectTXByHash, Transaction, TransactionPool } from '@tuwa/web3-transactions-tracking-core/dist';
import { Chain, Hex } from 'viem';

import { TransactionTracker } from '../types';
import { gnosisSafeLinksHelper } from '../utils/safeConstants';

/**
 * Generates a URL to a block explorer for a given transaction.
 * It handles different URL structures for standard EVM transactions and Safe transactions.
 *
 * @template TR - The generic type for the tracker identifier.
 * @template T - The transaction type.
 * @param {TransactionPool<TR, T>} transactionsPool - The entire pool of transactions from the store.
 * @param {Chain[]} chains - An array of supported chain objects from viem.
 * @param {Hex} txHash - The hash of the transaction for which to generate the link.
 * @param {Hex} [replacedTxHash] - Optional. If provided, the link will be generated for this hash instead of the original.
 * @returns {string} The URL to the transaction on the corresponding block explorer, or an empty string if not found.
 */
export const selectTxExplorerLink = <TR, T extends Transaction<TR>>(
  transactionsPool: TransactionPool<TR, T>,
  chains: Chain[],
  txHash: Hex,
  replacedTxHash?: Hex,
): string => {
  const tx = selectTXByHash(transactionsPool, txHash);

  if (!tx) {
    return '';
  }

  /**
   * Internal helper to construct the final URL based on the tracker type.
   * @param {string} hash - The transaction hash to include in the URL.
   * @returns {string} The constructed explorer URL.
   */
  const constructUrl = (hash: string): string => {
    // For Safe transactions, generate a link to the Safe web app.
    if (tx.tracker === TransactionTracker.Safe) {
      const safeBaseUrl = gnosisSafeLinksHelper[tx.chainId];
      return safeBaseUrl ? `${safeBaseUrl}${tx.from}/transactions/tx?id=multisig_${tx.from}_${tx.txKey}` : '';
    }

    // For standard EVM transactions, find the chain's default block explorer.
    const chain = chains.find((chain) => chain.id === tx.chainId);

    if (!chain?.blockExplorers?.default.url) {
      // Return empty string if the chain or its explorer URL is not configured.
      return '';
    }

    return `${chain.blockExplorers.default.url}/tx/${hash}`;
  };

  // Prioritize the replaced hash if it exists, otherwise use the original.
  return constructUrl(replacedTxHash || txHash);
};
