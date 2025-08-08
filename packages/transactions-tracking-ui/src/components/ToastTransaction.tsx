/**
 * @file This file contains the `ToastTransaction` component, which serves as the main body for a transaction notification toast.
 */

import { Web3Icon } from '@bgd-labs/react-web3-icons';
import { getChainName } from '@bgd-labs/react-web3-icons/dist/utils';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist';
import { JSX, ReactNode } from 'react';
import { ToastContainerProps, ToastContentProps } from 'react-toastify';
import { Chain } from 'viem';

import { useLabels } from '../providers/LabelsProvider';
import { cn } from '../utils';
import { StatusAwareText } from './StatusAwareText';
import { ToastTransactionKey } from './ToastTransactionKey';
import { TransactionStatusBadge } from './TransactionStatusBadge';
import { WalletInfoModalProps } from './WalletInfoModal';

// --- Prop Types for Customization ---
type CustomStatusAwareTextProps = Parameters<typeof StatusAwareText>[0];
type CustomTransactionKeyProps<TR, T extends Transaction<TR>> = Parameters<typeof ToastTransactionKey<TR, T>>[0];
type CustomStatusBadgeProps<TR, T extends Transaction<TR>> = Parameters<typeof TransactionStatusBadge<TR, T>>[0];
type CustomWalletInfoButtonProps = { onClick: () => void };

/**
 * Defines the structure for the `customization` prop, allowing users to override
 * default sub-components with their own implementations.
 */
export type ToastTransactionCustomization<TR, T extends Transaction<TR>> = {
  components?: {
    /** Override the default title/description component. */
    statusAwareText?: (props: CustomStatusAwareTextProps) => ReactNode;
    /** Override the default component for displaying transaction keys/hashes. */
    transactionKey?: (props: CustomTransactionKeyProps<TR, T>) => ReactNode;
    /** Override the default status badge component. */
    statusBadge?: (props: CustomStatusBadgeProps<TR, T>) => ReactNode;
    /** Override the default "Open wallet info" button. */
    walletInfoButton?: (props: CustomWalletInfoButtonProps) => ReactNode;
  };
};

export type ToastTransactionProps<TR, T extends Transaction<TR>> = {
  /** The transaction object to display in the toast. */
  tx: T;
  /** A function to open the main wallet info modal. */
  openWalletInfoModal?: (value: boolean) => void;
  /** An array of supported chain objects. */
  appChains: Chain[];
  /** An optional custom icon to display instead of the default chain icon. */
  icon?: ReactNode;
  /** Optional additional CSS classes for the toast container. */
  className?: string;
  /** An object to customize and override the default internal components. */
  customization?: ToastTransactionCustomization<TR, T>;

  closeToast?: ToastContentProps['closeToast'];
  toastProps?: ToastContainerProps;
} & Pick<WalletInfoModalProps<TR, T>, 'transactionsPool'>;

/**
 * A composite component that renders the content for a transaction toast notification.
 * It is highly customizable via the `customization` prop, which allows for overriding
 * its internal components.
 *
 * @param {ToastTransactionProps<TR, T>} props - The component props.
 * @returns {JSX.Element} The rendered toast body.
 */
export function ToastTransaction<TR, T extends Transaction<TR>>({
  openWalletInfoModal,
  tx,
  transactionsPool,
  appChains,
  icon,
  className,
  customization,
}: ToastTransactionProps<TR, T>): JSX.Element {
  const labels = useLabels();
  const C = customization?.components; // Shortcut for customization components

  return (
    <div className={cn('flex w-full flex-col gap-3 rounded-lg bg-[var(--tuwa-bg-primary)] p-4 shadow-md', className)}>
      {/* --- Header: Icon + Title/Description --- */}
      <div className="flex items-start gap-3">
        <div className="w-[40px] flex-shrink-0" title={getChainName(tx.chainId)}>
          {icon ?? <Web3Icon chainId={tx.chainId} />}
        </div>
        <div className="flex-1">
          {C?.statusAwareText ? (
            C.statusAwareText({
              txStatus: tx.status,
              source: tx.title,
              fallback: tx.type,
              variant: 'title',
              applyColor: true,
            })
          ) : (
            <StatusAwareText txStatus={tx.status} source={tx.title} fallback={tx.type} variant="title" applyColor />
          )}

          {C?.statusAwareText ? (
            C.statusAwareText({ txStatus: tx.status, source: tx.description, variant: 'description' })
          ) : (
            <StatusAwareText txStatus={tx.status} source={tx.description} variant="description" />
          )}
        </div>
      </div>

      {/* --- Body: Hashes + Status/Actions --- */}
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
