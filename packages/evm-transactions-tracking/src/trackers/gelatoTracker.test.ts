/**
 * @file Unit tests for the Gelato transaction tracker.
 * This file tests both the low-level fetcher (`fetchTxFromGelatoAPI`) and the high-level tracker functions.
 * @vitest-environment jsdom
 */

import { initializePollingTracker } from '@tuwa/web3-transactions-tracking-core/dist';
import dayjs from 'dayjs';
import { zeroHash } from 'viem';
import { sepolia } from 'viem/chains';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  fetchTxFromGelatoAPI,
  GelatoTaskState,
  GelatoTaskStatusResponse,
  gelatoTracker,
  GelatoTrackerParams,
} from './gelatoTracker';

// Mock the core polling utility to isolate the gelatoTracker logic.
vi.mock('@tuwa/web3-transactions-tracking-core/dist', () => ({
  initializePollingTracker: vi.fn(),
}));

// Helper to create a mock API response from Gelato.
const createMockResponse = (status: GelatoTaskState, creationDate?: string): GelatoTaskStatusResponse => ({
  task: {
    chainId: sepolia.id,
    taskId: '0x123',
    taskState: status,
    creationDate: creationDate || dayjs().toISOString(),
    executionDate: dayjs().add(5, 'm').toISOString(),
    transactionHash: zeroHash,
  },
});

describe('gelatoTracker', () => {
  it('should call initializePollingTracker with the correct fetcher and parameters', async () => {
    const mockTx = { txKey: '0x123', pending: true };
    const mockParams: GelatoTrackerParams = {
      tx: mockTx,
      onSucceed: vi.fn(),
      onFailed: vi.fn(),
    };

    await gelatoTracker(mockParams);

    // Verify that the main polling function is called.
    expect(initializePollingTracker).toHaveBeenCalledOnce();
    // Verify that it's configured with the correct fetcher function and passes other params through.
    expect(vi.mocked(initializePollingTracker).mock.calls[0][0]).toEqual(
      expect.objectContaining({
        ...mockParams,
        fetcher: fetchTxFromGelatoAPI,
      }),
    );
  });
});

describe('fetchTxFromGelatoAPI', () => {
  const mockFetcherParams = {
    tx: { txKey: '0x123' },
    onSucceed: vi.fn(),
    onFailed: vi.fn(),
    onIntervalTick: vi.fn(),
    clearWatch: vi.fn(),
  };

  beforeEach(() => {
    // Mock the global fetch function before each test.
    global.fetch = vi.fn();
  });

  afterEach(() => {
    // Clear all mocks after each test.
    vi.clearAllMocks();
  });

  it('should call onSucceed and clearWatch when task state is ExecSuccess', async () => {
    const mockResponse = createMockResponse(GelatoTaskState.ExecSuccess);
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    } as Response);

    await fetchTxFromGelatoAPI(mockFetcherParams);

    expect(mockFetcherParams.onSucceed).toHaveBeenCalledWith(mockResponse);
    expect(mockFetcherParams.clearWatch).toHaveBeenCalledWith(true);
    expect(mockFetcherParams.onFailed).not.toHaveBeenCalled();
  });

  it('should call onFailed and clearWatch when task state is ExecReverted', async () => {
    const mockResponse = createMockResponse(GelatoTaskState.ExecReverted);
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    } as Response);

    await fetchTxFromGelatoAPI(mockFetcherParams);

    expect(mockFetcherParams.onFailed).toHaveBeenCalledWith(mockResponse);
    expect(mockFetcherParams.clearWatch).toHaveBeenCalledWith(true);
    expect(mockFetcherParams.onSucceed).not.toHaveBeenCalled();
  });

  it('should only call onIntervalTick for pending states', async () => {
    const mockResponse = createMockResponse(GelatoTaskState.ExecPending);
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    } as Response);

    await fetchTxFromGelatoAPI(mockFetcherParams);

    expect(mockFetcherParams.onIntervalTick).toHaveBeenCalledWith(mockResponse);
    expect(mockFetcherParams.clearWatch).not.toHaveBeenCalled();
    expect(mockFetcherParams.onSucceed).not.toHaveBeenCalled();
    expect(mockFetcherParams.onFailed).not.toHaveBeenCalled();
  });

  it('should call clearWatch if a task has been pending for more than a day', async () => {
    const oldCreationDate = dayjs().subtract(2, 'day').toISOString();
    const mockResponse = createMockResponse(GelatoTaskState.ExecPending, oldCreationDate);
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    } as Response);

    await fetchTxFromGelatoAPI(mockFetcherParams);

    expect(mockFetcherParams.clearWatch).toHaveBeenCalledWith(); // Called without `true` to remove from pool
  });

  it('should not call any callbacks if the fetch response is not ok', async () => {
    vi.mocked(fetch).mockResolvedValue({ ok: false } as Response);

    await fetchTxFromGelatoAPI(mockFetcherParams);

    expect(mockFetcherParams.onIntervalTick).not.toHaveBeenCalled();
    expect(mockFetcherParams.onSucceed).not.toHaveBeenCalled();
    expect(mockFetcherParams.onFailed).not.toHaveBeenCalled();
    expect(mockFetcherParams.clearWatch).not.toHaveBeenCalled();
  });
});
