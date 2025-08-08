/**
 * @file This file contains the `TxActionButton`, a stateful button for initiating and tracking transactions.
 */

import { ArrowPathIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { IInitializeTxTrackingStore, Transaction, TransactionStatus } from '@tuwa/web3-transactions-tracking-core/dist';
import { ButtonHTMLAttributes, JSX, ReactNode, useEffect, useState } from 'react';

import { useLabels } from '../providers/LabelsProvider';
import { cn } from '../utils/cn';

// Defines the possible visual states of the button.
type ButtonStatus = 'idle' | 'loading' | 'succeed' | 'failed';

export interface TxActionButtonProps<TR, T extends Transaction<TR>>
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>,
    Pick<IInitializeTxTrackingStore<TR, T>, 'transactionsPool'> {
  /** The default content of the button when in the 'idle' state. */
  children: ReactNode;
  /** The async function to execute on click, which should initiate the transaction. */
  action: () => Promise<void>;
  /** A function that returns the key of the most recently initiated transaction. */
  getLastTxKey: () => string | undefined;
  /** Optional custom content to display in the 'loading' state. */
  loadingContent?: ReactNode;
  /** Optional custom content to display in the 'succeed' state. */
  succeedContent?: ReactNode;
  /** Optional custom content to display in the 'failed' state. */
  failedContent?: ReactNode;
  /** The duration (in ms) to display the succeed/failed state before resetting to idle. Defaults to 2500. */
  resetTimeout?: number;
}

/**
 * A stateful button that provides real-time feedback for a transaction's lifecycle.
 * It shows loading, success, and failure states by listening to the transaction pool.
 *
 * @param {TxActionButtonProps<TR, T>} props - The component props.
 * @returns {JSX.Element} The rendered action button.
 */
export function TxActionButton<TR, T extends Transaction<TR>>({
  children,
  action,
  getLastTxKey,
  loadingContent,
  succeedContent,
  failedContent,
  resetTimeout = 2500,
  transactionsPool,
  ...props
}: TxActionButtonProps<TR, T>): JSX.Element {
  const labels = useLabels();
  const [status, setStatus] = useState<ButtonStatus>('idle');
  const [trackedTxKey, setTrackedTxKey] = useState<string | undefined>(undefined);

  // Effect 1: Reacts to changes in the transaction pool to update the button's UI.
  useEffect(() => {
    if (trackedTxKey) {
      const trackedTransaction = transactionsPool[trackedTxKey];
      if (trackedTransaction?.status) {
        if (trackedTransaction.status === TransactionStatus.Success) {
          setStatus('succeed');
        } else if ([TransactionStatus.Failed].includes(trackedTransaction.status)) {
          setStatus('failed');
        }
      }
    }
  }, [transactionsPool, trackedTxKey]);

  // Effect 2: Resets the button to the 'idle' state after a timeout.
  useEffect(() => {
    if (status === 'succeed' || status === 'failed') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setTrackedTxKey(undefined);
      }, resetTimeout);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [status, resetTimeout]);

  const handleClick = async () => {
    setStatus('loading');
    try {
      await action();
      // Link the button to the transaction it just created.
      setTrackedTxKey(getLastTxKey());
    } catch (error) {
      // Handle immediate errors, e.g., user rejecting the transaction.
      console.error('Transaction initiation failed:', error);
      setStatus('failed');
    }
  };

  // --- Default Content Renderers ---
  const defaultLoadingContent = (
    <>
      <ArrowPathIcon className="h-4 w-4 animate-spin" />
      <span>{labels.trackedTxButton.loading}</span>
    </>
  );
  const defaultSucceedContent = (
    <>
      <CheckCircleIcon className="h-4 w-4" />
      <span>{labels.trackedTxButton.succeed}</span>
    </>
  );
  const defaultFailedContent = (
    <>
      <ExclamationCircleIcon className="h-4 w-4" />
      <span>{labels.trackedTxButton.failed}</span>
    </>
  );

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return loadingContent ?? defaultLoadingContent;
      case 'succeed':
        return succeedContent ?? defaultSucceedContent;
      case 'failed':
        return failedContent ?? defaultFailedContent;
      case 'idle':
      default:
        return children;
    }
  };

  return (
    <button
      {...props}
      disabled={status !== 'idle' || props.disabled}
      onClick={handleClick}
      className={cn(
        'cursor-pointer flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70',
        status === 'idle' &&
          'bg-gradient-to-r from-[var(--tuwa-button-gradient-from)] to-[var(--tuwa-button-gradient-to)] text-[var(--tuwa-text-on-accent)] hover:opacity-90',
        status === 'loading' && 'bg-gray-400 text-white',
        status === 'succeed' && 'bg-[var(--tuwa-success-bg)] text-[var(--tuwa-success-text)]',
        status === 'failed' && 'bg-[var(--tuwa-error-bg)] text-[var(--tuwa-error-text)]',
        props.className,
      )}
    >
      {renderContent()}
    </button>
  );
}
