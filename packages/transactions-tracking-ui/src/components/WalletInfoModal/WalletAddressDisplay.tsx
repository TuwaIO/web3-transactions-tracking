import { ArrowTopRightOnSquareIcon, CheckIcon, ClipboardIcon } from '@heroicons/react/24/solid';

import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { textCenterEllipsis } from '../../utils/textCenterEllipsis';

export function WalletAddressDisplay({ address }: { address: string }) {
  const { isCopied, copy } = useCopyToClipboard();
  const explorerLink = `https://etherscan.io/address/${address}`;

  return (
    <div className="flex items-center gap-x-3 rounded-full bg-gray-100 px-3 py-1 font-mono text-xs text-gray-600">
      <span>{textCenterEllipsis(address, 6, 6)}</span>
      <button onClick={() => copy(address)} className="cursor-pointer transition-colors hover:text-gray-900">
        {isCopied ? <CheckIcon className="h-4 w-4 text-green-500" /> : <ClipboardIcon className="h-4 w-4" />}
      </button>
      <a
        href={explorerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-blue-500"
      >
        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
      </a>
    </div>
  );
}
