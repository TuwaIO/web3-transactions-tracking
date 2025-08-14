'use client';

import { ConnectButton, getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { mainnet } from 'viem/chains';
import { WagmiProvider } from 'wagmi';

import { TransactionsBlockWrapper } from '@/components/LiveDemo/TransactionsBlockWrapper';
import { appChains } from '@/configs/wagmiConfig';

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: 'TUWA docs',
  projectId: process.env.NEXT_PUBLIC_WALLET_PROJECT_ID ?? '',
  chains: [mainnet, ...appChains.slice(1)],
  ssr: true,
});

export const RainbowKitTransactionsBlock = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <TransactionsBlockWrapper config={config} connectButton={<ConnectButton />} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
