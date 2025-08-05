import { TransactionTracker } from '@tuwa/evm-transactions-tracking/dist/types';
import { selectTxExplorerLink } from '@tuwa/evm-transactions-tracking/src/store/transactionsSelectors';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { Chain, Hex } from 'viem';

import { HashLink } from './HashLink';
import { WalletInfoModalProps } from './WalletInfoModal';

export function ToastTransactionKey<TR, T extends Transaction<TR>>({
  tx,
  appChains,
  transactionsPool,
  variant = 'toast',
}: {
  tx: T;
  appChains: Chain[];
  variant?: 'toast' | 'history';
} & Pick<WalletInfoModalProps<TR, T>, 'transactionsPool'>) {
  const wasReplaced = !!tx.replacedTxHash;

  const containerClasses =
    variant === 'toast'
      ? 'mt-2 flex w-full flex-col gap-y-2 border-t border-gray-200 pt-2'
      : 'flex w-full flex-col gap-y-1';

  return (
    <div className={containerClasses}>
      {tx.tracker === TransactionTracker.Gelato && (
        <HashLink label="Gelato Task ID" hash={tx.txKey} variant="compact" />
      )}
      {tx.tracker === TransactionTracker.Safe && <HashLink label="Safe Tx Hash" hash={tx.txKey} variant="compact" />}

      {wasReplaced ? (
        <>
          {tx.hash && <HashLink label="Original Tx Hash" hash={tx.hash} variant="compact" />}
          <HashLink
            label="Replaced Tx Hash"
            hash={tx.replacedTxHash as Hex}
            explorerUrl={selectTxExplorerLink(transactionsPool, appChains, tx.replacedTxHash as Hex)}
          />
        </>
      ) : (
        tx.hash && (
          <HashLink
            label="Tx Hash"
            hash={tx.hash as Hex}
            explorerUrl={selectTxExplorerLink(transactionsPool, appChains, tx.hash as Hex)}
          />
        )
      )}
    </div>
  );
}
