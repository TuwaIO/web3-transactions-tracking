import { GetAccountReturnType, watchAccount } from '@wagmi/core';
import { useState } from 'react';

import { appChains, config } from '../configs/wagmiConfig';
import { useTxTrackingStore } from '../hooks/txTrackingHooks';
import { TransactionsWidget } from './TransactionsWidget';

export function Providers() {
  const transactionsPool = useTxTrackingStore((state) => state.transactionsPool);

  const [account, setAccount] = useState<GetAccountReturnType | undefined>(undefined);

  watchAccount(config, {
    onChange(account) {
      setAccount(account);
    },
  });

  return (
    <TransactionsWidget appChains={appChains} transactionsPool={transactionsPool} walletAddress={account?.address} />
  );
}
