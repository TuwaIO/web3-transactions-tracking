import { ArrowPathIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { IInitializeTxTrackingStore, Transaction, TransactionStatus } from '@tuwa/web3-transactions-tracking-core/dist';
import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from 'react';

import { useLabels } from '../providers/LabelsProvider';
import { cn } from '../utils/cn';

type ButtonStatus = 'idle' | 'loading' | 'succeed' | 'failed';

export interface TxActionButtonProps<TR, T extends Transaction<TR>>
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<IInitializeTxTrackingStore<TR, T>, 'transactionsPool'> {
  children: ReactNode;
  action: () => Promise<void>;
  getLastTxKey: () => string | undefined;
  loadingContent?: ReactNode;
  succeedContent?: ReactNode;
  failedContent?: ReactNode;
  resetTimeout?: number;
}

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
}: TxActionButtonProps<TR, T>) {
  const labels = useLabels();
  const [status, setStatus] = useState<ButtonStatus>('idle');
  const [trackedTxKey, setTrackedTxKey] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (trackedTxKey) {
      const trackedTransaction = transactionsPool[trackedTxKey];
      if (trackedTransaction) {
        if (trackedTransaction.status === TransactionStatus.Success) {
          setStatus('succeed');
        } else if (trackedTransaction.status === TransactionStatus.Failed) {
          setStatus('failed');
        }
      }
    }
  }, [transactionsPool, trackedTxKey]);

  useEffect(() => {
    if (status === 'succeed' || status === 'failed') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setTrackedTxKey(undefined);
      }, resetTimeout);
      return () => clearTimeout(timer);
    }
  }, [status, resetTimeout]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(e);
    setStatus('loading');
    try {
      await action();
      setTrackedTxKey(getLastTxKey());
    } catch (error) {
      console.error('Transaction initiation failed', error);
      setStatus('failed');
    }
  };

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
        status === 'idle' && 'bg-[var(--tuwa-button-gradient-from)] text-[var(--tuwa-text-on-accent)] hover:opacity-90',
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
