import { http } from '@wagmi/core';
import { Chain, createClient } from 'viem';

export function createViemClient(chainId: number, appChains: Chain[]) {
  const chain = appChains.filter((chain) => chain.id === chainId);
  if (chain[0] !== undefined) {
    return createClient({
      chain: chain[0],
      transport: http(),
    });
  }
}
