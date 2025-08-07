import { Web3Icon } from '@bgd-labs/react-web3-icons';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist';
import { TransactionPool } from '@tuwa/web3-transactions-tracking-core/src/store/initializeTxTrackingStore';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ReactNode } from 'react';
import { Chain } from 'viem';

import { cn } from '../utils/cn';
import { StatusAwareText } from './StatusAwareText';
import { ToastTransactionKey } from './ToastTransactionKey';
import { TransactionStatusBadge } from './TransactionStatusBadge';

dayjs.extend(relativeTime);

type CustomIconProps = { chainId: number };
type CustomStatusAwareTextProps = Parameters<typeof StatusAwareText>[0];
type CustomTimestampProps = { timestamp?: number };
type CustomStatusBadgeProps<TR, T extends Transaction<TR>> = Parameters<typeof TransactionStatusBadge<TR, T>>[0];
type CustomTransactionKeyProps<TR, T extends Transaction<TR>> = Parameters<typeof ToastTransactionKey<TR, T>>[0];

export type TransactionHistoryItemCustomization<TR, T extends Transaction<TR>> = {
  components?: {
    icon?: (props: CustomIconProps) => ReactNode;
    title?: (props: CustomStatusAwareTextProps) => ReactNode;
    description?: (props: CustomStatusAwareTextProps) => ReactNode;
    timestamp?: (props: CustomTimestampProps) => ReactNode;
    statusBadge?: (props: CustomStatusBadgeProps<TR, T>) => ReactNode;
    transactionKey?: (props: CustomTransactionKeyProps<TR, T>) => ReactNode;
  };
};

export function TransactionHistoryItem<TR, T extends Transaction<TR>>({
  tx,
  appChains,
  transactionsPool,
  className,
  customization,
}: {
  tx: T;
  appChains: Chain[];
  transactionsPool: TransactionPool<TR, T>;
  className?: string;
  customization?: TransactionHistoryItemCustomization<TR, T>;
}) {
  const C = customization?.components;

  return (
    <div
      className={cn(
        'flex flex-col gap-2 border-b border-[var(--tuwa-border-secondary)] p-3 transition-colors hover:bg-[var(--tuwa-bg-secondary)]',
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--tuwa-bg-muted)]">
            {C?.icon ? (
              C.icon({ chainId: tx.chainId })
            ) : (
              <div className="h-8 w-8 text-[var(--tuwa-text-secondary)]">
                <Web3Icon chainId={tx.chainId} />
              </div>
            )}
          </div>
          <div>
            {C?.title ? (
              C.title({ txStatus: tx.status, source: tx.title, fallback: tx.type, variant: 'title', applyColor: true })
            ) : (
              <StatusAwareText txStatus={tx.status} source={tx.title} fallback={tx.type} variant="title" applyColor />
            )}

            {C?.timestamp ? (
              C.timestamp({ timestamp: tx.localTimestamp })
            ) : (
              <span className="mb-1 block text-xs text-[var(--tuwa-text-secondary)]">
                {tx.localTimestamp ? dayjs.unix(tx.localTimestamp).fromNow() : '...'}
              </span>
            )}

            {C?.description ? (
              C.description({ txStatus: tx.status, source: tx.description, variant: 'description' })
            ) : (
              <StatusAwareText txStatus={tx.status} source={tx.description} variant="description" />
            )}
          </div>
        </div>
        {C?.statusBadge ? C.statusBadge({ tx }) : <TransactionStatusBadge tx={tx} />}
      </div>

      {C?.transactionKey ? (
        C.transactionKey({ tx, appChains, transactionsPool, variant: 'history' })
      ) : (
        <ToastTransactionKey tx={tx} appChains={appChains} transactionsPool={transactionsPool} variant="history" />
      )}
    </div>
  );
}
