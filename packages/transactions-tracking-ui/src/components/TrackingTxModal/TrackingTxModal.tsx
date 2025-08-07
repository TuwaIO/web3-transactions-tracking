import { XMarkIcon } from '@heroicons/react/24/solid';
import { ActionTxKey } from '@tuwa/evm-transactions-tracking/dist';
import {
  ITxTrackingStore,
  Transaction,
  TransactionPool,
  TransactionStatus,
} from '@tuwa/web3-transactions-tracking-core/dist';
import { Config } from '@wagmi/core';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Chain } from 'viem';

import { useLabels } from '../../providers/LabelsProvider';
import { cn } from '../../utils/cn';
import { StatusAwareText } from '../StatusAwareText';
import { TxErrorBlock } from './TxErrorBlock';
import { TxInfoBlock } from './TxInfoBlock';
import { TxProgressIndicator, TxProgressIndicatorProps } from './TxProgressIndicator';
import { TxStatusVisual } from './TxStatusVisual';

type CustomHeaderProps = { onClose: (txKey?: string) => void };
type CustomStatusVisualProps = Parameters<typeof TxStatusVisual>[0];
type CustomProgressProps = TxProgressIndicatorProps;
type CustomInfoBlockProps<TR, T extends Transaction<TR>> = Parameters<typeof TxInfoBlock<TR, T>>[0];
type CustomErrorBlockProps = Parameters<typeof TxErrorBlock>[0];
type CustomFooterProps = {
  onClose: (txKey?: string) => void;
  onOpenWalletInfo: () => void;
  onRetry?: () => void;
  isProcessing?: boolean;
  isFailed?: boolean;
};

export type TxActions = Record<string, (...args: any[]) => Promise<any>>;

export type TrackingTxModalCustomization<TR, T extends Transaction<TR>> = {
  modalProps?: Partial<Modal.Props>;
  motionProps?: MotionProps;
  components?: {
    header?: (props: CustomHeaderProps) => ReactNode;
    statusVisual?: (props: CustomStatusVisualProps) => ReactNode;
    progressIndicator?: (props: CustomProgressProps) => ReactNode;
    infoBlock?: (props: CustomInfoBlockProps<TR, T>) => ReactNode;
    errorBlock?: (props: CustomErrorBlockProps) => ReactNode;
    footer?: (props: CustomFooterProps) => ReactNode;
  };
};

export interface TrackingTxModalProps<TR, T extends Transaction<TR>>
  extends Partial<Pick<ITxTrackingStore<TR, T, Config, ActionTxKey>, 'handleTransaction' | 'initialTx'>> {
  onClose: (txKey?: string) => void;
  onOpenWalletInfo: () => void;
  className?: string;
  customization?: TrackingTxModalCustomization<TR, T>;
  appChains: Chain[];
  transactionsPool: TransactionPool<TR, T>;
  actions?: TxActions;
  config?: Config;
}

