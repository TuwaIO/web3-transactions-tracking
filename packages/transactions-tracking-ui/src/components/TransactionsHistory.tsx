import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { selectAllTransactionsByActiveWallet } from '@tuwa/web3-transactions-tracking-core/src/store/transactionsSelectors';

import { TransactionHistoryItem } from './TransactionHistoryItem';
import { WalletInfoModalProps } from './WalletInfoModal/WalletInfoModal';

function HistoryPlaceholder({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-lg bg-gray-50 p-8 text-center">
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="mt-1 text-sm text-gray-500">{message}</p>
    </div>
  );
}

export function TransactionsHistory<TR, T extends Transaction<TR>>({
  walletAddress,
  transactionsPool,
  appChains,
}: WalletInfoModalProps<TR, T>) {
  const transactionsByWallet = walletAddress
    ? selectAllTransactionsByActiveWallet(transactionsPool, walletAddress)
    : [];

  const sortedTransactions = [...transactionsByWallet].sort(
    (a, b) => (b.localTimestamp ?? 0) - (a.localTimestamp ?? 0),
  );

  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="text-lg font-bold text-gray-900">Transactions History</h3>

      {!walletAddress ? (
        <HistoryPlaceholder title="Connect Wallet" message="Please connect your wallet to see your past activity." />
      ) : sortedTransactions.length > 0 ? (
        <div className="max-h-[400px] overflow-y-auto rounded-lg border border-gray-200 bg-white">
          {sortedTransactions.map((tx) => (
            <TransactionHistoryItem tx={tx} key={tx.txKey} transactionsPool={transactionsPool} appChains={appChains} />
          ))}
        </div>
      ) : (
        <HistoryPlaceholder
          title="No Transactions Yet"
          message="Once you interact with the app, your transaction history will appear here."
        />
      )}
    </div>
  );
}
