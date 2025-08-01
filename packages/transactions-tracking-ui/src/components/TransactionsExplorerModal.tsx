// here will be info about account a little and list of transactions

import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { TransactionPool } from '@tuwa/web3-transactions-tracking-core/src/store/initializeTxTrackingStore';

import { TransactionsHistory } from './TransactionsHistory';

export interface TransactionsExplorerModalProps<TR, T extends Transaction<TR>> {
  walletAddress?: string;
  transactionsPool: TransactionPool<TR, T>;
}

export function TransactionsExplorerModal<TR, T extends Transaction<TR>>({
  walletAddress,
  transactionsPool,
}: TransactionsExplorerModalProps<TR, T>) {
  return (
    <div>
      <h1>Transactions explorer modal</h1>

      <TransactionsHistory walletAddress={walletAddress} transactionsPool={transactionsPool} />
    </div>
  );
}
