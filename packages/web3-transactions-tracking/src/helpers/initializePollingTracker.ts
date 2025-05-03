import { TrackerParams, Transaction } from '../types';

export async function initializePollingTracker<T extends Transaction>({
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
  fetcher: ({
    txKey,
    onSucceed,
    onFailed,
    onIntervalTick,
    clearWatch,
  }: {
    txKey: string;
    clearWatch: (withoutRemoving?: boolean) => void;
    onSucceed: (response: any) => void;
    onFailed: (response: any) => void;
    onIntervalTick?: (response: any) => void;
  }) => Promise<any>;
} & Pick<TrackerParams<T>, 'onInitialize' | 'tx'>) {
  if (onInitialize) {
    onInitialize();
  }

  let pollingInterval: number | undefined = undefined;
  const isPending = tx.pending;
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
        txKey: tx.txKey,
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
