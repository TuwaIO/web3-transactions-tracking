import { TransactionPool } from '@tuwa/web3-transactions-tracking-core/dist/store/initializeTxTrackingStore';
import { Transaction, TransactionStatus } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { ReactNode, useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { toast, ToastContainer, ToastContainerProps, ToastContentProps, TypeOptions } from 'react-toastify';
import { Chain } from 'viem';

import { ToastCloseButton } from '../components/ToastCloseButton';
import { ToastTransaction } from '../components/ToastTransaction';
import { WalletInfoModal, WalletInfoModalProps } from '../components/WalletInfoModal/WalletInfoModal';
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
  [TransactionStatus.Reverted]: 'error',
  [TransactionStatus.Replaced]: 'info',
};

export type CustomToastComponentProps<TR, T extends Transaction<TR>> = {
  closeToast?: ToastContentProps['closeToast'];
  toastProps: ToastContainerProps;
  tx: T;
  openWalletInfoModal?: (isOpen: boolean) => void;
  transactionsPool: TransactionPool<TR, T>;
  appChains: Chain[];
};

export function TransactionsWidget<TR, T extends Transaction<TR>>({
  transactionsPool,
  walletAddress,
  appChains,
  renderToast,
  withoutWalletInfo,
  labels,
  ...toastProps
}: {
  withoutWalletInfo?: boolean;
  renderToast?: (props: CustomToastComponentProps<TR, T>) => ReactNode;
  labels?: Partial<TuwaLabels>;
} & WalletInfoModalProps<TR, T> &
  ToastContainerProps) {
  const prevTransactionsRef = useRef<TransactionPool<TR, T>>(transactionsPool);
  const [isWalletInfoModalOpen, setIsWalletInfoModalOpen] = useState(false);

  const mergedLabels = deepMerge(defaultLabels, labels || {});

  useEffect(() => {
    const showOrUpdateToast = (tx: T, type: TypeOptions) => {
      const propsForToast: CustomToastComponentProps<TR, T> = {
        openWalletInfoModal: withoutWalletInfo ? undefined : setIsWalletInfoModalOpen,
        tx,
        transactionsPool,
        appChains,
        toastProps: {},
        closeToast: () => toast.dismiss(tx.txKey),
      };

      const content = ({ closeToast, toastProps: containerProps }: ToastContentProps) => {
        propsForToast.closeToast = closeToast;
        propsForToast.toastProps = containerProps as ToastContainerProps;

        return renderToast ? renderToast(propsForToast) : <ToastTransaction {...propsForToast} />;
      };

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
        return;
      }

      if (prevTx && prevTx.status !== currentTx.status) {
        const toastType = STATUS_TO_TOAST_TYPE[currentTx.status ?? TransactionStatus.Success] || 'info';
        showOrUpdateToast(currentTx, toastType);
      }
    });

    prevTransactionsRef.current = transactionsPool;
  }, [transactionsPool, appChains, renderToast]);

  return (
    <LabelsProvider labels={mergedLabels}>
      <ToastContainer
        position="bottom-right"
        stacked
        autoClose={false}
        closeOnClick={false}
        icon={false}
        closeButton={ToastCloseButton}
        toastClassName="!p-0 !bg-transparent !shadow-none"
        {...toastProps}
      />
      {!withoutWalletInfo && (
        <WalletInfoModal
          appChains={appChains}
          transactionsPool={transactionsPool}
          walletAddress={walletAddress}
          isOpen={isWalletInfoModalOpen}
          setIsOpen={setIsWalletInfoModalOpen}
        />
      )}
    </LabelsProvider>
  );
}
