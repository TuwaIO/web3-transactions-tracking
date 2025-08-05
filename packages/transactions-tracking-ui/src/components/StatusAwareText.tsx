import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { TransactionStatus } from '@tuwa/web3-transactions-tracking-core/src/types';

const STATUS_MAP = {
  [TransactionStatus.Success]: { index: 1, colorClass: 'text-green-500' },
  [TransactionStatus.Failed]: { index: 2, colorClass: 'text-red-500' },
  [TransactionStatus.Reverted]: { index: 2, colorClass: 'text-red-500' },
  [TransactionStatus.Replaced]: { index: 3, colorClass: '' },
  default: { index: 0, colorClass: '' },
};

export function StatusAwareText<TR, T extends Transaction<TR>>({
  tx,
  source,
  fallback,
  baseClasses,
  applyColor = false,
}: {
  tx: T;
  source?: string | string[];
  fallback?: string;
  baseClasses: string;
  applyColor?: boolean;
}) {
  if (typeof source === 'string') {
    return <div className={baseClasses}>{source}</div>;
  }

  if (Array.isArray(source)) {
    const statusKey = tx.status || 'default';
    const config = STATUS_MAP[statusKey] || STATUS_MAP['default'];

    const text = source[config.index];
    const color = applyColor ? config.colorClass : '';

    return <div className={`${baseClasses} ${color}`}>{text}</div>;
  }

  if (fallback) {
    return <div className={baseClasses}>{fallback}</div>;
  }

  return null;
}
