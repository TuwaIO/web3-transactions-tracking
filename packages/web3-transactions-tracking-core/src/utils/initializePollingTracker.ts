import { Transaction } from '../types';

export type InitializePollingTracker<R, T, TR> = {
  removeTxFromPool?: (taskId: string) => void;
  onSucceed: (response: R) => void;
  onFailed: (response: R) => void;
  onIntervalTick?: (response: R) => void;
  onReplaced?: (response: R) => void;
  fetcher: ({
    tx,
    onSucceed,
    onFailed,
    onIntervalTick,
    clearWatch,
    onReplaced,
  }: {
    clearWatch: (withoutRemoving?: boolean) => void;
    onSucceed: (response: R) => void;
    onFailed: (response: R) => void;
    onIntervalTick?: (response: R) => void;
    onReplaced?: (response: R) => void;
  } & {
    tx: T;
  }) => Promise<Response>;
} & {
  onInitialize?: () => void;
  tx: T &
    Pick<Transaction<TR>, 'txKey'> & {
      pending?: boolean;
    };
  pollingInterval?: number;
  retryCount?: number;
};

/**
 * Initializes a polling tracker to monitor the status of a transaction.
 *
 * @param {Object} params - The parameters for initializing the polling tracker.
 * @param {Function} [params.onInitialize] - A callback function to execute when tracker is initialized.
 * @param {Object} params.tx - The transaction object to monitor.
 * @param {Function} [params.removeTxFromPool] - A function to remove transaction from pool.
 * @param {Function} params.fetcher - The function used for fetching transaction status.
 * @param {Function} params.onFailed - A callback function to execute on failed transaction.
 * @param {Function} params.onIntervalTick - A callback function to execute on each polling interval.
 * @param {Function} params.onSucceed - A callback function to execute on successful transaction.
 * @param {number} [params.pollingInterval] - The time interval (in milliseconds) to poll for transaction status.
 * @param {number} [params.retryCount] - The number of times to retry fetching transaction status if transactions not found initially.
 * @param {Function} [params.onReplaced] - A callback function to execute when transaction is replaced.
 *
 * @return {Promise<void>} - A promise that resolves once the polling tracker is initialized.
 */
export async function initializePollingTracker<R, T, TR>({
  onInitialize,
  tx,
  removeTxFromPool,
  fetcher,
  onFailed,
  onIntervalTick,
  onSucceed,
  pollingInterval,
  retryCount,
  onReplaced,
}: InitializePollingTracker<R, T, TR>): Promise<void> {
  if (onInitialize) {
    onInitialize();
  }

  let PI: number | undefined = undefined;
  const isPending = !!tx?.pending;
  if (!isPending) {
    return;
  }
  clearInterval(PI);

  const clearWatch = (withoutRemoving?: boolean) => {
    clearInterval(PI);
    if (removeTxFromPool && !withoutRemoving) {
      removeTxFromPool(tx.txKey);
    }
  };

  let rc = retryCount ?? 10;
  PI = window.setInterval(async () => {
    if (rc > 0) {
      const response = await fetcher({
        tx,
        onSucceed,
        onFailed,
        onIntervalTick,
        onReplaced,
        clearWatch,
      });
      if (!response.ok) {
        rc--;
      }
    } else {
      clearWatch();
      return;
    }
  }, pollingInterval ?? 5000);
}
