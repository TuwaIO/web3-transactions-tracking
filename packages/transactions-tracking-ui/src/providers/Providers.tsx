import { GetAccountReturnType, watchAccount } from '@wagmi/core';
import { useState } from 'react';

import { appChains, config } from '../configs/wagmiConfig';
import { useTxTrackingStore } from '../hooks/txTrackingHooks';
import { txActions } from '../transactions/actions';
import { TransactionsWidget } from './TransactionsWidget';

export function Providers() {
  const transactionsPool = useTxTrackingStore((state) => state.transactionsPool);
  const trackedTransaction = useTxTrackingStore((state) => state.trackedTransaction);
  const closeTxTrackedModal = useTxTrackingStore((state) => state.closeTxTrackedModal);
  const handleTransaction = useTxTrackingStore((state) => state.handleTransaction);

  const [account, setAccount] = useState<GetAccountReturnType | undefined>(undefined);

  watchAccount(config, {
    onChange(account) {
      setAccount(account);
    },
  });

  return (
    <TransactionsWidget
      appChains={appChains}
      transactionsPool={transactionsPool}
      walletAddress={account?.address}
      trackedTransaction={trackedTransaction}
      closeTxTrackedModal={closeTxTrackedModal}
      config={config}
      handleTransaction={handleTransaction}
      actions={txActions}
    />
  );
}
