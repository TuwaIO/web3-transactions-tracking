import dayjs from 'dayjs';
import { Hex } from 'viem';

import { ITxTrackingStore } from '../store/txTrackingStore';
import { ActionTxKey, Transaction, TransactionStatus } from '../types';
import { initializePollingTracker } from '../utils/initializePollingTracker';

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

export type GelatoTrackerParams = {
  onSucceed: (gelatoResponse: GelatoTaskStatusResponse) => void;
  onFailed: (gelatoResponse: GelatoTaskStatusResponse) => void;
  onIntervalTick?: (gelatoResponse: GelatoTaskStatusResponse) => void;
  removeTxFromPool?: (taskId: string) => void;
  onInitialize?: () => void;
  tx: Pick<Transaction, 'txKey'> & {
    pending?: boolean;
  };
};

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

export async function gelatoTracker({
  onInitialize,
  onSucceed,
  onFailed,
  onIntervalTick,
  removeTxFromPool,
  tx,
}: GelatoTrackerParams) {
  await initializePollingTracker({
    onInitialize,
    onSucceed,
    onFailed,
    onIntervalTick,
    removeTxFromPool,
    tx,
    fetcher: fetchTxFromGelatoAPI,
  });
}

export async function gelatoTrackerForStore<T extends Transaction>({
  tx,
  transactionsPool,
  updateTxParams,
  onSucceedCallbacks,
  removeTxFromPool,
}: Pick<ITxTrackingStore<T>, 'transactionsPool' | 'updateTxParams' | 'onSucceedCallbacks' | 'removeTxFromPool'> & {
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
      onSucceedCallbacks(updatedTX);
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
