import { Config, writeContract } from '@wagmi/core';
import { sepolia } from 'viem/chains';

import { COUNTER_ADDRESS } from '../../../constants';
import { CounterAbi } from '../../abis/CounterAbi';

export async function increment({ wagmiConfig }: { wagmiConfig?: Config }) {
  if (wagmiConfig) {
    return writeContract(wagmiConfig, {
      abi: CounterAbi,
      address: COUNTER_ADDRESS,
      functionName: 'increment',
      args: [],
      chainId: sepolia.id,
    });
  }
  return undefined;
}
