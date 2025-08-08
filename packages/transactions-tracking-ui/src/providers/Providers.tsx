import { useAccount } from 'wagmi';

import { appChains, config } from '../configs/wagmiConfig';
import { useTxTrackingStore } from '../hooks/txTrackingHooks';
import { txActions } from '../transactions/actions';
import { TransactionsWidget } from './TransactionsWidget';

export function Providers() {
  const transactionsPool = useTxTrackingStore((state) => state.transactionsPool);
  const closeTxTrackedModal = useTxTrackingStore((state) => state.closeTxTrackedModal);
  const handleTransaction = useTxTrackingStore((state) => state.handleTransaction);
  const initialTx = useTxTrackingStore((state) => state.initialTx);

  const { address: walletAddress, chain } = useAccount();

  return (
    <TransactionsWidget
      appChains={appChains}
      transactionsPool={transactionsPool}
      closeTxTrackedModal={closeTxTrackedModal}
      config={config}
      handleTransaction={handleTransaction}
      actions={txActions}
      initialTx={initialTx}
      walletAddress={walletAddress}
      chain={chain}
    />
  );
}
