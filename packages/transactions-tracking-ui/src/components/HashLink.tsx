import { ArrowTopRightOnSquareIcon, CheckIcon, ClipboardIcon } from '@heroicons/react/24/solid';

import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { useLabels } from '../providers/LabelsProvider';
import { cn } from '../utils/cn';
import { textCenterEllipsis } from '../utils/textCenterEllipsis';

export function HashLink({
  label,
  hash,
  explorerUrl,
  variant = 'default',
  className,
}: {
  label?: string;
  hash: string;
  explorerUrl?: string;
  variant?: 'default' | 'compact';
  className?: string;
}) {
  const { isCopied, copy } = useCopyToClipboard();
  const labels = useLabels();

  const containerClasses = cn(
    'flex items-center justify-between',
    variant === 'default' && 'text-sm',
    variant === 'compact' && 'text-xs',
    className,
  );

  const labelClasses = cn(
    variant === 'default' && 'font-bold text-[var(--tuwa-text-primary)]',
    variant === 'compact' && 'font-medium text-[var(--tuwa-text-secondary)]',
  );

  const hashContent = <span className="font-mono">{textCenterEllipsis(hash, 5, 5)}</span>;

  return (
    <div className={containerClasses}>
      {label && <span className={labelClasses}>{label}:</span>}
      <div className="flex items-center gap-x-2">
        {explorerUrl ? (
          <a
            href={explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 text-[var(--tuwa-text-accent)] hover:underline"
            title={labels.actions.viewOnExplorer}
          >
            {hashContent}
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        ) : (
          hashContent
        )}
        <button
          onClick={() => copy(hash)}
          className="cursor-pointer text-[var(--tuwa-text-tertiary)] transition-colors hover:text-[var(--tuwa-text-secondary)]"
          title={labels.actions.copy}
        >
          {isCopied ? (
            <CheckIcon className="h-4 w-4 text-[var(--tuwa-success-icon)]" />
          ) : (
            <ClipboardIcon className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
