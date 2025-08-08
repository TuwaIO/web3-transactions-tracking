/**
 * @file This file contains the `TrackingTxModal`, the main UI for displaying the detailed lifecycle of a single transaction.
 */
import { XMarkIcon } from '@heroicons/react/24/solid';
import * as Dialog from '@radix-ui/react-dialog';
import { ActionTxKey } from '@tuwa/evm-transactions-tracking';
import {
  InitialTransactionParams,
  ITxTrackingStore,
  Transaction,
  TransactionPool,
  TransactionStatus,
} from '@tuwa/web3-transactions-tracking-core';
import { Config } from '@wagmi/core';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { ComponentPropsWithoutRef } from 'react';
import { JSX, ReactNode, useEffect, useState } from 'react';
import { Chain } from 'viem';

import { useLabels } from '../../providers';
import { cn } from '../../utils';
import { StatusAwareText } from '../StatusAwareText';
import { TxErrorBlock, TxErrorBlockProps } from './TxErrorBlock';
import { TxInfoBlock, TxInfoBlockProps } from './TxInfoBlock';
import { TxProgressIndicator, TxProgressIndicatorProps } from './TxProgressIndicator';
import { TxStatusVisual, TxStatusVisualProps } from './TxStatusVisual';

// --- Prop Types for Customization ---
type CustomHeaderProps = { onClose: (txKey?: string) => void };
type CustomFooterProps = {
  onClose: (txKey?: string) => void;
  onOpenWalletInfo: () => void;
  onRetry?: () => void;
  isProcessing?: boolean;
};

/** A registry of functions that can be re-executed via the 'Retry' button. The key should match `actionKey` on a transaction. */
export type TxActions = Record<string, () => Promise<unknown>>;

/**
 * Defines the customization options for the TrackingTxModal.
 * Allows customization of modal behavior, animations, and individual UI components.
 */
export type TrackingTxModalCustomization<TR, T extends Transaction<TR>> = {
  /** Custom props to pass to the underlying Radix UI Dialog.Content component */
  modalProps?: Partial<ComponentPropsWithoutRef<typeof Dialog.Content>>;
  /** Custom Framer Motion animation properties */
  motionProps?: MotionProps;
  /** Custom component overrides for different parts of the modal */
  components?: {
    /** Custom header component */
    header?: (props: CustomHeaderProps) => ReactNode;
    /** Custom footer component */
    footer?: (props: CustomFooterProps) => ReactNode;
    /** Custom status visual component (icons, animations) */
    statusVisual?: (props: TxStatusVisualProps) => ReactNode;
    /** Custom progress indicator component */
    progressIndicator?: (props: TxProgressIndicatorProps) => ReactNode;
    /** Custom transaction info block component */
    infoBlock?: (props: TxInfoBlockProps<TR, T>) => ReactNode;
    /** Custom error block component */
    errorBlock?: (props: TxErrorBlockProps) => ReactNode;
  };
};

export interface TrackingTxModalProps<TR, T extends Transaction<TR>>
  extends Partial<Pick<ITxTrackingStore<TR, T, Config, ActionTxKey>, 'handleTransaction' | 'initialTx'>> {
  /** A function to close the modal. */
  onClose: (txKey?: string) => void;
  /** A function to open the main wallet info modal. */
  onOpenWalletInfo: () => void;
  className?: string;
  customization?: TrackingTxModalCustomization<TR, T>;
  appChains: Chain[];
  transactionsPool: TransactionPool<TR, T>;
  /** A registry of retryable actions. */
  actions?: TxActions;
  /** The wagmi config object, required for the retry functionality. */
  config?: Config;
}

