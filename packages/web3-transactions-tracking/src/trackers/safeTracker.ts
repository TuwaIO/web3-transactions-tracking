import dayjs from 'dayjs';
import { Hex, isHex, zeroHash } from 'viem';

import { ITxTrackingStore } from '../store/txTrackingStore';
import { Transaction, TransactionStatus } from '../types';
import { initializePollingTracker } from '../utils/initializePollingTracker';
import { SafeTransactionServiceUrls } from '../utils/safeConstants';

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

export type SafeTrackerParams = {
  onSucceed: (safeResponse: SafeTxStatusResponse) => void;
  onFailed: (safeResponse: SafeTxStatusResponse) => void;
  onReplaced?: (safeResponse: SafeTxStatusResponse) => void;
  onIntervalTick?: (safeResponse: SafeTxStatusResponse) => void;
  onInitialize?: () => void;
  removeTxFromPool?: (txKey: string) => void;
  tx: Pick<Transaction, 'txKey' | 'chainId' | 'from'> & {
    pending?: boolean;
  };
};

async function fetchTxFromSafeAPI({
  tx,
  onSucceed,
  onFailed,
  onIntervalTick,
  onReplaced,
  clearWatch,
}: {
  clearWatch: (withoutRemoving?: boolean) => void;
} & Pick<SafeTrackerParams, 'onIntervalTick' | 'onSucceed' | 'onFailed' | 'onReplaced' | 'tx'>) {
  const response = await fetch(`${SafeTransactionServiceUrls[tx.chainId]}/multisig-transactions/${tx.txKey}/`);

  if (response.ok) {
    const safeStatus = (await response.json()) as SafeTxStatusResponse;
    if (!!safeStatus.nonce || safeStatus.nonce === 0) {
      const allTxWithSameNonceResponse = await fetch(
        `${SafeTransactionServiceUrls[tx.chainId]}/safes/${tx.from}/multisig-transactions/?nonce=${safeStatus.nonce}`,
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
            if (onReplaced) {
              onReplaced({ ...safeStatus, replacedHash });
            } else if (onIntervalTick) {
              onIntervalTick({ ...safeStatus, replacedHash });
            }
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

export async function safeTracker({
  onInitialize,
  onReplaced,
  onSucceed,
  onFailed,
  onIntervalTick,
  removeTxFromPool,
  tx,
}: SafeTrackerParams) {
  await initializePollingTracker({
    onInitialize,
    onSucceed,
    onFailed,
    onIntervalTick,
    removeTxFromPool,
    tx,
    onReplaced,
    fetcher: fetchTxFromSafeAPI,
  });
}

export async function safeTrackerForStore<T extends Transaction>({
  tx,
  transactionsPool,
  updateTxParams,
  onSucceedCallbacks,
  removeTxFromPool,
}: Pick<ITxTrackingStore<T>, 'transactionsPool' | 'updateTxParams' | 'onSucceedCallbacks' | 'removeTxFromPool'> & {
  tx: T;
}) {
  return await safeTracker({
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
