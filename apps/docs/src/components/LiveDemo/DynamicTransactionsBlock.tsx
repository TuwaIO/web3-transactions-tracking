'use client';

import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { mainnet } from 'viem/chains';
import { createConfig, http, WagmiProvider } from 'wagmi';

import { TransactionsBlockWrapper } from '@/components/LiveDemo/TransactionsBlockWrapper';
import { appChains } from '@/configs/wagmiConfig';

const queryClient = new QueryClient();

const config = createConfig({
  chains: [mainnet, ...appChains.slice(1)],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
  },
});

export const DynamicTransactionsBlock = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <DynamicContextProvider
          settings={{
            environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID ?? '',
            walletConnectors: [EthereumWalletConnectors],
          }}
        >
          <DynamicWagmiConnector>
            <TransactionsBlockWrapper config={config} connectButton={<DynamicWidget />} />
          </DynamicWagmiConnector>
        </DynamicContextProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