export function TrackingTxModal<TR, T extends Transaction<TR>>({
  onClose,
  onOpenWalletInfo,
  className,
  customization,
  appChains,
  transactionsPool,
  actions,
  handleTransaction,
  config,
  initialTx,
}: TrackingTxModalProps<TR, T>) {
  const labels = useLabels();

  const C = customization?.components;
  const [trackedTx, setTrackedTx] = useState<T | undefined>(undefined);

  useEffect(() => {
    if (initialTx && initialTx.lastTxKey) {
      const trackedTransaction = transactionsPool[initialTx.lastTxKey];
      setTrackedTx(trackedTransaction);
    } else if (!initialTx && trackedTx) {
      const trackedTransaction = transactionsPool[trackedTx.txKey];
      setTrackedTx(trackedTransaction);
    }
  }, [transactionsPool, initialTx]);

  const motionProps = {
    ...{
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
      transition: { duration: 0.2, ease: 'easeOut' },
    },
    ...customization?.motionProps,
  };

  const handleRetry = async () => {
    if (
      (trackedTx?.actionKey || initialTx?.actionKey) &&
      actions?.[trackedTx?.actionKey || initialTx?.actionKey || ''] &&
      handleTransaction &&
      config
    ) {
      const retryParams = {
        type: (trackedTx?.type ?? initialTx?.type) as any,
        desiredChainID: trackedTx?.chainId ?? initialTx?.chainId ?? 1,
        actionKey: trackedTx?.actionKey ?? initialTx?.actionKey,
        title: trackedTx?.title ?? initialTx?.title,
        description: trackedTx?.description ?? initialTx?.description,
        payload: trackedTx?.payload ?? initialTx?.payload,
        withTrackedModal: true,
      };
      onClose(trackedTx?.txKey);
      await handleTransaction({
        config,
        actionFunction: actions[trackedTx?.actionKey || initialTx?.actionKey || ''],
        params: retryParams,
      });
    }
  };

  return (
    <AnimatePresence>
      <Modal
        onAfterOpen={() => setTrackedTx(undefined)}
        isOpen={(trackedTx?.isTackingModalOpen || initialTx?.isTackingModalOpen) ?? false}
        onRequestClose={() => {
          onClose(trackedTx?.txKey);
          if (typeof document !== 'undefined') {
            document.body.classList.remove('tuwa-tx-tracking-wallet-info-modal-open');
          }
        }}
        overlayClassName="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
        className="relative w-full max-w-md outline-none"
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        bodyOpenClassName="tuwa-tx-tracking-wallet-info-modal-open"
        {...customization?.modalProps}
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <motion.div {...motionProps}>
          <div
            className={cn(
              'relative flex flex-col gap-3 rounded-2xl bg-[var(--tuwa-bg-primary)] p-5 pt-0 shadow-2xl max-h-[98dvh] overflow-y-auto',
              className,
            )}
          >
            {C?.header ? (
              C.header({ onClose })
            ) : (
              <div className="flex items-start justify-between sticky top-0 left-0 w-full z-30 pt-5 pb-2 bg-[var(--tuwa-bg-primary)]">
                <h2 className="text-lg font-bold text-[var(--tuwa-text-primary)]">{labels.trackingModal.title}</h2>
                <button
                  onClick={() => onClose(trackedTx?.txKey)}
                  aria-label={labels.actions.close}
                  className="cursor-pointer ml-2 -mt-1 rounded-full p-1 text-[var(--tuwa-text-tertiary)] transition-colors hover:bg-[var(--tuwa-bg-muted)] hover:text-[var(--tuwa-text-primary)]"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            )}

            {C?.statusVisual ? (
              C.statusVisual({
                isProcessing: trackedTx?.pending || initialTx?.isInitializing,
                isSucceed: trackedTx?.status === TransactionStatus.Success,
                isFailed: trackedTx?.isError || !!initialTx?.errorMessage,
                isReplaced: trackedTx?.status === TransactionStatus.Replaced,
              })
            ) : (
              <TxStatusVisual
                isProcessing={trackedTx?.pending || initialTx?.isInitializing}
                isSucceed={trackedTx?.status === TransactionStatus.Success}
                isFailed={trackedTx?.isError || !!initialTx?.errorMessage}
                isReplaced={trackedTx?.status === TransactionStatus.Replaced}
              />
            )}

            <div className="flex flex-col items-center text-center -mt-2">
              <div className="flex items-center gap-2">
                <StatusAwareText
                  txStatus={trackedTx?.status}
                  source={trackedTx?.title}
                  fallback={trackedTx?.type}
                  variant="title"
                  applyColor
                  className="text-xl"
                />
              </div>
              <StatusAwareText
                txStatus={trackedTx?.status}
                source={trackedTx?.description}
                variant="description"
                className="mt-0"
              />
            </div>

            {C?.progressIndicator ? (
              C.progressIndicator({
                isProcessing: trackedTx?.pending || initialTx?.isInitializing,
                isSucceed: trackedTx?.status === TransactionStatus.Success,
                isFailed: trackedTx?.isError || !!initialTx?.errorMessage,
                isReplaced: trackedTx?.status === TransactionStatus.Replaced,
              })
            ) : (
              <TxProgressIndicator
                isProcessing={trackedTx?.pending || initialTx?.isInitializing}
                isSucceed={trackedTx?.status === TransactionStatus.Success}
                isFailed={trackedTx?.isError || !!initialTx?.errorMessage}
                isReplaced={trackedTx?.status === TransactionStatus.Replaced}
              />
            )}

            {C?.infoBlock ? (
              C.infoBlock({ tx: trackedTx ?? initialTx ?? { chainId: 1 }, appChains, transactionsPool })
            ) : (
              <TxInfoBlock
                tx={trackedTx ?? initialTx ?? { chainId: 1 }}
                appChains={appChains}
                transactionsPool={transactionsPool}
              />
            )}

            {C?.errorBlock ? (
              C.errorBlock({ error: trackedTx?.errorMessage || initialTx?.errorMessage })
            ) : (
              <TxErrorBlock error={trackedTx?.errorMessage || initialTx?.errorMessage} />
            )}

            {C?.footer ? (
              C.footer({
                onClose,
                onOpenWalletInfo,
                isProcessing: trackedTx?.pending || initialTx?.isInitializing,
                isFailed: trackedTx?.isError || !!initialTx?.errorMessage,
                onRetry: trackedTx?.actionKey || initialTx?.actionKey ? handleRetry : undefined,
              })
            ) : (
              <div className="mt-2 flex w-full items-center gap-3 border-t border-[var(--tuwa-border-primary)] pt-4">
                {(trackedTx?.isError || !!initialTx?.errorMessage) &&
                (trackedTx?.actionKey || initialTx?.actionKey) &&
                actions?.[trackedTx?.actionKey || initialTx?.actionKey || ''] &&
                handleTransaction &&
                config ? (
                  <button
                    onClick={handleRetry}
                    className="cursor-pointer w-full rounded-md bg-[var(--tuwa-button-gradient-from)] py-2 text-sm font-semibold text-[var(--tuwa-text-on-accent)] transition-opacity hover:opacity-90"
                  >
                    {labels.trackingModal.retry}
                  </button>
                ) : (
                  <button
                    onClick={onOpenWalletInfo}
                    className="cursor-pointer w-full rounded-md bg-[var(--tuwa-bg-muted)] py-2 text-sm font-semibold text-[var(--tuwa-text-primary)] transition-colors hover:bg-[var(--tuwa-border-primary)]"
                  >
                    {labels.trackingModal.walletInfo}
                  </button>
                )}
                <button
                  onClick={() => onClose(trackedTx?.txKey)}
                  disabled={initialTx?.isInitializing || trackedTx?.pending}
                  className="cursor-pointer w-full rounded-md bg-[var(--tuwa-bg-muted)] py-2 text-sm font-semibold text-[var(--tuwa-text-primary)] transition-colors hover:bg-[var(--tuwa-border-primary)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {initialTx?.isInitializing || trackedTx?.pending
                    ? labels.trackingModal.processing
                    : labels.trackingModal.close}{' '}
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </Modal>
    </AnimatePresence>
  );
}
