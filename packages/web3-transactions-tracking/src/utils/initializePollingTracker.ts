import { Transaction } from '../types';

/**
 * Initialize the polling tracker to monitor the status of a transaction.
 *
 * @param {Object} options - The options object containing various callback functions and transaction information.
 * @param {Function} [options.onInitialize] - Callback function to be called when initializing the polling tracker.
 * @param {Function} [options.removeTxFromPool] - Function to remove a transaction from the pool by task ID.
 * @param {Function} options.fetcher - Function to fetch transaction status information.
 * @param {Function} options.onFailed - Callback function to be called when the transaction fails.
 * @param {Function} options.onIntervalTick - Callback function to be called on each polling interval.
 * @param {Function} options.onSucceed - Callback function to be called when the transaction succeeds.
 * @param {Function} [options.onReplaced] - Callback function to be called when the transaction is replaced.
 * @param {Object} options.tx - Transaction object with the transaction key and pending status.
 * @param {string} options.tx.txKey - The transaction key.
 * @param {boolean} [options.tx.pending] - Specifies if the transaction is pending or not.
 *
 * @return {Promise<void>} A promise that resolves once the polling tracker is initialized and monitoring the transaction status.
 */
export async function initializePollingTracker({
  onInitialize,
  tx,
  removeTxFromPool,
  fetcher,
  onFailed,
  onIntervalTick,
  onSucceed,
}: {
  removeTxFromPool?: (taskId: string) => void;
  onSucceed: (response: any) => void;
  onFailed: (response: any) => void;
  onIntervalTick?: (response: any) => void;
  onReplaced?: (response: any) => void;
  fetcher: ({
    tx,
    onSucceed,
    onFailed,
    onIntervalTick,
    clearWatch,
    onReplaced,
  }: {
    clearWatch: (withoutRemoving?: boolean) => void;
    onSucceed: (response: any) => void;
    onFailed: (response: any) => void;
    onIntervalTick?: (response: any) => void;
    onReplaced?: (response: any) => void;
  } & {
    tx: any;
  }) => Promise<any>;
} & {
  onInitialize?: () => void;
  tx: Pick<Transaction, 'txKey'> & {
    pending?: boolean;
  };
}): Promise<void> {
  if (onInitialize) {
    onInitialize();
  }

  let pollingInterval: number | undefined = undefined;
  const isPending = !!tx?.pending;
  if (!isPending) {
    return;
  }
  clearInterval(pollingInterval);

  const clearWatch = (withoutRemoving?: boolean) => {
    clearInterval(pollingInterval);
    if (removeTxFromPool && !withoutRemoving) {
      removeTxFromPool(tx.txKey);
    }
  };

  let retryCount = 10;
  pollingInterval = window.setInterval(async () => {
    if (retryCount > 0) {
      const response = await fetcher({
        tx,
        onSucceed,
        onFailed,
        onIntervalTick,
        clearWatch,
      });
      if (!response.ok) {
        retryCount--;
      }
    } else {
      clearWatch();
      return;
    }
  }, 5000);
}
