import { selectTxExplorerLink } from '@tuwa/evm-transactions-tracking/dist/store/transactionsSelectors';
import { TransactionTracker } from '@tuwa/evm-transactions-tracking/dist/types';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { ReactNode } from 'react';
import { Chain, Hex } from 'viem';

import { useLabels } from '../providers/LabelsProvider';
import { cn } from '../utils/cn';
import { HashLink } from './HashLink';
import { WalletInfoModalProps } from './WalletInfoModal/WalletInfoModal';

type CustomHashLinkProps = Parameters<typeof HashLink>[0];

export interface ToastTransactionKeyProps<TR, T extends Transaction<TR>>
  extends Pick<WalletInfoModalProps<TR, T>, 'transactionsPool'> {
  tx: T;
  appChains: Chain[];
  variant?: 'toast' | 'history';
  className?: string;
  renderHashLink?: (props: CustomHashLinkProps) => ReactNode;
}

export function ToastTransactionKey<TR, T extends Transaction<TR>>({
  tx,
  appChains,
  transactionsPool,
  variant = 'toast',
  className,
  renderHashLink,
}: ToastTransactionKeyProps<TR, T>) {
  const labels = useLabels();

  const wasReplaced = !!tx.replacedTxHash;

  const containerClasses =
    variant === 'toast'
      ? 'mt-2 flex w-full flex-col gap-y-2 border-t border-[var(--tuwa-border-primary)] pt-2'
      : 'flex w-full flex-col gap-y-1';

  const renderHash = (props: CustomHashLinkProps) => {
    return renderHashLink ? renderHashLink(props) : <HashLink {...props} />;
  };

  return (
    <div className={cn(containerClasses, className)}>
      {tx.tracker === TransactionTracker.Gelato &&
        renderHash({ label: labels.hashLabels.gelato, hash: tx.txKey, variant: 'compact' })}
      {tx.tracker === TransactionTracker.Safe &&
        renderHash({ label: labels.hashLabels.safe, hash: tx.txKey, variant: 'compact' })}

      {wasReplaced ? (
        <>
          {tx.hash && renderHash({ label: labels.hashLabels.original, hash: tx.hash, variant: 'compact' })}
          {renderHash({
            label: labels.hashLabels.replaced,
            hash: tx.replacedTxHash as Hex,
            explorerUrl: selectTxExplorerLink(transactionsPool, appChains, tx.replacedTxHash as Hex),
          })}
        </>
      ) : (
        tx.hash &&
        renderHash({
          label: labels.hashLabels.default,
          hash: tx.hash as Hex,
          explorerUrl: selectTxExplorerLink(transactionsPool, appChains, tx.hash as Hex),
        })
      )}
    </div>
  );
}