/**
 * A detailed modal that displays the real-time status and lifecycle of a transaction.
 * It opens automatically for transactions initiated with `withTrackedModal: true`.
 * Supports full customization through the customization prop including Radix UI Dialog properties.
 *
 * @param {TrackingTxModalProps<TR, T>} props - The component props.
 * @returns {JSX.Element} The rendered tracking modal.
 */
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
}: TrackingTxModalProps<TR, T>): JSX.Element {
  const labels = useLabels();
  const C = customization?.components;
  const [trackedTx, setTrackedTx] = useState<T | undefined>(undefined);

  // This effect syncs the modal's state with the global store.
  // It finds the transaction to display, prioritizing the `initialTx` (a tx being created)
  // or updating the view for an existing `trackedTx`.
  useEffect(() => {
    let currentTx: T | undefined;
    if (initialTx?.lastTxKey) {
      currentTx = transactionsPool[initialTx.lastTxKey];
    } else if (trackedTx) {
      currentTx = transactionsPool[trackedTx.txKey];
    }
    setTrackedTx(currentTx);
  }, [transactionsPool, initialTx, trackedTx]);

  const motionProps: MotionProps = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.2, ease: 'easeOut' },
    ...customization?.motionProps,
  };

  const txToDisplay = trackedTx ?? initialTx;
  const txStatus = trackedTx?.status;
  const isInitializing = initialTx?.isInitializing ?? false;
  const isPending = trackedTx?.pending ?? false;
  const isProcessing = isInitializing || isPending;
  const isError = trackedTx?.isError || !!initialTx?.errorMessage;
  const canRetry = txToDisplay?.actionKey && actions?.[txToDisplay.actionKey] && handleTransaction && config;

  const handleRetry = async () => {
    if (!canRetry || !txToDisplay?.actionKey) return;
    const retryParams: InitialTransactionParams = {
      type: txToDisplay.type,
      desiredChainID: trackedTx?.chainId || initialTx?.desiredChainID || 1,
      actionKey: txToDisplay.actionKey,
      title: txToDisplay.title,
      description: txToDisplay.description,
      payload: txToDisplay.payload,
      withTrackedModal: true,
    };
    onClose(trackedTx?.txKey); // Close the current modal
    // Re-run the transaction
    await handleTransaction({
      config: config!,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      actionFunction: actions[txToDisplay.actionKey],
      params: retryParams,
    });
  };

  const isOpen = (trackedTx?.isTrackedModalOpen || initialTx?.withTrackedModal) ?? false;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose(trackedTx?.txKey)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" />
            <Dialog.Content
              className="relative w-full max-w-md outline-none"
              onOpenAutoFocus={() => setTrackedTx(undefined)}
              {...customization?.modalProps}
            >
              <motion.div {...motionProps}>
                <div
                  className={cn(
                    'relative flex flex-col gap-3 rounded-2xl bg-[var(--tuwa-bg-primary)] p-5 pt-0 shadow-2xl max-h-[98dvh] overflow-y-auto',
                    className,
                  )}
                >
                  {/* --- Header --- */}
                  {C?.header ? (
                    C.header({ onClose: () => onClose(trackedTx?.txKey) })
                  ) : (
                    <div className="flex items-start justify-between sticky top-0 left-0 w-full z-10 pt-5 pb-2 bg-[var(--tuwa-bg-primary)]">
                      <Dialog.Title className="text-lg font-bold text-[var(--tuwa-text-primary)]">
                        {labels.trackingModal.title}
                      </Dialog.Title>
                      <Dialog.Close asChild>
                        <button
                          type="button"
                          onClick={() => onClose(trackedTx?.txKey)}
                          aria-label={labels.actions.close}
                          className="cursor-pointer ml-2 -mt-1 rounded-full p-1 text-[var(--tuwa-text-tertiary)] transition-colors hover:bg-[var(--tuwa-bg-muted)] hover:text-[var(--tuwa-text-primary)]"
                        >
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </Dialog.Close>
                    </div>
                  )}

                  {/* --- Main Visuals --- */}
                  {C?.statusVisual ? (
                    C.statusVisual({
                      isProcessing,
                      isSucceed: txStatus === TransactionStatus.Success,
                      isFailed: isError,
                      isReplaced: txStatus === TransactionStatus.Replaced,
                    })
                  ) : (
                    <TxStatusVisual
                      isProcessing={isProcessing}
                      isSucceed={txStatus === TransactionStatus.Success}
                      isFailed={isError}
                      isReplaced={txStatus === TransactionStatus.Replaced}
                    />
                  )}

                  <div className="flex flex-col items-center text-center -mt-2">
                    <StatusAwareText
                      txStatus={txStatus}
                      source={txToDisplay?.title}
                      fallback={txToDisplay?.type}
                      variant="title"
                      applyColor
                      className="text-xl"
                    />
                    <StatusAwareText
                      txStatus={txStatus}
                      source={txToDisplay?.description}
                      variant="description"
                      className="mt-0"
                    />
                  </div>

                  {C?.progressIndicator ? (
                    C.progressIndicator({
                      isProcessing,
                      isSucceed: txStatus === TransactionStatus.Success,
                      isFailed: isError,
                      isReplaced: txStatus === TransactionStatus.Replaced,
                    })
                  ) : (
                    <TxProgressIndicator
                      isProcessing={isProcessing}
                      isSucceed={txStatus === TransactionStatus.Success}
                      isFailed={isError}
                      isReplaced={txStatus === TransactionStatus.Replaced}
                    />
                  )}

                  {/* --- Info Blocks --- */}
                  {C?.infoBlock ? (
                    C.infoBlock({
                      tx: txToDisplay as T,
                      appChains,
                      transactionsPool,
                    })
                  ) : (
                    <TxInfoBlock tx={txToDisplay as T} appChains={appChains} transactionsPool={transactionsPool} />
                  )}

                  {C?.errorBlock ? (
                    C.errorBlock({
                      error: trackedTx?.errorMessage || initialTx?.errorMessage,
                    })
                  ) : (
                    <TxErrorBlock error={trackedTx?.errorMessage || initialTx?.errorMessage} />
                  )}

                  {/* --- Footer --- */}
                  {C?.footer ? (
                    C.footer({
                      onClose: () => onClose(trackedTx?.txKey),
                      onOpenWalletInfo,
                      isProcessing,
                      onRetry: canRetry ? handleRetry : undefined,
                    })
                  ) : (
                    <div className="mt-2 flex w-full items-center gap-3 border-t border-[var(--tuwa-border-primary)] pt-4">
                      {isError && canRetry ? (
                        <button
                          type="button"
                          onClick={handleRetry}
                          className="cursor-pointer w-full rounded-md bg-[var(--tuwa-button-gradient-from)] py-2 text-sm font-semibold text-[var(--tuwa-text-on-accent)] transition-opacity hover:opacity-90"
                        >
                          {labels.trackingModal.retry}
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={onOpenWalletInfo}
                          className="cursor-pointer w-full rounded-md bg-[var(--tuwa-bg-muted)] py-2 text-sm font-semibold text-[var(--tuwa-text-primary)] transition-colors hover:bg-[var(--tuwa-border-primary)]"
                        >
                          {labels.trackingModal.walletInfo}
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => onClose(trackedTx?.txKey)}
                        disabled={isProcessing}
                        className="cursor-pointer w-full rounded-md bg-[var(--tuwa-bg-muted)] py-2 text-sm font-semibold text-[var(--tuwa-text-primary)] transition-colors hover:bg-[var(--tuwa-border-primary)] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isProcessing ? labels.trackingModal.processing : labels.trackingModal.close}
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  );
}
