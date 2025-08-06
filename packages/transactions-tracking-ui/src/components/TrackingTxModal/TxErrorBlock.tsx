import { DocumentDuplicateIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { useLabels } from '../../providers/LabelsProvider';
import { cn } from '../../utils/cn';

export function TxErrorBlock({ error, className }: { error?: string; className?: string }) {
  const { isCopied, copy } = useCopyToClipboard();
  const labels = useLabels();

  if (!error) return null;

  return (
    <div
      className={cn(
        'rounded-lg border border-[var(--tuwa-error-icon)]/30 bg-[var(--tuwa-error-bg)] p-3 text-sm',
        className,
      )}
    >
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-[var(--tuwa-error-icon)]">
          <ExclamationTriangleIcon className="h-5 w-5" />
          <span>{labels.txError.title}</span>
        </div>
        <button
          onClick={() => copy(error)}
          title={labels.actions.copy}
          className="cursor-pointer text-[var(--tuwa-error-icon)]/50 transition-colors hover:text-[var(--tuwa-error-icon)]"
        >
          <DocumentDuplicateIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="max-h-24 overflow-y-auto rounded bg-[var(--tuwa-bg-primary)] p-2">
        <p className="font-mono text-xs text-[var(--tuwa-error-text)] break-all">{error}</p>
      </div>

      <div className="mt-1 h-5 text-right">
        <p
          className={cn(
            'text-xs text-[var(--tuwa-success-icon)] transition-opacity duration-300 ease-in-out',
            isCopied ? 'opacity-100' : 'opacity-0',
          )}
        >
          {labels.txError.copied}
        </p>
      </div>
    </div>
  );
}
