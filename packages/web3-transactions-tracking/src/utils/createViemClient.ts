import { http } from '@wagmi/core';
import { Chain, Client, createClient } from 'viem';

/**
 * Creates a Viem client for a specific chain.
 *
 * @param {number} chainId - The ID of the chain for which the client is being created
 * @param {Chain[]} chains - An array of Chain objects containing chain information
 *
 * @return {Client | undefined} A Viem client object if the chain exists and client is successfully created, otherwise undefined
 */
export function createViemClient(chainId: number, chains: Chain[]): Client | undefined {
  const chain = chains.filter((chain) => chain.id === chainId);
  if (chain[0] !== undefined) {
    return createClient({
      chain: chain[0],
      transport: http(),
    });
  }
}
