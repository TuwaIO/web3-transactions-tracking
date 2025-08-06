import { XMarkIcon } from '@heroicons/react/24/solid';
import { Transaction, TransactionPool } from '@tuwa/web3-transactions-tracking-core/dist';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import Modal from 'react-modal';
import { Chain } from 'viem';

import { useLabels } from '../../providers/LabelsProvider';
import { cn } from '../../utils/cn';
import { TransactionsHistory } from '../TransactionsHistory';
import { WalletHeader, WalletHeaderProps } from './WalletHeader';

type CustomHeaderProps = { closeModal: () => void };
type CustomWalletInfoProps<TR, T extends Transaction<TR>> = WalletInfoModalProps<TR, T> & {
  WalletHeaderComponent?: (props: WalletHeaderProps) => ReactNode;
};
type CustomHistoryProps<TR, T extends Transaction<TR>> = WalletInfoModalProps<TR, T>;

export type WalletInfoModalCustomization<TR, T extends Transaction<TR>> = {
  modalProps?: Partial<Modal.Props>;
  motionProps?: MotionProps;
  classNames?: {
    contentWrapper?: string;
  };
  components?: {
    header?: (props: CustomHeaderProps) => ReactNode;
    walletInfo?: (props: CustomWalletInfoProps<TR, T>) => ReactNode;
    history?: (props: CustomHistoryProps<TR, T>) => ReactNode;
  };
};

export interface WalletInfoModalProps<TR, T extends Transaction<TR>> {
  walletAddress?: string;
  transactionsPool: TransactionPool<TR, T>;
  appChains: Chain[];
}

export function WalletInfoModal<TR, T extends Transaction<TR>>({
  isOpen,
  setIsOpen,
  customization,
  ...props
}: WalletInfoModalProps<TR, T> & {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  customization?: WalletInfoModalCustomization<TR, T>;
}) {
  const labels = useLabels();

  const defaultMotionProps: MotionProps = {
    initial: { opacity: 0, scale: 0.8, x: '45%', y: '45%' },
    animate: { opacity: 1, scale: 1, x: 0, y: 0 },
    exit: { opacity: 0, scale: 0.8, x: '45%', y: '45%' },
    transition: { duration: 0.3, ease: 'easeInOut' },
  };

  const motionProps = { ...defaultMotionProps, ...customization?.motionProps };

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={() => {
            setIsOpen(false);
            if (typeof document !== 'undefined') {
              document.body.classList.remove('tuwa-tx-tracking-wallet-info-modal-open');
            }
          }}
          overlayClassName="fixed inset-0 bg-black/45 flex items-center justify-center p-2 z-50"
          className="relative w-full max-w-2xl outline-none"
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          bodyOpenClassName="tuwa-tx-tracking-wallet-info-modal-open"
          {...customization?.modalProps}
        >
          <motion.div {...motionProps}>
            <div
              className={cn(
                'relative w-full max-w-2xl outline-none rounded-2xl bg-[var(--tuwa-bg-secondary)] shadow-xl max-h-[98dvh] overflow-y-auto',
                customization?.classNames?.contentWrapper,
              )}
            >
              {customization?.components?.header ? (
                customization.components.header({ closeModal: () => setIsOpen(false) })
              ) : (
                <div className="flex items-center justify-between border-b border-[var(--tuwa-border-primary)] p-4 sticky top-0 left-0 w-full bg-[var(--tuwa-bg-secondary)]">
                  <h1 className="text-lg font-bold text-[var(--tuwa-text-primary)]">{labels.walletModal.title}</h1>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label={labels.actions.close}
                    className="cursor-pointer rounded-full p-1 text-[var(--tuwa-text-tertiary)] transition-colors hover:bg-[var(--tuwa-bg-muted)] hover:text-[var(--tuwa-text-primary)]"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
              )}

              <div className="flex flex-col gap-4 p-4 sm:p-6 sm:gap-6">
                {customization?.components?.walletInfo ? (
                  customization.components.walletInfo(props)
                ) : (
                  <WalletHeader walletAddress={props.walletAddress} />
                )}

                {customization?.components?.history ? (
                  customization.components.history(props)
                ) : (
                  <TransactionsHistory {...props} />
                )}
              </div>
            </div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}
