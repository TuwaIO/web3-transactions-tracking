import { initializeTxTrackingStore } from '@tuwa/web3-transactions-tracking/src/store/txTrackingStore';
import { createBoundedUseStore } from '@tuwa/web3-transactions-tracking/src/utils/createBoundedUseStore';

import { appChains } from '@/configs/wagmiConfig';
import { onSucceedCallbacks, TransactionUnion } from '@/transactions/onSucceedCallbacks';

const storageName = 'transactions-tracking-storage';

export const useTxTrackingStore = createBoundedUseStore(
  initializeTxTrackingStore<TransactionUnion>({
    name: storageName,
    appChains,
    onSucceedCallbacks,
  }),
);
