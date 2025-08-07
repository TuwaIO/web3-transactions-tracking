import { selectAllTransactionsByActiveWallet, Transaction } from '@tuwa/web3-transactions-tracking-core/dist';
import { ReactNode } from 'react';

import { useLabels } from '../providers/LabelsProvider';
import { cn } from '../utils/cn';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import { WalletInfoModalProps } from './WalletInfoModal';

type CustomPlaceholderProps = { title: string; message: string };
type CustomHistoryItemProps<TR, T extends Transaction<TR>> = Parameters<typeof TransactionHistoryItem<TR, T>>[0];

export type TransactionsHistoryCustomization<TR, T extends Transaction<TR>> = {
  classNames?: {
    listWrapper?: string;
  };
  components?: {
    placeholder?: (props: CustomPlaceholderProps) => ReactNode;
    historyItem?: (props: CustomHistoryItemProps<TR, T>) => ReactNode;
  };
};

function HistoryPlaceholder({ title, message, className }: { title: string; message: string; className?: string }) {
  return (
    <div className={cn('rounded-lg bg-[var(--tuwa-bg-muted)] p-8 text-center', className)}>
      <h4 className="font-semibold text-[var(--tuwa-text-primary)]">{title}</h4>
      <p className="mt-1 text-sm text-[var(--tuwa-text-secondary)]">{message}</p>
    </div>
  );
}

export function TransactionsHistory<TR, T extends Transaction<TR>>({
  walletAddress,
  transactionsPool,
  appChains,
  className,
  customization,
}: WalletInfoModalProps<TR, T> & {
  className?: string;
  customization?: TransactionsHistoryCustomization<TR, T>;
}) {
  const labels = useLabels();

  const C = customization?.components;

  const transactionsByWallet = walletAddress
    ? selectAllTransactionsByActiveWallet(transactionsPool, walletAddress)
    : [];

  const sortedTransactions = [...transactionsByWallet].sort(
    (a, b) => (b.localTimestamp ?? 0) - (a.localTimestamp ?? 0),
  );

  const renderPlaceholder = (title: string, message: string) => {
    if (C?.placeholder) {
      return C.placeholder({ title, message });
    }
    return <HistoryPlaceholder title={title} message={message} />;
  };

  return (
    <div className={cn('flex flex-col gap-y-3', className)}>
      <h3 className="text-lg font-bold text-[var(--tuwa-text-primary)]">{labels.walletModal.history.title}</h3>

      {!walletAddress ? (
        renderPlaceholder(
          labels.walletModal.history.connectWalletTitle,
          labels.walletModal.history.connectWalletMessage,
        )
      ) : sortedTransactions.length > 0 ? (
        <div
          className={cn(
            'max-h-[400px] overflow-y-auto rounded-lg border border-[var(--tuwa-border-primary)] bg-[var(--tuwa-bg-primary)]',
            customization?.classNames?.listWrapper,
          )}
        >
          {sortedTransactions.map((tx) =>
            C?.historyItem ? (
              C.historyItem({ tx, transactionsPool, appChains })
            ) : (
              <TransactionHistoryItem
                tx={tx}
                key={tx.txKey}
                transactionsPool={transactionsPool}
                appChains={appChains}
              />
            ),
          )}
        </div>
      ) : (
        renderPlaceholder(
          labels.walletModal.history.noTransactionsTitle,
          labels.walletModal.history.noTransactionsMessage,
        )
      )}
    </div>
  );
}
