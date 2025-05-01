import { Config, writeContract } from '@wagmi/core';
import { sepolia } from 'viem/chains';

import { CounterAbi } from '@/abis/CounterAbi';
import { COUNTER_ADDRESS } from '@/components/TransactionsBlock';

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
