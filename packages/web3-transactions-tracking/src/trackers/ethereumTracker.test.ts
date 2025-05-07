import { mocked } from 'jest-mock';
import { ReplacementReturnType } from 'viem';
import { sepolia } from 'viem/chains';

import { ethereumTracker, EthereumTrackerParams } from './ethereumTracker';

jest.mock('./ethereumTracker', () => ({
  ethereumTracker: jest.fn(),
}));

describe('ethereumTracker function', () => {
  let ethereumTrackerParams: EthereumTrackerParams;
  let mockEthereumTracker: jest.Mock;

  beforeEach(() => {
    mockEthereumTracker = jest.fn();

    ethereumTrackerParams = {
      onInitialize: jest.fn(),
      onSucceed: jest.fn(),
      onFailed: jest.fn(),
      onReplaced: jest.fn(),
      tx: {
        txKey: '0x338979ab2128Ee68205fa032547BD72B8Ba7b8c5',
        chainId: sepolia.id,
      },
      chains: [sepolia],
    };

    mocked(ethereumTracker).mockImplementation(mockEthereumTracker);
  });

  test('calls onInitialize initially', async () => {
    await ethereumTracker(ethereumTrackerParams);
    expect(ethereumTrackerParams.onInitialize).toBeCalledTimes(1);
  });

  test('calls onSucceed when transaction is successful', async () => {
    await ethereumTracker(ethereumTrackerParams);
    expect(ethereumTrackerParams.onSucceed).toBeCalledTimes(1);
  });

  test('calls onFailed on transaction failure', async () => {
    mocked(ethereumTracker).mockRejectedValue(new Error('Transaction failed'));
    await ethereumTracker(ethereumTrackerParams);
    expect(ethereumTrackerParams.onFailed).toBeCalledWith(new Error('Transaction failed'));
  });

  test('calls onReplaced when a transaction is replaced', async () => {
    const mockReplacement: ReplacementReturnType | undefined = undefined;
    ethereumTrackerParams.onReplaced = jest.fn(() => mockReplacement);
    await ethereumTracker(ethereumTrackerParams);
    expect(ethereumTrackerParams.onReplaced).toBeCalledWith(mockReplacement);
  });
});
