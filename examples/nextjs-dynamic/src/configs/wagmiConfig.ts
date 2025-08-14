import { Draft } from 'immer';
import { Chain } from 'viem';
import { mainnet, sepolia } from 'viem/chains';
import { createConfig, http } from 'wagmi';

// Your dApps chains
export const appChains = [mainnet, sepolia] as unknown as Draft<Chain[]>;

export const config = createConfig({
  chains: [mainnet, ...appChains.slice(1)],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
  },
  ssr: true,
});
