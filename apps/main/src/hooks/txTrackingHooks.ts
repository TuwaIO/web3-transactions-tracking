import { initializeTxTrackingStore } from '@tuwa/web3-transactions-tracking/src/store/txTrackingStore';

import { appChains } from '@/configs/wagmiConfig';
import { onSucceedCallbacks, TransactionUnion } from '@/transactions/onSucceedCallbacks';

const storageName = 'transactions-tracking-storage';

export const useTxTrackingStore = initializeTxTrackingStore<TransactionUnion>({
  name: storageName,
  appChains,
  onSucceedCallbacks,
});
