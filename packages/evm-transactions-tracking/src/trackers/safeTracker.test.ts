/**
 * @vitest-environment jsdom
 */

import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';
import dayjs from 'dayjs';
import { zeroAddress, zeroHash } from 'viem';
import { sepolia } from 'viem/chains';
import { describe, expect, it, vi } from 'vitest';

import { TransactionTracker } from '../types';
import { safeTracker, SafeTrackerParams, SafeTxStatusResponse } from './safeTracker';

const initialSafeTxHash = '0x91d23240ffbf66a85d3e6057ca9d7826b47de1095a0e85f3d65a113ddfe48ee9';

const createMockResponse = ({
  safeTxHash,
  isExecuted,
  isSuccessful,
  replacedHash,
  executionDate,
}: {
  safeTxHash: string;
  isExecuted: boolean;
  isSuccessful: boolean;
  executionDate?: string;
  replacedHash?: string;
}): SafeTxStatusResponse => {
  return {
    transactionHash: zeroHash,
    safeTxHash: safeTxHash ?? initialSafeTxHash,
    isExecuted,
    isSuccessful,
    submissionDate: dayjs().unix().toString(),
    executionDate: executionDate ? executionDate : dayjs().add(5, 'm').unix().toString(),
    modified: '',
    nonce: 1,
    replacedHash,
  };
};

const createMockTransaction = (
  txKey?: string,
  pending?: boolean,
): Pick<Transaction<TransactionTracker>, 'txKey' | 'from' | 'chainId'> & { pending?: boolean } => {
  return {
    chainId: sepolia.id,
    txKey: txKey ?? initialSafeTxHash,
    pending: pending ? pending : true,
    from: zeroAddress,
  };
};

const mockParams: Omit<SafeTrackerParams, 'tx'> = {
  onSucceed: vi.fn(),
  onFailed: vi.fn(),
  onIntervalTick: vi.fn(),
  removeTxFromPool: vi.fn(),
  onInitialize: vi.fn(),
  onReplaced: vi.fn(),
  pollingInterval: 1000,
  retryCount: 1,
};

describe('safeTracker', () => {
  it('calls onInitialize when called', async () => {
    await safeTracker({
      tx: createMockTransaction(),
      ...mockParams,
    });
    expect(mockParams.onInitialize).toBeCalledTimes(1);
  });

  it('handles onSuccess events', async () => {
    const tx = createMockTransaction();
    await safeTracker({
      tx,
      ...mockParams,
    });
    const mockResponse = createMockResponse({
      safeTxHash: tx.txKey,
      isExecuted: true,
      isSuccessful: true,
    });
    mockParams.onSucceed(mockResponse);
    expect(mockParams.onSucceed).toBeCalledWith(mockResponse);
  });

  it('handles onFailed events', async () => {
    const safeTxHash = '0x56f9620f2196ef5b94ba0c270a290464eafc951047dd0b4e5446dbb0c8e26585';

    await safeTracker({
      tx: createMockTransaction(safeTxHash),
      ...mockParams,
    });
    const mockResponse = createMockResponse({
      safeTxHash,
      isSuccessful: false,
      isExecuted: true,
    });
    mockParams.onFailed(mockResponse);
    expect(mockParams.onFailed).toBeCalledWith(mockResponse);
  });

  it('handles onIntervalTick events', async () => {
    const tx = createMockTransaction();

    await safeTracker({
      tx,
      ...mockParams,
    });
    const mockResponse = createMockResponse({
      safeTxHash: tx.txKey,
      isExecuted: true,
      isSuccessful: true,
    });
    if (mockParams.onIntervalTick) {
      mockParams.onIntervalTick(mockResponse);
      expect(mockParams.onIntervalTick).toBeCalledWith(mockResponse);
    }
  });

  it('calls removeTxFromPool when event occurs', async () => {
    const tx = createMockTransaction();

    await safeTracker({
      tx,
      ...mockParams,
    });
    if (mockParams.removeTxFromPool) {
      mockParams.removeTxFromPool(tx.txKey);
      expect(mockParams.removeTxFromPool).toBeCalledWith(tx.txKey);
    }
  });

  it('calls onReplaced when event occurs', async () => {
    const tx = createMockTransaction();

    await safeTracker({
      tx,
      ...mockParams,
    });
    const mockResponse = createMockResponse({
      safeTxHash: tx.txKey,
      isExecuted: true,
      isSuccessful: true,
      replacedHash: '0x56f9620f2196ef5b94ba0c270a290464eafc951047dd0b4e5446dbb0c8e26585',
    });
    if (mockParams.onReplaced) {
      mockParams.onReplaced(mockResponse);
      expect(mockParams.onReplaced).toBeCalledWith(mockResponse);
    }
  });
});
