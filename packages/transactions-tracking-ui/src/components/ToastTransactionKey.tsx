import { ArrowTopRightOnSquareIcon, CheckIcon, ClipboardIcon } from '@heroicons/react/24/solid';
import { TransactionTracker } from '@tuwa/evm-transactions-tracking/dist/types';
import { selectTxExplorerLink } from '@tuwa/evm-transactions-tracking/src/store/transactionsSelectors';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { useState } from 'react';
import { Chain, Hex } from 'viem';

import { textCenterEllipsis } from '../utils/textCenterEllipsis';
import { WalletInfoModalProps } from './WalletInfoModal';

function HashDisplay({ label, hash }: { label: string; hash: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!hash) return;
    navigator.clipboard.writeText(hash).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center justify-between text-xs text-gray-500">
      <span className="font-medium">{label}:</span>
      <div className="flex items-center gap-x-2">
        <span className="font-mono">{textCenterEllipsis(hash, 6, 6)}</span>
        <button onClick={handleCopy} className="cursor-pointer text-gray-400 hover:text-gray-600">
          {isCopied ? <CheckIcon className="h-4 w-4 text-green-500" /> : <ClipboardIcon className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

function TxHashLink({ label, hash, explorerUrl }: { label: string; hash: Hex; explorerUrl?: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="font-bold text-gray-800">{label}</span>
      <a
        href={explorerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-x-1 text-blue-600 hover:underline"
      >
        <span className="font-mono">{textCenterEllipsis(hash, 6, 6)}</span>
        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

export function ToastTransactionKey<TR, T extends Transaction<TR>>({
  tx,
  appChains,
  transactionsPool,
}: { tx: T; appChains: Chain[] } & Pick<WalletInfoModalProps<TR, T>, 'transactionsPool'>) {
  const wasReplaced = !!tx.replacedTxHash;

  return (
    <div className="mt-2 flex w-full flex-col gap-y-2 border-t border-gray-200 pt-2">
      {tx.tracker === TransactionTracker.Gelato && <HashDisplay label="Gelato Task ID" hash={tx.txKey} />}
      {tx.tracker === TransactionTracker.Safe && <HashDisplay label="Safe Tx Hash" hash={tx.txKey} />}

      {wasReplaced ? (
        <>
          {tx.hash && <HashDisplay label="Original Tx Hash" hash={tx.hash} />}
          <TxHashLink
            label="Replaced Tx Hash"
            hash={tx.replacedTxHash as Hex}
            explorerUrl={selectTxExplorerLink(transactionsPool, appChains, tx.replacedTxHash as Hex)}
          />
        </>
      ) : (
        tx.hash && (
          <TxHashLink
            label="Transaction Hash"
            hash={tx.hash as Hex}
            explorerUrl={selectTxExplorerLink(transactionsPool, appChains, tx.hash as Hex)}
          />
        )
      )}
    </div>
  );
}
