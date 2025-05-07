import dayjs from 'dayjs';
import { Hex, isHex, zeroHash } from 'viem';

import { ITxTrackingStore } from '../store/txTrackingStore';
import { ActionTxKey, TrackerParams, Transaction, TransactionStatus } from '../types';
import { SafeTransactionServiceUrls } from '../utils/safeConstants';

export type SafeTx = {
  safeTxHash: string;
};

export function isSafeTxKey(txKey: ActionTxKey): txKey is SafeTx {
  return (txKey as SafeTx).safeTxHash !== undefined;
}

type SafeTxStatusResponse = {
  transactionHash: string;
  safeTxHash: string;
  isExecuted: boolean;
  isSuccessful: boolean | null;
  executionDate: string | null;
  submissionDate: string | null;
  modified: string;
  nonce: number;
  replacedHash?: string;
};

type SafeTxSameNonceResponse = {
  count: number;
  countUniqueNonce: number;
  results: SafeTxStatusResponse[];
};

type SafeTrackerParams<T extends Transaction> = Omit<TrackerParams<T>, 'chains' | 'onFailed'> & {
  onSucceed: (safeResponse: SafeTxStatusResponse) => void;
  onFailed: (safeResponse: SafeTxStatusResponse) => void;
  onReplaced: (safeResponse: SafeTxStatusResponse) => void;
  onIntervalTick?: (safeResponse: SafeTxStatusResponse) => void;
  removeTxFromPool?: (txKey: string) => void;
};

async function fetchTxFromSafeAPI<T extends Transaction>({
  txKey,
  txChainId,
  onSucceed,
  onFailed,
  onIntervalTick,
  walletAddress,
  onReplaced,
  clearWatch,
}: {
  txKey: string;
  txChainId: number;
  walletAddress: string;
  clearWatch: (withoutRemoving?: boolean) => void;
} & Pick<SafeTrackerParams<T>, 'onIntervalTick' | 'onSucceed' | 'onFailed' | 'onReplaced'>) {
  const response = await fetch(`${SafeTransactionServiceUrls[txChainId]}/multisig-transactions/${txKey}/`);

  if (response.ok) {
    const safeStatus = (await response.json()) as SafeTxStatusResponse;
    if (!!safeStatus.nonce || safeStatus.nonce === 0) {
      const allTxWithSameNonceResponse = await fetch(
        `${SafeTransactionServiceUrls[txChainId]}/safes/${
          walletAddress
        }/multisig-transactions/?nonce=${safeStatus.nonce}`,
      );

      if (allTxWithSameNonceResponse.ok) {
        const sameNonceResponse = (await allTxWithSameNonceResponse.json()) as SafeTxSameNonceResponse;

        const isPending = !safeStatus.isExecuted && sameNonceResponse.count <= 1;

        const gnosisStatusModified = dayjs(safeStatus.modified);
        const currentTime = dayjs();
        const daysPassed = currentTime.diff(gnosisStatusModified, 'day');
        if (daysPassed >= 1 && isPending) {
          clearWatch();
          return response;
        }

        if (sameNonceResponse.count > 1) {
          const replacedHash = sameNonceResponse.results.filter(
            (safeTx) => safeTx.safeTxHash !== safeStatus.safeTxHash,
          )[0].safeTxHash;

          if (isHex(replacedHash)) {
            onReplaced({ ...safeStatus, replacedHash });
            clearWatch(true);
            return response;
          }
        }

        if (onIntervalTick) {
          onIntervalTick(safeStatus);
        }

        if (!isPending) {
          clearWatch(true);
          if (safeStatus.isExecuted && safeStatus.isSuccessful) {
            onSucceed(safeStatus);
          } else if (safeStatus.isExecuted && !safeStatus.isSuccessful) {
            onFailed(safeStatus);
          }
        }
      }
    }
  }

  return response;
}

export async function safeTracker<T extends Transaction>({
  onInitialize,
  onReplaced,
  onSucceed,
  onFailed,
  onIntervalTick,
  removeTxFromPool,
  tx,
}: SafeTrackerParams<T>) {
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
      const response = await fetchTxFromSafeAPI<T>({
        txKey: tx.txKey,
        txChainId: tx.chainId,
        walletAddress: tx.from,
        onSucceed,
        onFailed,
        onIntervalTick,
        onReplaced,
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

export async function safeTrackerForStore<T extends Transaction>({
  tx,
  transactionsPool,
  updateTxParams,
  onSucceedCallbacks,
  removeTxFromPool,
}: Pick<SafeTrackerParams<T>, 'tx' | 'removeTxFromPool'> &
  Pick<ITxTrackingStore<T>, 'transactionsPool' | 'updateTxParams' | 'onSucceedCallbacks'>) {
  return await safeTracker<T>({
    tx,
    removeTxFromPool,
    onSucceed: async (response) => {
      updateTxParams({
        txKey: tx.txKey,
        status: TransactionStatus.Success,
        pending: false,
        hash: response.transactionHash as Hex,
        finishedTimestamp: response.executionDate ? dayjs(response.executionDate).unix() : undefined,
      });
      const updatedTX = transactionsPool[tx.txKey];
      onSucceedCallbacks(updatedTX);
    },
    onIntervalTick: async (response) => {
      let status = undefined;
      if (response.isExecuted || !!response.replacedHash) {
        if (response.isSuccessful) {
          status = TransactionStatus.Success;
        } else if (response.replacedHash) {
          status = TransactionStatus.Replaced;
        } else {
          status = TransactionStatus.Reverted;
        }
      }

      const pending = !response.isExecuted && !response.replacedHash;

      updateTxParams(
        {
          status,
          pending,
          txKey: tx.txKey,
          hash: response.transactionHash as Hex,
          finishedTimestamp: response.executionDate ? dayjs(response.executionDate).unix() : undefined,
          isError: !pending && status === TransactionStatus.Reverted,
        },
        true,
      );
    },
    onFailed: (response) => {
      updateTxParams({
        txKey: tx.txKey,
        status: TransactionStatus.Failed,
        pending: false,
        isError: true,
        hash: response.transactionHash as Hex,
        finishedTimestamp: response.executionDate ? dayjs(response.executionDate).unix() : undefined,
      });
    },
    onReplaced: (response) => {
      updateTxParams({
        txKey: tx.txKey,
        status: TransactionStatus.Replaced,
        pending: false,
        hash: response.transactionHash as Hex,
        replacedTxHash: (response?.replacedHash ?? zeroHash) as Hex,
        finishedTimestamp: response.executionDate ? dayjs(response.executionDate).unix() : undefined,
      });
    },
  });
}
