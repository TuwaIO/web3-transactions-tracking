/**
 * @file Unit tests for the Safe transaction tracker.
 * This file tests the core fetcher logic (`fetchTxFromSafeAPI`) by mocking the Safe Transaction Service API responses.
 * @vitest-environment jsdom
 */

import { initializePollingTracker } from '@tuwa/web3-transactions-tracking-core';
import dayjs from 'dayjs';
import { zeroAddress, zeroHash } from 'viem';
import { sepolia } from 'viem/chains';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { fetchTxFromSafeAPI, safeTracker, SafeTrackerParams, SafeTxStatusResponse } from './safeTracker';

// Mock the core polling utility to isolate the tracker's logic.
vi.mock('@tuwa/web3-transactions-tracking-core/dist', () => ({
  initializePollingTracker: vi.fn(),
}));

// --- Test Data and Helpers ---

const mockTx = {
  txKey: '0x91d23240ffbf66a85d3e6057ca9d7826b47de1095a0e85f3d65a113ddfe48ee9',
  from: zeroAddress,
  chainId: sepolia.id,
};

const createMockSafeResponse = (overrides: Partial<SafeTxStatusResponse> = {}): SafeTxStatusResponse => ({
  transactionHash: zeroHash,
  safeTxHash: mockTx.txKey,
  isExecuted: false,
  isSuccessful: null,
  submissionDate: dayjs().toISOString(),
  executionDate: null,
  modified: dayjs().toISOString(),
  nonce: 1,
  ...overrides,
});

describe('safeTracker', () => {
  it('should call initializePollingTracker with the correct fetcher and parameters', async () => {
    const mockParams: SafeTrackerParams = {
      tx: mockTx,
      onSucceed: vi.fn(),
      onFailed: vi.fn(),
    };

    await safeTracker(mockParams);

    // Verify that the main polling function is called with the correct fetcher.
    expect(initializePollingTracker).toHaveBeenCalledOnce();
    expect(vi.mocked(initializePollingTracker).mock.calls[0][0]).toEqual(
      expect.objectContaining({
        ...mockParams,
        fetcher: fetchTxFromSafeAPI,
      }),
    );
  });
});

describe('fetchTxFromSafeAPI', () => {
  const mockFetcherParams = {
    tx: mockTx,
    onSucceed: vi.fn(),
    onFailed: vi.fn(),
    onReplaced: vi.fn(),
    onIntervalTick: vi.fn(),
    clearWatch: vi.fn(),
  };

  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should call onSucceed when the transaction is executed and successful', async () => {
    const primaryResponse = createMockSafeResponse({ isExecuted: true, isSuccessful: true });
    const nonceResponse = { count: 1, results: [primaryResponse] };

    // Mock both fetch calls
    vi.mocked(fetch)
      .mockResolvedValueOnce({ ok: true, json: async () => primaryResponse } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => nonceResponse } as Response);

    await fetchTxFromSafeAPI(mockFetcherParams);

    expect(mockFetcherParams.onSucceed).toHaveBeenCalledWith(primaryResponse);
    expect(mockFetcherParams.clearWatch).toHaveBeenCalledWith(true);
  });

  it('should call onFailed when the transaction is executed and failed', async () => {
    const primaryResponse = createMockSafeResponse({ isExecuted: true, isSuccessful: false });
    const nonceResponse = { count: 1, results: [primaryResponse] };

    vi.mocked(fetch)
      .mockResolvedValueOnce({ ok: true, json: async () => primaryResponse } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => nonceResponse } as Response);

    await fetchTxFromSafeAPI(mockFetcherParams);

    expect(mockFetcherParams.onFailed).toHaveBeenCalledWith(primaryResponse);
    expect(mockFetcherParams.clearWatch).toHaveBeenCalledWith(true);
  });

  it('should call onReplaced when another transaction with the same nonce is executed', async () => {
    const primaryResponse = createMockSafeResponse({ isExecuted: false }); // Our tx is pending
    const replacedTxHash = '0xREPLACED';
    const executedTx = createMockSafeResponse({ isExecuted: true, isSuccessful: true, safeTxHash: replacedTxHash });
    const nonceResponse = { count: 2, results: [primaryResponse, executedTx] };

    vi.mocked(fetch)
      .mockResolvedValueOnce({ ok: true, json: async () => primaryResponse } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => nonceResponse } as Response);

    await fetchTxFromSafeAPI(mockFetcherParams);

    expect(mockFetcherParams.onReplaced).toHaveBeenCalledWith({ ...primaryResponse, replacedHash: replacedTxHash });
    expect(mockFetcherParams.clearWatch).toHaveBeenCalledWith(true);
  });

  it('should only call onIntervalTick when the transaction is still pending', async () => {
    const primaryResponse = createMockSafeResponse({ isExecuted: false });
    const nonceResponse = { count: 1, results: [primaryResponse] };

    vi.mocked(fetch)
      .mockResolvedValueOnce({ ok: true, json: async () => primaryResponse } as Response)
      .mockResolvedValueOnce({ ok: true, json: async () => nonceResponse } as Response);

    await fetchTxFromSafeAPI(mockFetcherParams);

    expect(mockFetcherParams.onIntervalTick).toHaveBeenCalledWith(primaryResponse);
    expect(mockFetcherParams.clearWatch).not.toHaveBeenCalled();
    expect(mockFetcherParams.onSucceed).not.toHaveBeenCalled();
    expect(mockFetcherParams.onFailed).not.toHaveBeenCalled();
  });

  it('should not proceed if the primary fetch fails', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({ ok: false } as Response);

    await fetchTxFromSafeAPI(mockFetcherParams);

    // Expect the second fetch to not even be called
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(mockFetcherParams.onIntervalTick).not.toHaveBeenCalled();
  });
});
