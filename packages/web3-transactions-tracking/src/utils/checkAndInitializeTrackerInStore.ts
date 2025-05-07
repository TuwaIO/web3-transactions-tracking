import { ITxTrackingStore } from '../store/txTrackingStore';
import { ethereumTrackerForStore } from '../trackers/ethereumTracker';
import { gelatoTrackerForStore } from '../trackers/gelatoTracker';
import { safeTrackerForStore } from '../trackers/safeTracker';
import { TrackerParams, Transaction, TransactionTracker } from '../types';

export async function checkAndInitializeTrackerInStore<T extends Transaction>({
  tracker,
  tx,
  chains,
  ...rest
}: Pick<TrackerParams<T>, 'tx' | 'chains'> &
  Pick<ITxTrackingStore<T>, 'transactionsPool' | 'updateTxParams' | 'onSucceedCallbacks' | 'removeTxFromPool'> & {
    tracker: TransactionTracker;
  }) {
  switch (tracker) {
    case TransactionTracker.Ethereum:
      await ethereumTrackerForStore({
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
      await ethereumTrackerForStore({
        tx,
        chains,
        ...rest,
      });
  }
}
