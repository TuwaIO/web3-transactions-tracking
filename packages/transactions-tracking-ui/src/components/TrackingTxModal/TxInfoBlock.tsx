import { Web3Icon } from '@bgd-labs/react-web3-icons';
import { getChainName } from '@bgd-labs/react-web3-icons/dist/utils';
import { selectTxExplorerLink, TransactionTracker } from '@tuwa/evm-transactions-tracking/dist';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist';
import { TransactionPool } from '@tuwa/web3-transactions-tracking-core/src/store/initializeTxTrackingStore';
import dayjs from 'dayjs';
import { ReactNode } from 'react';
import { Chain, Hex } from 'viem';

import { useLabels } from '../../providers/LabelsProvider';
import { cn } from '../../utils/cn';
import { HashLink } from '../HashLink';

type CustomInfoRowProps = { label: ReactNode; value: ReactNode };
type CustomHashLinkProps = Parameters<typeof HashLink>[0];

export type TxInfoBlockCustomization = {
  components?: {
    infoRow?: (props: CustomInfoRowProps) => ReactNode;
    hashLink?: (props: CustomHashLinkProps) => ReactNode;
  };
};

function InfoRow({ label, value }: { label: ReactNode; value: ReactNode }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-[var(--tuwa-text-secondary)]">{label}</span>
      <span className="font-medium text-[var(--tuwa-text-primary)]">{value}</span>
    </div>
  );
}

export function TxInfoBlock<TR, T extends Transaction<TR>>({
  tx,
  appChains,
  transactionsPool,
  className,
  customization,
}: {
  tx: {
    chainId: T['chainId'];
    localTimestamp?: T['localTimestamp'];
    tracker?: T['tracker'];
    txKey?: T['txKey'];
    hash?: T['hash'];
    replacedTxHash?: T['replacedTxHash'];
  };
  appChains: Chain[];
  transactionsPool: TransactionPool<TR, T>;
  className?: string;
  customization?: TxInfoBlockCustomization;
}) {
  const labels = useLabels();
  const wasReplaced = !!tx.replacedTxHash;

  const renderInfoRow = (props: CustomInfoRowProps) => {
    return customization?.components?.infoRow ? customization.components.infoRow(props) : <InfoRow {...props} />;
  };

  const renderHashLink = (props: CustomHashLinkProps) => {
    return customization?.components?.hashLink ? customization.components.hashLink(props) : <HashLink {...props} />;
  };

  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-lg border border-[var(--tuwa-border-primary)] bg-[var(--tuwa-bg-primary)] p-3',
        className,
      )}
    >
      {renderInfoRow({
        label: labels.txInfo.network,
        value: (
          <div className="flex items-center justify-end gap-2">
            <div className="h-4 w-4">
              <Web3Icon chainId={tx.chainId} />
            </div>
            <span>{getChainName(tx.chainId)}</span>
          </div>
        ),
      })}
      {tx.localTimestamp &&
        renderInfoRow({
          label: labels.txInfo.started,
          value: dayjs.unix(tx.localTimestamp).format('MMM D, HH:mm:ss'),
        })}
      {tx.tracker === TransactionTracker.Gelato &&
        tx.txKey &&
        renderHashLink({ label: labels.hashLabels.gelato, hash: tx.txKey, variant: 'compact' })}
      {tx.tracker === TransactionTracker.Safe &&
        tx.txKey &&
        renderHashLink({ label: labels.hashLabels.safe, hash: tx.txKey, variant: 'compact' })}
      {wasReplaced ? (
        <>
          {tx.hash && renderHashLink({ label: labels.hashLabels.original, hash: tx.hash, variant: 'compact' })}
          {renderHashLink({
            label: labels.hashLabels.replaced,
            hash: tx.replacedTxHash as Hex,
            explorerUrl: selectTxExplorerLink(transactionsPool, appChains, tx.replacedTxHash as Hex),
          })}
        </>
      ) : (
        tx.hash &&
        renderHashLink({
          label: labels.hashLabels.default,
          hash: tx.hash as Hex,
          explorerUrl: selectTxExplorerLink(transactionsPool, appChains, tx.hash as Hex),
        })
      )}
    </div>
  );
}
