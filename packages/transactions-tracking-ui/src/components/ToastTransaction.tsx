import { Web3Icon } from '@bgd-labs/react-web3-icons';
import { getChainName } from '@bgd-labs/react-web3-icons/dist/utils';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist';
import { ReactNode } from 'react';
import { ToastContainerProps, ToastContentProps } from 'react-toastify';
import { Chain } from 'viem';

import { useLabels } from '../providers/LabelsProvider';
import { cn } from '../utils/cn';
import { StatusAwareText } from './StatusAwareText';
import { ToastTransactionKey } from './ToastTransactionKey';
import { TransactionStatusBadge } from './TransactionStatusBadge';
import { WalletInfoModalProps } from './WalletInfoModal/WalletInfoModal';

type CustomStatusAwareTextProps<TR, T extends Transaction<TR>> = Parameters<typeof StatusAwareText<TR, T>>[0];
type CustomTransactionKeyProps<TR, T extends Transaction<TR>> = Parameters<typeof ToastTransactionKey<TR, T>>[0];
type CustomStatusBadgeProps<TR, T extends Transaction<TR>> = Parameters<typeof TransactionStatusBadge<TR, T>>[0];
type CustomWalletInfoButtonProps = { onClick: () => void };

export type ToastTransactionCustomization<TR, T extends Transaction<TR>> = {
  components?: {
    statusAwareText?: (props: CustomStatusAwareTextProps<TR, T>) => ReactNode;
    transactionKey?: (props: CustomTransactionKeyProps<TR, T>) => ReactNode;
    statusBadge?: (props: CustomStatusBadgeProps<TR, T>) => ReactNode;
    walletInfoButton?: (props: CustomWalletInfoButtonProps) => ReactNode;
  };
};

export function ToastTransaction<TR, T extends Transaction<TR>>({
  openWalletInfoModal,
  tx,
  transactionsPool,
  appChains,
  icon,
  className,
  customization,
}: {
  closeToast?: ToastContentProps['closeToast'];
  toastProps?: ToastContainerProps;
  tx: T;
  openWalletInfoModal?: (value: boolean) => void;
  appChains: Chain[];
  icon?: ReactNode;
  className?: string;
  customization?: ToastTransactionCustomization<TR, T>;
} & Pick<WalletInfoModalProps<TR, T>, 'transactionsPool'>) {
  const labels = useLabels();

  const C = customization?.components;

  return (
    <div className={cn('flex w-full flex-col gap-3 rounded-lg bg-[var(--tuwa-bg-primary)] p-4 shadow-md', className)}>
      <div className="flex items-start gap-3">
        <div className="w-[40px] flex-shrink-0" title={getChainName(tx.chainId)}>
          {icon ?? <Web3Icon chainId={tx.chainId} />}
        </div>

        <div className="flex-1">
          {C?.statusAwareText ? (
            C.statusAwareText({ tx, source: tx.title, fallback: tx.type, variant: 'title', applyColor: true })
          ) : (
            <StatusAwareText tx={tx} source={tx.title} fallback={tx.type} variant="title" applyColor />
          )}

          {C?.statusAwareText ? (
            C.statusAwareText({ tx, source: tx.description, variant: 'description' })
          ) : (
            <StatusAwareText tx={tx} source={tx.description} variant="description" />
          )}
        </div>
      </div>

      <div>
        {C?.transactionKey ? (
          C.transactionKey({ transactionsPool, appChains, tx, variant: 'toast' })
        ) : (
          <ToastTransactionKey transactionsPool={transactionsPool} appChains={appChains} tx={tx} variant="toast" />
        )}

        <div className="mt-3 flex items-center justify-between">
          {C?.statusBadge ? C.statusBadge({ tx }) : <TransactionStatusBadge tx={tx} />}

          {openWalletInfoModal &&
            (C?.walletInfoButton ? (
              C.walletInfoButton({ onClick: () => openWalletInfoModal(true) })
            ) : (
              <button
                className="cursor-pointer bg-gradient-to-r from-[var(--tuwa-button-gradient-from)] to-[var(--tuwa-button-gradient-to)] text-[var(--tuwa-text-on-accent)] font-bold text-xs py-1 px-3 rounded-md shadow-lg hover:shadow-xl hover:from-[var(--tuwa-button-gradient-from-hover)] hover:to-[var(--tuwa-button-gradient-to-hover)] active:scale-95 transition-all duration-200 ease-in-out"
                onClick={() => openWalletInfoModal(true)}
                type="button"
              >
                {labels.toast.openWalletInfo}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
