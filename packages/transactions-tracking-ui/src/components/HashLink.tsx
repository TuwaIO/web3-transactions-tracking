import { ArrowTopRightOnSquareIcon, CheckIcon, ClipboardIcon } from '@heroicons/react/24/solid';

import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { textCenterEllipsis } from '../utils/textCenterEllipsis';

export function HashLink({
  label,
  hash,
  explorerUrl,
  variant = 'default',
}: {
  label?: string;
  hash: string;
  explorerUrl?: string;
  variant?: 'default' | 'compact';
}) {
  const { isCopied, copy } = useCopyToClipboard();

  const styles = {
    default: {
      container: 'text-sm',
      label: 'font-bold text-gray-800',
    },
    compact: {
      container: 'text-xs',
      label: 'font-medium text-gray-500',
    },
  };
  const currentStyle = styles[variant];

  const hashContent = <span className="font-mono">{textCenterEllipsis(hash, 5, 5)}</span>;

  return (
    <div className={`flex items-center justify-between ${currentStyle.container}`}>
      {label && <span className={currentStyle.label}>{label}:</span>}
      <div className="flex items-center gap-x-2">
        {explorerUrl ? (
          <a
            href={explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 text-blue-600 hover:underline"
          >
            {hashContent}
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        ) : (
          hashContent
        )}
        <button onClick={() => copy(hash)} className="cursor-pointer text-gray-400 hover:text-gray-600">
          {isCopied ? <CheckIcon className="h-4 w-4 text-green-500" /> : <ClipboardIcon className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
