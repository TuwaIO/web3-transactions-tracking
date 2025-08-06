import { Transaction, TransactionStatus } from '@tuwa/web3-transactions-tracking-core/dist/types';

import { cn } from '../utils/cn';

const STATUS_MAP = {
  [TransactionStatus.Success]: { index: 1, colorClass: 'text-[var(--tuwa-success-icon)]' },
  [TransactionStatus.Failed]: { index: 2, colorClass: 'text-[var(--tuwa-error-icon)]' },
  [TransactionStatus.Reverted]: { index: 2, colorClass: 'text-[var(--tuwa-error-icon)]' },
  [TransactionStatus.Replaced]: { index: 3, colorClass: '' },
  default: { index: 0, colorClass: '' },
};

export function StatusAwareText<TR, T extends Transaction<TR>>({
  tx,
  source,
  fallback,
  variant,
  className,
  applyColor = false,
}: {
  tx: T;
  source?: string | string[];
  fallback?: string;
  variant: 'title' | 'description';
  className?: string;
  applyColor?: boolean;
}) {
  const baseClasses =
    variant === 'title'
      ? 'text-sm font-semibold text-[var(--tuwa-text-primary)]'
      : 'mt-1 text-xs text-[var(--tuwa-text-secondary)]';

  if (typeof source === 'string') {
    return <div className={cn(baseClasses, className)}>{source}</div>;
  }

  if (Array.isArray(source)) {
    const statusKey = tx.status || 'default';
    const config = STATUS_MAP[statusKey] || STATUS_MAP['default'];
    const text = source[config.index];
    const colorClass = applyColor ? config.colorClass : '';

    return <div className={cn(baseClasses, colorClass, className)}>{text}</div>;
  }

  if (fallback) {
    return <div className={cn(baseClasses, className)}>{fallback}</div>;
  }

  return null;
}
