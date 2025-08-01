import { selectAllTransactionsByActiveWallet } from '@tuwa/web3-transactions-tracking-core/src/store/transactionsSelectors';
import { GetAccountReturnType, watchAccount } from '@wagmi/core';
import { useState } from 'react';
import { zeroAddress } from 'viem';

import { config } from '@/configs/wagmiConfig';
import { useTxTrackingStore } from '@/hooks/txTrackingHooks';
import { TransactionUnion } from '@/transactions/onSucceedCallbacks';

export function TransactionHistoryItem({ tx }: { tx: TransactionUnion }) {
  return (
    <div>
      <p> hash: {tx.hash}</p>
    </div>
  );
}

export function TransactionsHistory() {
  const transactionsPool = useTxTrackingStore((state) => state.transactionsPool);

  const [account, setAccount] = useState<GetAccountReturnType | undefined>(undefined);

  watchAccount(config, {
    onChange(account) {
      setAccount(account);
    },
  });

  const transactionsByWallet = selectAllTransactionsByActiveWallet(transactionsPool, account?.address ?? zeroAddress);

  return (
    <div>
      <h3>Transactions history</h3>
      <div>
        {!account?.address ? (
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
