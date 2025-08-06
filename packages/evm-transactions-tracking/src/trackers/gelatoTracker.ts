import {
  InitializePollingTracker,
  initializePollingTracker,
  ITxTrackingStore,
  Transaction,
  TransactionStatus,
} from '@tuwa/web3-transactions-tracking-core/dist';
import { Config } from '@wagmi/core';
import dayjs from 'dayjs';
import { Hex } from 'viem';

import { ActionTxKey, TransactionTracker } from '../types';

export type GelatoTxKey = {
  taskId: string;
};

export function isGelatoTxKey(txKey: ActionTxKey): txKey is GelatoTxKey {
  return (txKey as GelatoTxKey).taskId !== undefined;
}

export enum GelatoTaskState {
  CheckPending = 'CheckPending',
  ExecPending = 'ExecPending',
  WaitingForConfirmation = 'WaitingForConfirmation',
  ExecSuccess = 'ExecSuccess',
  ExecReverted = 'ExecReverted',
  Cancelled = 'Cancelled',
}

export type GelatoTaskStatusResponse = {
  task: {
    chainId: number;
    taskId: string;
    taskState: GelatoTaskState;
    creationDate?: string;
    executionDate?: string;
    transactionHash?: Hex;
    blockNumber?: number;
    lastCheckMessage?: string;
  };
};

type InitialGelatoTx = Pick<Transaction<TransactionTracker>, 'txKey'> & {
  pending?: boolean;
};

export type GelatoTrackerParams = Pick<
  InitializePollingTracker<GelatoTaskStatusResponse, InitialGelatoTx, TransactionTracker>,
  | 'tx'
  | 'removeTxFromPool'
  | 'onInitialize'
  | 'onSucceed'
  | 'onFailed'
  | 'onIntervalTick'
  | 'pollingInterval'
  | 'retryCount'
>;

function isGelatoTxPending(gelatoStatus?: GelatoTaskState) {
  return (
    gelatoStatus === undefined ||
    gelatoStatus === GelatoTaskState.CheckPending ||
    gelatoStatus === GelatoTaskState.ExecPending ||
    gelatoStatus === GelatoTaskState.WaitingForConfirmation
  );
}

export async function fetchTxFromGelatoAPI({
  tx,
  onSucceed,
  onFailed,
  onIntervalTick,
  clearWatch,
}: {
  clearWatch: (withoutRemoving?: boolean) => void;
} & Pick<GelatoTrackerParams, 'onIntervalTick' | 'onSucceed' | 'onFailed' | 'tx'>) {
  const response = await fetch(`https://api.gelato.digital/tasks/status/${tx.txKey}/`);

  if (response.ok) {
    const gelatoStatus = (await response.json()) as GelatoTaskStatusResponse;
    const isPending = isGelatoTxPending(gelatoStatus.task.taskState);

    if (gelatoStatus.task.creationDate) {
      const gelatoCreatedData = dayjs(gelatoStatus.task.creationDate);
      const currentTime = dayjs();
      const daysPassed = currentTime.diff(gelatoCreatedData, 'day');
      if (daysPassed >= 1 && isPending) {
        clearWatch();
        return response;
      }
    }

    if (onIntervalTick) {
      onIntervalTick(gelatoStatus);
    }

    if (!isPending) {
      clearWatch(true);
      if (gelatoStatus.task.taskState === 'ExecSuccess') {
        onSucceed(gelatoStatus);
      } else if (gelatoStatus.task.taskState > GelatoTaskState.WaitingForConfirmation) {
        onFailed(gelatoStatus);
      }
    }
  }

  return response;
}

/**
 * Tracks the progress of a Gelato (https://www.gelato.network/) transaction.
 *
 * @param {Object} params - The parameters for the Gelato tracker.
 * @param {Function} params.onInitialize - Callback function to execute on initialization.
 * @param {Function} params.onSucceed - Callback function to execute when the transaction succeeds.
 * @param {Function} params.onFailed - Callback function to execute when the transaction fails.
 * @param {Function} params.onIntervalTick - Callback function to execute on each interval tick.
 * @param {Function} params.removeTxFromPool - Function to remove transaction from the pool.
 * @param {Object} params.tx - The transaction to track.
 * @param {Object} [params.rest] - Extra parameters to pass to the tracker.
 *
 * @return {Promise} - A promise that resolves when the tracking is complete.
 */
export async function gelatoTracker({
  onInitialize,
  onSucceed,
  onFailed,
  onIntervalTick,
  removeTxFromPool,
  tx,
  ...rest
}: GelatoTrackerParams) {
  await initializePollingTracker({
    onInitialize,
    onSucceed,
    onFailed,
    onIntervalTick,
    removeTxFromPool,
    tx,
    fetcher: fetchTxFromGelatoAPI,
    ...rest,
  });
}

export async function gelatoTrackerForStore<T extends Transaction<TransactionTracker>>({
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
  return await gelatoTracker({
    tx,
    removeTxFromPool,
    onSucceed: async (response) => {
      updateTxParams({
        txKey: tx.txKey,
        status: TransactionStatus.Success,
        pending: false,
        hash: response.task.transactionHash,
        finishedTimestamp: response.task.executionDate ? dayjs(response.task.executionDate).unix() : undefined,
      });
      const updatedTX = transactionsPool[tx.txKey];
      if (onSucceedCallbacks) {
        onSucceedCallbacks(updatedTX);
      }
    },
    onIntervalTick: async (response) => {
      const pending = isGelatoTxPending(response.task.taskState);
      const status =
        response.task.taskState === 'ExecSuccess'
          ? TransactionStatus.Success
          : pending
            ? undefined
            : TransactionStatus.Reverted;

      updateTxParams(
        {
          status,
          pending,
          txKey: tx.txKey,
          hash: response.task.transactionHash,
          finishedTimestamp: response.task.executionDate ? dayjs(response.task.executionDate).unix() : undefined,
          errorMessage:
            response.task.taskState > GelatoTaskState.WaitingForConfirmation
              ? response.task.lastCheckMessage
              : undefined,
          isError: !pending && status !== TransactionStatus.Success,
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
        hash: response.task.transactionHash,
        errorMessage: response.task.lastCheckMessage,
        finishedTimestamp: response.task.executionDate ? dayjs(response.task.executionDate).unix() : undefined,
      });
    },
  });
}
