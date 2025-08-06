import { ArrowTopRightOnSquareIcon, CheckIcon, ClipboardIcon } from '@heroicons/react/24/solid';

import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { useLabels } from '../../providers/LabelsProvider';
import { cn } from '../../utils/cn';
import { textCenterEllipsis } from '../../utils/textCenterEllipsis';

export function WalletAddressDisplay({ address, className }: { address: string; className?: string }) {
  const { isCopied, copy } = useCopyToClipboard();
  const labels = useLabels();
  const explorerLink = `https://etherscan.io/address/${address}`;

  return (
    <div
      className={cn(
        'flex items-center gap-x-3 rounded-full bg-[var(--tuwa-bg-muted)] px-3 py-1 font-mono text-xs text-[var(--tuwa-text-secondary)]',
        className,
      )}
    >
      <span>{textCenterEllipsis(address, 6, 6)}</span>
      <button
        title={labels.actions.copy}
        onClick={() => copy(address)}
        className="cursor-pointer transition-colors hover:text-[var(--tuwa-text-primary)]"
      >
        {isCopied ? (
          <CheckIcon className="h-4 w-4 text-[var(--tuwa-success-icon)]" />
        ) : (
          <ClipboardIcon className="h-4 w-4" />
        )}
      </button>
      <a
        href={explorerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-[var(--tuwa-text-accent)]"
        title={labels.actions.viewOnExplorer}
      >
        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
      </a>
    </div>
  );
}
