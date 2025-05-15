import { Transaction, TransactionStatus } from '@tuwa/web3-transactions-tracking-core/dist/types';
import { Chain } from 'viem';

import { ITxTrackingStore } from '../store/txTrackingStore';
import { evmTrackerForStore } from '../trackers/evmTracker';
import { gelatoTrackerForStore } from '../trackers/gelatoTracker';
import { safeTrackerForStore } from '../trackers/safeTracker';
import { TransactionTracker } from '../types';

/**
 * Check and initialize a transaction tracker in the store based on the given parameters.
 *
 * @param {Object} params - Input parameters for initializing the tracker.
 * @param {TransactionTracker} params.tracker - The type of transaction tracker.
 * @param {T} params.tx - The transaction object to track.
 * @param {Chain[]} params.chains - The chains associated with the transaction.
 * @param {ITxTrackingStore<T>} rest - Additional properties required for tracking the transaction.
 * @param {Function} rest.transactionsPool - Method to store transaction pool in the tracking store.
 * @param {Function} rest.updateTxParams - Method to update transaction parameters in the tracking store.
 * @param {Function} rest.onSucceedCallbacks - Callback function called when transaction succeeds.
 * @param {Function} rest.removeTxFromPool - Method to remove transaction from the pool in the tracking store.
 *
 * @return {Promise<void>} A promise that resolves once the tracker is initialized.
 */
export async function checkAndInitializeTrackerInStore<T extends Transaction<TransactionTracker>>({
  tracker,
  tx,
  chains,
  ...rest
}: Pick<ITxTrackingStore<T>, 'transactionsPool' | 'updateTxParams' | 'onSucceedCallbacks' | 'removeTxFromPool'> & {
  chains: Chain[];
  tx: T;
  tracker: TransactionTracker;
}): Promise<void> {
  switch (tracker) {
    case TransactionTracker.Ethereum:
      await evmTrackerForStore({
        tx,
        chains,
        ...rest,
      });
      break;
    case TransactionTracker.Gelato:
      await gelatoTrackerForStore({
        tx,
        ...rest,
      });
      break;
    case TransactionTracker.Safe:
      await safeTrackerForStore({
        tx,
        ...rest,
      });
      break;
    // ...more
    default:
      await evmTrackerForStore({
        tx,
        chains,
        ...rest,
      });
  }
}
