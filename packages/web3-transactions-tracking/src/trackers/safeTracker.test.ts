import { zeroAddress } from 'viem';
import { sepolia } from 'viem/chains';

import { safeTracker, SafeTrackerParams } from './safeTracker';

jest.mock('./safeTracker');

describe('safeTracker function', () => {
  it('should initialize and process tracking safely', async () => {
    const params: SafeTrackerParams = {
      onInitialize: jest.fn(),
      onReplaced: jest.fn(),
      onSucceed: jest.fn(),
      onFailed: jest.fn(),
      onIntervalTick: jest.fn(),
      removeTxFromPool: jest.fn(),
      tx: {
        txKey: '0x91d23240ffbf66a85d3e6057ca9d7826b47de1095a0e85f3d65a113ddfe48ee9',
        pending: false,
        from: zeroAddress,
        chainId: sepolia.id,
      },
    };

    await safeTracker(params);

    expect(params.onInitialize).toHaveBeenCalled();
    expect(params.onReplaced).toHaveBeenCalled();
    expect(params.onSucceed).toHaveBeenCalled();
    expect(params.onFailed).toHaveBeenCalled();
    expect(params.onIntervalTick).toHaveBeenCalled();
    expect(params.removeTxFromPool).toHaveBeenCalled();
  });
});
