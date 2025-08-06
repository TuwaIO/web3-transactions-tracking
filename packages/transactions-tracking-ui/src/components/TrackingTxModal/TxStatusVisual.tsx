import { ArrowPathIcon, CheckCircleIcon, ClockIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

export function TxStatusVisual({
  isProcessing,
  isSucceed,
  isFailed,
  isReplaced,
}: {
  isProcessing?: boolean;
  isSucceed?: boolean;
  isFailed?: boolean;
  isReplaced?: boolean;
}) {
  let icon = <ClockIcon className="h-16 w-16 animate-pulse text-[var(--tuwa-pending-icon)]" />;

  if (isProcessing) {
    icon = <ArrowPathIcon className="h-16 w-16 animate-spin text-[var(--tuwa-text-accent)]" />;
  }
  if (isSucceed) {
    icon = <CheckCircleIcon className="h-16 w-16 text-[var(--tuwa-success-icon)]" />;
  }
  if (isFailed) {
    icon = <ExclamationCircleIcon className="h-16 w-16 text-[var(--tuwa-error-icon)]" />;
  }
  if (isReplaced) {
    icon = <ArrowPathIcon className="h-16 w-16 text-[var(--tuwa-info-icon)]" />;
  }

  return <div className="flex justify-center py-4">{icon}</div>;
}
