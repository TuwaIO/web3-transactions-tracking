import { XMarkIcon } from '@heroicons/react/24/solid';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { TransactionPool } from '@tuwa/web3-transactions-tracking-core/src/store/initializeTxTrackingStore';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from 'react-modal';
import { Chain } from 'viem';

import { TransactionsHistory } from '../TransactionsHistory';
import { WalletHeader } from './WalletHeader';

export interface WalletInfoModalProps<TR, T extends Transaction<TR>> {
  walletAddress?: string;
  transactionsPool: TransactionPool<TR, T>;
  appChains: Chain[];
}

export function WalletInfoModal<TR, T extends Transaction<TR>>({
  isOpen,
  setIsOpen,
  ...props
}: WalletInfoModalProps<TR, T> & {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          overlayClassName="fixed inset-0 bg-black/45 flex items-center justify-center p-2 z-50"
          className="relative w-full max-w-2xl outline-none"
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          bodyOpenClassName="tuwa-tx-tracking-wallet-info-modal-open"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: '45%', y: '45%' }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: '45%', y: '45%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="relative w-full max-w-2xl outline-none rounded-2xl bg-gray-50 shadow-xl max-h-[98dvh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-gray-200 p-4 sticky top-0 left-0 w-full bg-gray-50">
                <h1 className="text-lg font-bold text-gray-900">Wallet & Transactions</h1>
                <button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-800"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4 p-4 sm:p-6 sm:gap-6">
                <WalletHeader walletAddress={props.walletAddress} />
                <TransactionsHistory {...props} />
              </div>
            </div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}
