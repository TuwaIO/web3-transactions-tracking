import { zeroHash } from 'viem';
import { sepolia } from 'viem/chains';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { evmTracker, EVMTrackerParams } from './evmTracker';

vi.mock('./evmTracker', { spy: true });

describe('Testing ethereumTracker function', () => {
  let evmTrackerParams: EVMTrackerParams;

  beforeEach(() => {
    evmTrackerParams = {
      onInitialize: vi.fn(),
      onFinished: vi.fn(),
      onFailed: vi.fn(),
      onReplaced: vi.fn(),
      tx: {
        txKey: '0x0908f7a70a9f8acd9ced904f4e288bc46ae42923ce82bde706b26fdb8452abec',
        chainId: sepolia.id,
      },
      chains: [sepolia],
      retryCount: 1,
    };
  });

  test('It should call onInitialize initially', async () => {
    await vi.mocked(evmTracker(evmTrackerParams));
    expect(evmTrackerParams.onInitialize).toBeCalledTimes(1);
  });

  test('It should call onFinished if the transaction is successful', async () => {
    await vi.mocked(evmTracker(evmTrackerParams));
    expect(evmTrackerParams.onFinished).toBeCalledTimes(1);
  });

  test('It should call onFinished if the transaction is fail', async () => {
    await vi.mocked(
      evmTracker({
        ...evmTrackerParams,
        tx: {
          ...evmTrackerParams.tx,
          txKey: '0x2a429e307a27fcbe7ae8379d80c8de0162a1b8ff3403f517f17352a4c8771654',
        },
      }),
    );
    expect(evmTrackerParams.onFinished).toBeCalledTimes(1);
  });

  test('If a transaction get any error before initialize onchain, it should call onFailed', async () => {
    await vi.mocked(
      evmTracker({
        ...evmTrackerParams,
        tx: {
          ...evmTrackerParams.tx,
          txKey: zeroHash,
        },
      }),
    );
    expect(evmTrackerParams.onFailed).toBeCalledTimes(1);
  }, 100000);
});
