import { XMarkIcon } from '@heroicons/react/24/solid';
import {
  IInitializeTxTrackingStore,
  TransactionPool,
} from '@tuwa/web3-transactions-tracking-core/dist/store/initializeTxTrackingStore';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import Modal from 'react-modal';
import { Chain } from 'viem';

import { useLabels } from '../../providers/LabelsProvider';
import { cn } from '../../utils/cn';
import { StatusAwareText } from '../StatusAwareText';
import { TxErrorBlock } from './TxErrorBlock';
import { TxInfoBlock } from './TxInfoBlock';
import { TxProgressIndicator, TxProgressIndicatorProps } from './TxProgressIndicator';
import { TxStatusVisual } from './TxStatusVisual';

type CustomHeaderProps<TR, T extends Transaction<TR>> = { tx: T; onClose: () => void; onOpenWalletInfo: () => void };
type CustomStatusVisualProps = Parameters<typeof TxStatusVisual>[0];
type CustomProgressProps = TxProgressIndicatorProps;
type CustomInfoBlockProps<TR, T extends Transaction<TR>> = Parameters<typeof TxInfoBlock<TR, T>>[0];
type CustomErrorBlockProps = Parameters<typeof TxErrorBlock>[0];
type CustomFooterProps = { onClose: () => void; onOpenWalletInfo: () => void; isProcessing?: boolean };

export type TrackingTxModalCustomization<TR, T extends Transaction<TR>> = {
  modalProps?: Partial<Modal.Props>;
  motionProps?: MotionProps;
  components?: {
    header?: (props: CustomHeaderProps<TR, T>) => ReactNode;
    statusVisual?: (props: CustomStatusVisualProps) => ReactNode;
    progressIndicator?: (props: CustomProgressProps) => ReactNode;
    infoBlock?: (props: CustomInfoBlockProps<TR, T>) => ReactNode;
    errorBlock?: (props: CustomErrorBlockProps) => ReactNode;
    footer?: (props: CustomFooterProps) => ReactNode;
  };
};

export interface TrackingTxModalProps<TR, T extends Transaction<TR>>
  extends Pick<IInitializeTxTrackingStore<TR, T>, 'trackedTransaction'> {
  onClose: () => void;
  onOpenWalletInfo: () => void;
  className?: string;
  customization?: TrackingTxModalCustomization<TR, T>;
  appChains: Chain[];
  transactionsPool: TransactionPool<TR, T>;
}

export function TrackingTxModal<TR, T extends Transaction<TR>>({
  trackedTransaction,
  onClose,
  onOpenWalletInfo,
  className,
  customization,
  appChains,
  transactionsPool,
}: TrackingTxModalProps<TR, T>) {
  const labels = useLabels();
  const C = customization?.components;
  const { tx, error, isProcessing, isSucceed, isFailed, isReplaced } = trackedTransaction || {};
  const motionProps = {
    ...{
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
      transition: { duration: 0.2, ease: 'easeOut' },
    },
    ...customization?.motionProps,
  };

  return (
    <AnimatePresence>
      {trackedTransaction && tx && (
        <Modal
          isOpen={trackedTransaction.isTrackedModalOpen ?? false}
          onRequestClose={onClose}
          overlayClassName="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
          className="relative w-full max-w-md outline-none"
          shouldCloseOnOverlayClick={false}
          shouldCloseOnEsc
          closeTimeoutMS={300}
          {...customization?.modalProps}
        >
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-expect-error */}
          <motion.div
            {...motionProps}
            className={cn('flex flex-col gap-3 rounded-2xl bg-[var(--tuwa-bg-primary)] p-5 shadow-2xl', className)}
          >
            {C?.header ? (
              C.header({ tx, onClose, onOpenWalletInfo })
            ) : (
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-bold text-[var(--tuwa-text-primary)]">{labels.trackingModal.title}</h2>
                <button
                  onClick={onClose}
                  aria-label={labels.actions.close}
                  className="cursor-pointer ml-2 -mt-1 rounded-full p-1 text-[var(--tuwa-text-tertiary)] transition-colors hover:bg-[var(--tuwa-bg-muted)] hover:text-[var(--tuwa-text-primary)]"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            )}

            {C?.statusVisual ? (
              C.statusVisual({ isProcessing, isSucceed, isFailed, isReplaced })
            ) : (
              <TxStatusVisual
                isProcessing={isProcessing}
                isSucceed={isSucceed}
                isFailed={isFailed}
                isReplaced={isReplaced}
              />
            )}

            <div className="flex flex-col items-center text-center -mt-2">
              <div className="flex items-center gap-2">
                <StatusAwareText
                  tx={tx}
                  source={tx.title}
                  fallback={tx.type}
                  variant="title"
                  applyColor
                  className="text-xl"
                />
              </div>
              <StatusAwareText tx={tx} source={tx.description} variant="description" className="mt-0" />
            </div>

            {C?.progressIndicator ? (
              C.progressIndicator({ isProcessing, isSucceed, isFailed, isReplaced })
            ) : (
              <TxProgressIndicator
                isProcessing={isProcessing}
                isSucceed={isSucceed}
                isFailed={isFailed}
                isReplaced={isReplaced}
              />
            )}
            {C?.infoBlock ? (
              C.infoBlock({ tx, appChains, transactionsPool })
            ) : (
              <TxInfoBlock tx={tx} appChains={appChains} transactionsPool={transactionsPool} />
            )}
            {C?.errorBlock ? C.errorBlock({ error }) : <TxErrorBlock error={error} />}

            {C?.footer ? (
              C.footer({ onClose, onOpenWalletInfo, isProcessing })
            ) : (
              <div className="mt-2 flex w-full items-center gap-3 border-t border-[var(--tuwa-border-primary)] pt-4">
                <button
                  onClick={onOpenWalletInfo}
                  className="cursor-pointer w-full rounded-md bg-[var(--tuwa-bg-muted)] py-2 text-sm font-semibold text-[var(--tuwa-text-primary)] transition-colors hover:bg-[var(--tuwa-border-primary)]"
                >
                  {labels.trackingModal.walletInfo}
                </button>
                <button
                  onClick={onClose}
                  disabled={isProcessing}
                  className="cursor-pointer w-full rounded-md bg-[var(--tuwa-bg-muted)] py-2 text-sm font-semibold text-[var(--tuwa-text-primary)] transition-colors hover:bg-[var(--tuwa-border-primary)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isProcessing ? labels.trackingModal.processing : labels.trackingModal.close}
                </button>
              </div>
            )}
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}
