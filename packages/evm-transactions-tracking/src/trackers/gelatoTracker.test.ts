/**
 * @vitest-environment jsdom
 */

import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import dayjs from 'dayjs';
import { zeroHash } from 'viem';
import { sepolia } from 'viem/chains';
import { describe, expect, it, vi } from 'vitest';

import { TransactionTracker } from '../types';
import { GelatoTaskState, GelatoTaskStatusResponse, gelatoTracker, GelatoTrackerParams } from './gelatoTracker';

const createMockResponse = ({
  taskId,
  status,
  executionDate,
  lastCheckMessage,
}: {
  taskId: string;
  status: GelatoTaskState;
  executionDate?: string;
  lastCheckMessage?: string;
}): GelatoTaskStatusResponse => {
  return {
    task: {
      chainId: sepolia.id,
      taskId,
      taskState: status,
      creationDate: dayjs().unix().toString(),
      executionDate: executionDate ? executionDate : dayjs().add(5, 'm').unix().toString(),
      transactionHash: zeroHash,
      lastCheckMessage,
    },
  };
};

const createMockTransaction = (
  txKey?: string,
  pending?: boolean,
): Pick<Transaction<TransactionTracker>, 'txKey'> & { pending?: boolean } => {
  return { txKey: txKey ?? '0x8c1f0b04fb55c528a46c1497b80121644819a0ca6622faba1aa3b942415d3122', pending };
};

const mockParams: Omit<GelatoTrackerParams, 'tx'> = {
  onSucceed: vi.fn(),
  onFailed: vi.fn(),
  onIntervalTick: vi.fn(),
  removeTxFromPool: vi.fn(),
  onInitialize: vi.fn(),
};

describe('gelatoTracker', () => {
  it('calls onInitialize when called', async () => {
    await gelatoTracker({
      tx: createMockTransaction(undefined, true),
      ...mockParams,
    });
    expect(mockParams.onInitialize).toBeCalledTimes(1);
  });

  it('handles onSuccess events', async () => {
    const tx = createMockTransaction(undefined, true);
    await gelatoTracker({
      tx,
      ...mockParams,
    });
    const mockResponse = createMockResponse({
      taskId: tx.txKey,
      status: GelatoTaskState.ExecSuccess,
    });
    mockParams.onSucceed(mockResponse);
    expect(mockParams.onSucceed).toBeCalledWith(mockResponse);
  });

  it('handles onFailed events', async () => {
    const taskId = '0xb5d6aca947112f1a377838fa061a1f148442d9ecc73106f72e1cf37f15bd4a9e';

    await gelatoTracker({
      tx: createMockTransaction(taskId, true),
      ...mockParams,
    });
    const mockResponse = createMockResponse({
      taskId: taskId,
      status: GelatoTaskState.ExecReverted,
    });
    mockParams.onFailed(mockResponse);
    expect(mockParams.onFailed).toBeCalledWith(mockResponse);
  });

  it('handles onIntervalTick events', async () => {
    const tx = createMockTransaction(undefined, true);

    await gelatoTracker({
      tx,
      ...mockParams,
    });
    const mockResponse = createMockResponse({
      taskId: tx.txKey,
      status: GelatoTaskState.ExecSuccess,
    });
    if (mockParams.onIntervalTick) {
      mockParams.onIntervalTick(mockResponse);
      expect(mockParams.onIntervalTick).toBeCalledWith(mockResponse);
    }
  });

  it('calls removeTxFromPool when event occurs', async () => {
    const tx = createMockTransaction(undefined, true);

    await gelatoTracker({
      tx,
      ...mockParams,
    });
    if (mockParams.removeTxFromPool) {
      mockParams.removeTxFromPool(tx.txKey);
      expect(mockParams.removeTxFromPool).toBeCalledWith(tx.txKey);
    }
  });
});
