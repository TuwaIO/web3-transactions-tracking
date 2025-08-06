import { ArrowPathIcon, CheckCircleIcon, ClockIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { Transaction, TransactionStatus } from '@tuwa/web3-transactions-tracking-core/dist/types';

import { useLabels } from '../providers/LabelsProvider';
import { cn } from '../utils/cn';

export function TransactionStatusBadge<TR, T extends Transaction<TR>>({
  tx,
  className,
}: {
  tx: T;
  className?: string;
}) {
  const labels = useLabels();

  const STATUS_CONFIG = {
    Pending: {
      label: labels.statuses.pending,
      Icon: ClockIcon,
      badgeClasses: 'bg-[var(--tuwa-pending-bg)] text-[var(--tuwa-pending-text)]',
      iconClasses: 'animate-spin text-[var(--tuwa-pending-icon)]',
    },
    [TransactionStatus.Success]: {
      label: labels.statuses.success,
      Icon: CheckCircleIcon,
      badgeClasses: 'bg-[var(--tuwa-success-bg)] text-[var(--tuwa-success-text)]',
      iconClasses: 'text-[var(--tuwa-success-icon)]',
    },
    [TransactionStatus.Failed]: {
      label: labels.statuses.failed,
      Icon: XCircleIcon,
      badgeClasses: 'bg-[var(--tuwa-error-bg)] text-[var(--tuwa-error-text)]',
      iconClasses: 'text-[var(--tuwa-error-icon)]',
    },
    [TransactionStatus.Reverted]: {
      label: labels.statuses.reverted,
      Icon: XCircleIcon,
      badgeClasses: 'bg-[var(--tu-error-bg)] text-[var(--tuwa-error-text)]',
      iconClasses: 'text-[var(--tuwa-error-icon)]',
    },
    [TransactionStatus.Replaced]: {
      label: labels.statuses.replaced,
      Icon: ArrowPathIcon,
      badgeClasses: 'bg-[var(--tuwa-info-bg)] text-[var(--tuwa-info-text)]',
      iconClasses: 'text-[var(--tuwa-info-icon)]',
    },
  };

  const baseClasses = 'inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium';

  const statusKey = tx.pending ? 'Pending' : tx.status;
  const config = statusKey ? STATUS_CONFIG[statusKey] : null;

  if (!config) {
    return (
      <div className={cn(baseClasses, 'bg-[var(--tuwa-info-bg)] text-[var(--tuwa-info-text)]', className)}>
        {tx.status ?? labels.statuses.unknown}
      </div>
    );
  }

  const { label, Icon, badgeClasses, iconClasses } = config;

  return (
    <div className={cn(baseClasses, badgeClasses, className)}>
      <Icon className={cn('h-4 w-4', iconClasses)} />
      {label}
    </div>
  );
}
