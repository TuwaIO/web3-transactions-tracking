/**
 * @file Integration tests for the evmTracker function.
 * These tests interact with a live network (Sepolia) to verify the tracking of real transactions.
 * Note: These tests depend on the availability of the specified transaction hashes on the Sepolia testnet.
 */

import { zeroHash } from 'viem';
import { sepolia } from 'viem/chains';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { evmTracker, EVMTrackerParams } from './evmTracker';

// We are testing the actual implementation, so no need to mock the module.

describe('evmTracker Integration Tests', () => {
  let evmTrackerParams: EVMTrackerParams;

  // Set up a base configuration object before each test.
  beforeEach(() => {
    evmTrackerParams = {
      onInitialize: vi.fn(),
      onFinished: vi.fn(),
      onFailed: vi.fn(),
      onReplaced: vi.fn(),
      tx: {
        // A real, successful transaction hash on Sepolia.
        txKey: '0x0908f7a70a9f8acd9ced904f4e288bc46ae42923ce82bde706b26fdb8452abec',
        chainId: sepolia.id,
      },
      chains: [sepolia],
      retryCount: 1, // Use a single retry for faster test execution.
    };
  });

  test('should call onInitialize when the tracker starts', async () => {
    await evmTracker(evmTrackerParams);
    expect(evmTrackerParams.onInitialize).toHaveBeenCalledTimes(1);
  });

  test('should call onFinished for a successfully mined transaction', async () => {
    await evmTracker(evmTrackerParams);
    // onFinished is called when a receipt is successfully retrieved.
    expect(evmTrackerParams.onFinished).toHaveBeenCalledTimes(1);
  });

  test('should call onFinished even for a transaction that was mined but failed (reverted)', async () => {
    const paramsForFailedTx = {
      ...evmTrackerParams,
      tx: {
        ...evmTrackerParams.tx,
        // A real transaction hash on Sepolia that was mined but reverted.
        txKey: '0x2a429e307a27fcbe7ae8379d80c8de0162a1b8ff3403f517f17352a4c8771654',
      },
    };
    await evmTracker(paramsForFailedTx);
    // onFinished is expected because a receipt was found, even though the tx status is 'failed'.
    expect(paramsForFailedTx.onFinished).toHaveBeenCalledTimes(1);
  });

  test('should call onFailed if the transaction cannot be found after retries', async () => {
    const paramsForNotFoundTx = {
      ...evmTrackerParams,
      tx: {
        ...evmTrackerParams.tx,
        // A zero hash will not be found on the network.
        txKey: zeroHash,
      },
    };
    await evmTracker(paramsForNotFoundTx);
    // onFailed is called when `getTransaction` fails after all retries.
    expect(paramsForNotFoundTx.onFailed).toHaveBeenCalledTimes(1);
  }, 10000); // Increase timeout to allow for retry logic.

  // Suggestion for a future test case:
  test.todo('should call onReplaced when a transaction is replaced (sped up or cancelled)', async () => {
    // To test this, you would need to mock `viem/actions`.
    // The mock for `waitForTransactionReceipt` could be implemented to call its `onReplaced` callback.
    // Example:
    //
    // vi.mock('viem/actions', async () => {
    //   const original = await vi.importActual('viem/actions');
    //   return {
    //     ...original,
    //     waitForTransactionReceipt: vi.fn().mockImplementation(async (client, { onReplaced }) => {
    //       onReplaced({ transaction: { hash: '0xnewHash' }, reason: 'replaced' });
    //     }),
    //     getTransaction: vi.fn().mockResolvedValue({ hash: evmTrackerParams.tx.txKey }),
    //   };
    // });
    //
    // await evmTracker(evmTrackerParams);
    // expect(evmTrackerParams.onReplaced).toHaveBeenCalledTimes(1);
  });
});
