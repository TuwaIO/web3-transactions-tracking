import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { selectAllTransactionsByActiveWallet } from '@tuwa/web3-transactions-tracking-core/src/store/transactionsSelectors';

import { TransactionsExplorerModalProps } from './TransactionsExplorerModal';

export function TransactionHistoryItem<TR, T extends Transaction<TR>>({ tx }: { tx: T }) {
  return (
    <div>
      <p> hash: {tx.hash}</p>
    </div>
  );
}

export function TransactionsHistory<TR, T extends Transaction<TR>>({
  walletAddress,
  transactionsPool,
}: TransactionsExplorerModalProps<TR, T>) {
  const transactionsByWallet = selectAllTransactionsByActiveWallet(
    transactionsPool,
    walletAddress ?? '0x0000000000000000000000000000000000000000',
  );

  return (
    <div>
      <h3>Transactions history</h3>
      <div>
        {!walletAddress ? (
          <h4>Please connect your wallet to see your past activity.</h4>
        ) : (
          <div>
            {transactionsByWallet.length ? (
              <div>
                {transactionsByWallet.map((tx) => (
                  <TransactionHistoryItem tx={tx} key={tx.txKey} />
                ))}
              </div>
            ) : (
              <div>
                <h4>No Transactions Yet</h4>
                <p>Once you interact with the app, your transaction history will appear here.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
