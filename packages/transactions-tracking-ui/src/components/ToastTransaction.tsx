import { Web3Icon } from '@bgd-labs/react-web3-icons';
import { getChainName } from '@bgd-labs/react-web3-icons/dist/utils';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { TransactionStatus } from '@tuwa/web3-transactions-tracking-core/src/types';
import { ReactNode } from 'react';
import { ToastContainerProps, ToastContentProps } from 'react-toastify';
import { Chain } from 'viem';

import { ToastTransactionKey } from './ToastTransactionKey';
import { TransactionStatusBadge } from './TransactionStatusBadge';
import { WalletInfoModalProps } from './WalletInfoModal';

const STATUS_MAP = {
  [TransactionStatus.Success]: { index: 1, colorClass: 'text-green-500' },
  [TransactionStatus.Failed]: { index: 2, colorClass: 'text-red-500' },
  [TransactionStatus.Reverted]: { index: 2, colorClass: 'text-red-500' },
  [TransactionStatus.Replaced]: { index: 3, colorClass: '' },
  default: { index: 0, colorClass: '' },
};

function StatusAwareText<TR, T extends Transaction<TR>>({
  tx,
  source,
  fallback,
  baseClasses,
  applyColor = false,
}: {
  tx: T;
  source?: string | string[];
  fallback?: string;
  baseClasses: string;
  applyColor?: boolean;
}) {
  if (typeof source === 'string') {
    return <div className={baseClasses}>{source}</div>;
  }

  if (Array.isArray(source)) {
    const statusKey = tx.status || 'default';
    const config = STATUS_MAP[statusKey] || STATUS_MAP['default'];

    const text = source[config.index];
    const color = applyColor ? config.colorClass : '';

    return <div className={`${baseClasses} ${color}`}>{text}</div>;
  }

  if (fallback) {
    return <div className={baseClasses}>{fallback}</div>;
  }

  return null;
}

export function ToastTransaction<TR, T extends Transaction<TR>>({
  openWalletInfoModal,
  tx,
  transactionsPool,
  appChains,
  icon,
}: {
  closeToast?: ToastContentProps['closeToast'];
  toastProps?: ToastContainerProps;
  tx: T;
  openWalletInfoModal?: (value: boolean) => void;
  appChains: Chain[];
  icon?: ReactNode;
} & Pick<WalletInfoModalProps<TR, T>, 'transactionsPool'>) {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-start gap-3">
        <div className="w-[40px] flex-shrink-0" title={getChainName(tx.chainId)}>
          {icon ?? <Web3Icon chainId={tx.chainId} />}
        </div>

        <div className="flex-1">
          <StatusAwareText
            tx={tx}
            source={tx.title}
            fallback={tx.type}
            baseClasses="text-sm font-semibold text-gray-900"
            applyColor
          />
          <StatusAwareText tx={tx} source={tx.description} baseClasses="mt-1 text-xs text-gray-500" />
        </div>
      </div>

      <div>
        <ToastTransactionKey transactionsPool={transactionsPool} appChains={appChains} tx={tx} />

        <div className="mt-3 flex items-center justify-between">
          <TransactionStatusBadge tx={tx} />
          {openWalletInfoModal && (
            <button
              className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs py-1 px-3 rounded-md shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 active:scale-95 transition-all duration-200 ease-in-out"
              onClick={() => openWalletInfoModal(true)}
              type="button"
            >
              Open wallet info
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
