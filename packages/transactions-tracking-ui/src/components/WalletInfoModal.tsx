import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { TransactionPool } from '@tuwa/web3-transactions-tracking-core/src/store/initializeTxTrackingStore';
import Modal from 'react-modal';
import { Chain } from 'viem';

import { TransactionsHistory } from './TransactionsHistory';

export interface WalletInfoModalProps<TR, T extends Transaction<TR>> {
  walletAddress?: string;
  transactionsPool: TransactionPool<TR, T>;
  appChains: Chain[];
}

export function WalletInfoModal<TR, T extends Transaction<TR>>({
  walletAddress,
  transactionsPool,
  isOpen,
  setIsOpen,
  appChains,
}: WalletInfoModalProps<TR, T> & {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <Modal isOpen={isOpen}>
      <button onClick={() => setIsOpen(false)}>close</button>
      <div>
        <h1>Transactions explorer modal</h1>
        <TransactionsHistory walletAddress={walletAddress} transactionsPool={transactionsPool} appChains={appChains} />
      </div>
    </Modal>
  );
}
