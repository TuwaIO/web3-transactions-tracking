import { Web3Icon } from '@bgd-labs/react-web3-icons';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { TransactionPool } from '@tuwa/web3-transactions-tracking-core/src/store/initializeTxTrackingStore';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Chain } from 'viem';

import { StatusAwareText } from './StatusAwareText';
import { ToastTransactionKey } from './ToastTransactionKey';
import { TransactionStatusBadge } from './TransactionStatusBadge';

dayjs.extend(relativeTime);

export function TransactionHistoryItem<TR, T extends Transaction<TR>>({
  tx,
  appChains,
  transactionsPool,
}: {
  tx: T;
  appChains: Chain[];
  transactionsPool: TransactionPool<TR, T>;
}) {
  return (
    <div className="flex flex-col gap-2 border-b border-gray-100 p-3 transition-colors hover:bg-gray-50">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
            <div className="h-8 w-8 text-gray-500">
              <Web3Icon chainId={tx.chainId} />
            </div>
          </div>
          <div>
            <StatusAwareText
              tx={tx}
              source={tx.title}
              fallback={tx.type}
              baseClasses="text-sm font-semibold text-gray-900"
              applyColor
            />
            <span className="block text-xs text-gray-500 mb-1">
              {tx.localTimestamp ? dayjs.unix(tx.localTimestamp).fromNow() : '...'}
            </span>
            <StatusAwareText tx={tx} source={tx.description} baseClasses="mt-1 text-xs text-gray-500" />
          </div>
        </div>
        <TransactionStatusBadge tx={tx} />
      </div>

      <ToastTransactionKey tx={tx} appChains={appChains} transactionsPool={transactionsPool} variant="history" />
    </div>
  );
}
