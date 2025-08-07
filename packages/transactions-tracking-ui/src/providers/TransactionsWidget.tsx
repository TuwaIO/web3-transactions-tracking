import {
  IInitializeTxTrackingStore,
  Transaction,
  TransactionPool,
  TransactionStatus,
} from '@tuwa/web3-transactions-tracking-core/dist';
import { useEffect, useMemo, useRef, useState } from 'react';
import Modal from 'react-modal';
import { toast, ToastContainer, ToastContainerProps, ToastContentProps, TypeOptions } from 'react-toastify';

import {
  ToastCloseButton,
  ToastTransaction,
  ToastTransactionCustomization,
  TrackingTxModal,
  TrackingTxModalCustomization,
  TrackingTxModalProps,
  WalletInfoModal,
  WalletInfoModalCustomization,
} from '../components';
import { defaultLabels } from '../i18n/en';
import { TuwaLabels } from '../i18n/types';
import { deepMerge } from '../utils/deepMerge';
import { LabelsProvider } from './LabelsProvider';

if (typeof document !== 'undefined') {
  document.body.setAttribute('id', 'tuwa-transactions-widget');
  Modal.setAppElement('#tuwa-transactions-widget');
}

const STATUS_TO_TOAST_TYPE: Record<string, TypeOptions> = {
  [TransactionStatus.Success]: 'success',
  [TransactionStatus.Failed]: 'error',
  [TransactionStatus.Replaced]: 'info',
};

export function TransactionsWidget<TR, T extends Transaction<TR>>({
  transactionsPool,
  walletAddress,
  appChains,
  labels,
  features,
  customization,
  closeTxTrackedModal,
  actions,
  config,
  handleTransaction,
  initialTx,
  ...toastProps
}: {
  labels?: Partial<TuwaLabels>;
  features?: {
    toasts?: boolean;
    walletInfoModal?: boolean;
    trackingTxModal?: boolean;
  };
  customization?: {
    toast?: ToastTransactionCustomization<TR, T>;
    walletInfoModal?: WalletInfoModalCustomization<TR, T>;
    trackingTxModal?: TrackingTxModalCustomization<TR, T>;
  };
  walletAddress?: string;
} & Pick<IInitializeTxTrackingStore<TR, T>, 'closeTxTrackedModal'> &
  ToastContainerProps &
  Pick<
    TrackingTxModalProps<TR, T>,
    'handleTransaction' | 'actions' | 'config' | 'appChains' | 'transactionsPool' | 'initialTx'
  >) {
  const [isWalletInfoModalOpen, setIsWalletInfoModalOpen] = useState(false);
  const prevTransactionsRef = useRef<TransactionPool<TR, T>>(transactionsPool);

  const enabledFeatures = useMemo(
    () => ({
      toasts: features?.toasts ?? true,
      walletInfoModal: features?.walletInfoModal ?? true,
      trackingTxModal: features?.trackingTxModal ?? true,
    }),
    [features],
  );

  const mergedLabels = useMemo(() => deepMerge(defaultLabels, labels || {}), [labels]);

  useEffect(() => {
    if (!enabledFeatures.toasts) return;

    const showOrUpdateToast = (tx: T, type: TypeOptions) => {
      const content = ({ closeToast, toastProps: containerProps }: ToastContentProps) => (
        <ToastTransaction
          closeToast={closeToast}
          toastProps={containerProps}
          tx={tx}
          transactionsPool={transactionsPool}
          appChains={appChains}
          openWalletInfoModal={enabledFeatures.walletInfoModal ? () => setIsWalletInfoModalOpen(true) : undefined}
          customization={customization?.toast}
        />
      );

      if (toast.isActive(tx.txKey)) {
        toast.update(tx.txKey, { render: content, type });
      } else {
        toast(content, { toastId: tx.txKey, type });
      }
    };

    const prevPool = prevTransactionsRef.current;

    Object.values(transactionsPool).forEach((currentTx) => {
      const prevTx = prevPool[currentTx.txKey];
      if (!prevTx && currentTx.pending) {
        showOrUpdateToast(currentTx, 'info');
      } else if (prevTx && prevTx.status !== currentTx.status) {
        const toastType = STATUS_TO_TOAST_TYPE[currentTx.status ?? TransactionStatus.Success] || 'info';
        showOrUpdateToast(currentTx, toastType);
      } else if (prevTx && prevTx.hash !== currentTx.hash) {
        const toastType = STATUS_TO_TOAST_TYPE[currentTx.status ?? TransactionStatus.Success] || 'info';
        showOrUpdateToast(currentTx, toastType);
      }
    });

    prevTransactionsRef.current = transactionsPool;
  }, [transactionsPool, appChains, customization?.toast, mergedLabels, enabledFeatures]);

  return (
    <LabelsProvider labels={mergedLabels}>
      {enabledFeatures.toasts && (
        <ToastContainer
          position="bottom-right"
          stacked
          autoClose={300000}
          hideProgressBar
          closeOnClick={false}
          icon={false}
          closeButton={ToastCloseButton}
          toastClassName="!p-0 !bg-transparent !shadow-none"
          {...toastProps}
        />
      )}

      {enabledFeatures.walletInfoModal && (
        <WalletInfoModal
          transactionsPool={transactionsPool}
          walletAddress={walletAddress}
          isOpen={isWalletInfoModalOpen}
          setIsOpen={setIsWalletInfoModalOpen}
          appChains={appChains}
          customization={customization?.walletInfoModal}
        />
      )}

      {enabledFeatures.trackingTxModal && (
        <TrackingTxModal
          initialTx={initialTx}
          onClose={closeTxTrackedModal}
          onOpenWalletInfo={() => setIsWalletInfoModalOpen(true)}
          appChains={appChains}
          transactionsPool={transactionsPool}
          customization={customization?.trackingTxModal}
          actions={actions}
          config={config}
          handleTransaction={handleTransaction}
        />
      )}
    </LabelsProvider>
  );
}
