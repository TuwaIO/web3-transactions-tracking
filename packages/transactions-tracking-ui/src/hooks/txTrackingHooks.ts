import { createTxTrackingStore } from '@tuwa/evm-transactions-tracking/dist';
import { createBoundedUseStore } from '@tuwa/web3-transactions-tracking-core/dist';

import { appChains } from '../configs/wagmiConfig';
import { onSucceedCallbacks, TransactionUnion } from '../transactions/onSucceedCallbacks';

const storageName = 'transactions-tracking-storage';

export const useTxTrackingStore = createBoundedUseStore(
  createTxTrackingStore<TransactionUnion>({
    name: storageName,
    appChains,
    onSucceedCallbacks,
  }),
);
