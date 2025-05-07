import { zeroHash } from 'viem';

import { initializePollingTracker } from '../utils/initializePollingTracker';
import { gelatoTracker, GelatoTrackerParams } from './gelatoTracker';

jest.mock('../utils/initializePollingTracker');

describe('gelatoTracker', () => {
  it('initializes the polling tracker with the correct parameters', async () => {
    const mockInitializePollingTracker = initializePollingTracker as jest.MockedFunction<
      typeof initializePollingTracker
    >;

    const gelatoTrackerParams: GelatoTrackerParams = {
      onInitialize: jest.fn(),
      onSucceed: jest.fn(),
      onFailed: jest.fn(),
      onIntervalTick: jest.fn(),
      removeTxFromPool: jest.fn(),
      tx: {
        txKey: zeroHash,
      },
    };

    await gelatoTracker(gelatoTrackerParams);

    expect(mockInitializePollingTracker).toBeCalledWith({
      ...gelatoTrackerParams,
      fetcher: expect.any(Function),
    });
  });
});
