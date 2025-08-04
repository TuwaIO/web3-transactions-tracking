import { ArrowPathIcon, CheckCircleIcon, ClockIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { TransactionStatus } from '@tuwa/web3-transactions-tracking-core/src/types';

export function TransactionStatusBadge<TR, T extends Transaction<TR>>({ tx }: { tx: T }) {
  const baseClasses = 'inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium';

  if (tx.pending) {
    return (
      <div className={`${baseClasses} bg-yellow-100 text-yellow-800`}>
        <ClockIcon className="h-4 w-4 animate-spin text-yellow-600" />
        Pending
      </div>
    );
  } else {
    switch (tx.status) {
      case TransactionStatus.Success:
        return (
          <div className={`${baseClasses} bg-green-100 text-green-700`}>
            <CheckCircleIcon className="h-4 w-4 text-green-500" />
            Success
          </div>
        );

      case TransactionStatus.Reverted:
      case TransactionStatus.Failed:
        return (
          <div className={`${baseClasses} bg-red-100 text-red-700`}>
            <XCircleIcon className="h-4 w-4 text-red-500" />
            {tx.status}
          </div>
        );

      case TransactionStatus.Replaced:
        return (
          <div className={`${baseClasses} bg-gray-100 text-gray-600`}>
            <ArrowPathIcon className="h-4 w-4 text-gray-500" />
            Replaced
          </div>
        );

      default:
        return <div className={`${baseClasses} bg-gray-100 text-gray-600`}>{tx.status}</div>;
    }
  }
}
