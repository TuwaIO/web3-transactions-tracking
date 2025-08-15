/**
 * @file This file contains the `TransactionKey` component, which is responsible for displaying
 * the various identifiers associated with a transaction (e.g., hash, Gelato Task ID).
 */

import { selectTxExplorerLink, TransactionTracker } from '@tuwaio/evm-transactions-tracking';
import { Transaction } from '@tuwaio/web3-transactions-tracking-core';
import { JSX, ReactNode } from 'react';
import { Chain, Hex } from 'viem';

import { useLabels } from '../providers';
import { cn } from '../utils';
import { HashLink } from './HashLink';
import { WalletInfoModalProps } from './WalletInfoModal';

// Utility type to extract the props of the HashLink component.
type CustomHashLinkProps = Parameters<typeof HashLink>[0];

export interface ToastTransactionKeyProps<TR, T extends Transaction<TR>>
  extends Pick<WalletInfoModalProps<TR, T>, 'transactionsPool'> {
  /** The transaction object to display identifiers for. */
  tx: T;
  /** An array of supported chain objects, used for generating explorer links. */
  appChains: Chain[];
  /** The visual variant, which applies different container styles. */
  variant?: 'toast' | 'history';
  /** Optional additional CSS classes for the container. */
  className?: string;
  /**
   * An optional render prop to allow for complete customization of how the hash link is rendered.
   * If not provided, the default `HashLink` component will be used.
   */
  renderHashLink?: (props: CustomHashLinkProps) => ReactNode;
}

/**
 * A component that intelligently displays the relevant keys and hashes for a transaction.
 * It handles different tracker types (EVM, Gelato, Safe) and statuses (e.g., replaced transactions).
 *
 * @param {ToastTransactionKeyProps<TR, T>} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
export function TransactionKey<TR, T extends Transaction<TR>>({
  tx,
  appChains,
  transactionsPool,
  variant = 'toast',
  className,
  renderHashLink,
}: ToastTransactionKeyProps<TR, T>): JSX.Element {
  const labels = useLabels();

  const wasReplaced = !!tx.replacedTxHash;

  const containerClasses =
    variant === 'toast'
      ? 'mt-2 flex w-full flex-col gap-y-2 border-t border-[var(--tuwa-border-primary)] pt-2'
      : 'flex w-full flex-col gap-y-2';

  // Helper to use the render prop if provided, otherwise default to HashLink.
  const renderHash = (props: CustomHashLinkProps) => {
    return renderHashLink ? renderHashLink(props) : <HashLink {...props} />;
  };

  return (
    <div className={cn(containerClasses, className)}>
      {/* Display tracker-specific identifiers (like Gelato Task ID or SafeTxHash) */}
      {tx.tracker === TransactionTracker.Gelato &&
        renderHash({ label: labels.hashLabels.gelato, hash: tx.txKey, variant: 'compact' })}
      {tx.tracker === TransactionTracker.Safe &&
        renderHash({ label: labels.hashLabels.safe, hash: tx.txKey, variant: 'compact' })}

      {/* Display on-chain hashes */}
      {wasReplaced ? (
        // Case 1: The transaction was replaced (e.g., sped up).
        <>
          {tx.hash && renderHash({ label: labels.hashLabels.original, hash: tx.hash, variant: 'compact' })}
          {renderHash({
            label: labels.hashLabels.replaced,
            hash: tx.replacedTxHash as Hex,
            // The explorer link should point to the NEW (replaced) transaction.
            explorerUrl: selectTxExplorerLink(transactionsPool, appChains, tx.hash as Hex, tx.replacedTxHash as Hex),
          })}
        </>
      ) : (
        // Case 2: Standard transaction hash.
        tx.hash &&
        renderHash({
          label: labels.hashLabels.default,
          hash: tx.hash as Hex,
          explorerUrl: selectTxExplorerLink(transactionsPool, appChains, tx.hash as Hex),
        })
      )}
    </div>
  );
}
