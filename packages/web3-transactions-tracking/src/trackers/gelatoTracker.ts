import dayjs from 'dayjs';
import { Hex } from 'viem';

import { initializePollingTracker } from '../helpers/initializePollingTracker';
import { ITxTrackingStore } from '../store/txTrackingStore';
import { ActionTxKey, TrackerParams, Transaction, TransactionStatus } from '../types';

export type GelatoTxKey = {
  taskId: string;
};

export function isGelatoTxKey(txKey: ActionTxKey): txKey is GelatoTxKey {
  return (txKey as GelatoTxKey).taskId !== undefined;
}

enum GelatoTaskState {
  CheckPending = 'CheckPending',
  ExecPending = 'ExecPending',
  WaitingForConfirmation = 'WaitingForConfirmation',
  ExecSuccess = 'ExecSuccess',
  ExecReverted = 'ExecReverted',
  Cancelled = 'Cancelled',
}

type GelatoTaskStatusResponse = {
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

type GelatoTrackerParams<T extends Transaction> = Omit<TrackerParams<T>, 'chains' | 'onFailed'> & {
  onSucceed: (gelatoResponse: GelatoTaskStatusResponse) => void;
  onFailed: (gelatoResponse: GelatoTaskStatusResponse) => void;
  onIntervalTick?: (gelatoResponse: GelatoTaskStatusResponse) => void;
  removeTxFromPool?: (taskId: string) => void;
};

function isGelatoTxPending(gelatoStatus?: GelatoTaskState) {
  return (
    gelatoStatus === undefined ||
    gelatoStatus === GelatoTaskState.CheckPending ||
    gelatoStatus === GelatoTaskState.ExecPending ||
    gelatoStatus === GelatoTaskState.WaitingForConfirmation
  );
}

async function fetchTxFromGelatoAPI<T extends Transaction>({
  txKey,
  onSucceed,
  onFailed,
  onIntervalTick,
  clearWatch,
}: {
  txKey: string;
  clearWatch: (withoutRemoving?: boolean) => void;
} & Pick<GelatoTrackerParams<T>, 'onIntervalTick' | 'onSucceed' | 'onFailed'>) {
  const response = await fetch(`https://api.gelato.digital/tasks/status/${txKey}/`);

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

export async function gelatoTracker<T extends Transaction>({
  onInitialize,
  onSucceed,
  onFailed,
  onIntervalTick,
  removeTxFromPool,
  tx,
}: GelatoTrackerParams<T>) {
  await initializePollingTracker({
    onInitialize,
    onSucceed,
    onFailed,
    onIntervalTick,
    removeTxFromPool,
    tx,
    fetcher: fetchTxFromGelatoAPI<T>,
  });
}

export async function gelatoTrackerForStore<T extends Transaction>({
  tx,
  transactionsPool,
  updateTxParams,
  onSucceedCallbacks,
  removeTxFromPool,
}: Pick<GelatoTrackerParams<T>, 'tx' | 'removeTxFromPool'> &
  Pick<ITxTrackingStore<T>, 'transactionsPool' | 'updateTxParams' | 'onSucceedCallbacks'>) {
  return await gelatoTracker<T>({
    tx,
    removeTxFromPool,
    onSucceed: async (gelatoResponse) => {
      updateTxParams({
        txKey: tx.txKey,
        status: TransactionStatus.Success,
        pending: false,
        hash: gelatoResponse.task.transactionHash,
        finishedTimestamp: gelatoResponse.task.executionDate
          ? dayjs(gelatoResponse.task.executionDate).unix()
          : undefined,
      });
      const updatedTX = transactionsPool[tx.txKey];
      onSucceedCallbacks(updatedTX);
    },
    onIntervalTick: async (gelatoResponse) => {
      const pending = isGelatoTxPending(gelatoResponse.task.taskState);
      const status =
        gelatoResponse.task.taskState === 'ExecSuccess'
          ? TransactionStatus.Success
          : pending
            ? undefined
            : TransactionStatus.Reverted;

      updateTxParams(
        {
          status,
          pending,
          txKey: tx.txKey,
          hash: gelatoResponse.task.transactionHash,
          finishedTimestamp: gelatoResponse.task.executionDate
            ? dayjs(gelatoResponse.task.executionDate).unix()
            : undefined,
          errorMessage:
            gelatoResponse.task.taskState > GelatoTaskState.WaitingForConfirmation
              ? gelatoResponse.task.lastCheckMessage
              : undefined,
          isError: !pending && status !== TransactionStatus.Success,
        },
        true,
      );
    },
    onFailed: (gelatoResponse) => {
      updateTxParams({
        txKey: tx.txKey,
        status: TransactionStatus.Failed,
        pending: false,
        isError: true,
        hash: gelatoResponse.task.transactionHash,
        errorMessage: gelatoResponse.task.lastCheckMessage,
        finishedTimestamp: gelatoResponse.task.executionDate
          ? dayjs(gelatoResponse.task.executionDate).unix()
          : undefined,
      });
    },
  });
}
