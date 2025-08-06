import {
  InitializePollingTracker,
  initializePollingTracker,
  ITxTrackingStore,
  Transaction,
  TransactionStatus,
} from '@tuwa/web3-transactions-tracking-core/dist';
import { Config } from '@wagmi/core';
import dayjs from 'dayjs';
import { Hex, isHex, zeroHash } from 'viem';

import { ActionTxKey, TransactionTracker } from '../types';
import { SafeTransactionServiceUrls } from '../utils/safeConstants';

type InitialSafeTx = Pick<Transaction<TransactionTracker>, 'txKey' | 'chainId' | 'from'> & {
  pending?: boolean;
};

export type SafeTxStatusResponse = {
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

export type SafeTrackerParams = Pick<
  InitializePollingTracker<SafeTxStatusResponse, InitialSafeTx, TransactionTracker>,
  | 'tx'
  | 'removeTxFromPool'
  | 'onInitialize'
  | 'onSucceed'
  | 'onFailed'
  | 'onReplaced'
  | 'onIntervalTick'
  | 'pollingInterval'
  | 'retryCount'
>;

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

/**
 * Method for tracking the status of a safe (https://help.safe.global/en/) transaction
 *
 * @param {SafeTrackerParams} options - Object containing parameters for the safe tracker function.
 * @param {Function} options.onInitialize - Callback function to be executed on tracker initialization.
 * @param {Function} options.onReplaced - Callback function to be executed when a replace is needed.
 * @param {Function} options.onSucceed - Callback function to be executed when tracker succeeds.
 * @param {Function} options.onFailed - Callback function to be executed when tracker fails.
 * @param {Function} options.onIntervalTick - Callback function to be executed on each interval tick.
 * @param {Function} options.removeTxFromPool - Function to remove transaction from tracking pool.
 * @param {Object} options.tx - Transaction object to track.
 * @param {Object} options.rest - Additional parameters to be provided to the tracker function.
 *
 * @return {Promise<void>} A promise that resolves once the safe tracker has completed its monitoring task.
 */
export async function safeTracker({
  onInitialize,
  onReplaced,
  onSucceed,
  onFailed,
  onIntervalTick,
  removeTxFromPool,
  tx,
  ...rest
}: SafeTrackerParams): Promise<void> {
  await initializePollingTracker<SafeTxStatusResponse, InitialSafeTx, TransactionTracker>({
    onInitialize,
    onSucceed,
    onFailed,
    onIntervalTick,
    removeTxFromPool,
    tx,
    onReplaced,
    fetcher: fetchTxFromSafeAPI,
    ...rest,
  });
}

export async function safeTrackerForStore<T extends Transaction<TransactionTracker>>({
  tx,
  transactionsPool,
  updateTxParams,
  onSucceedCallbacks,
  removeTxFromPool,
}: Pick<
  ITxTrackingStore<TransactionTracker, T, Config, ActionTxKey>,
  'transactionsPool' | 'updateTxParams' | 'onSucceedCallbacks' | 'removeTxFromPool'
> & {
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
      if (onSucceedCallbacks) {
        onSucceedCallbacks(updatedTX);
      }
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
