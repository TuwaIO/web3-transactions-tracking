'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitButton, ConnectKitProvider, getDefaultConfig as GDCCK } from 'connectkit';
import React from 'react';
import { mainnet } from 'viem/chains';
import { createConfig, http, WagmiProvider } from 'wagmi';

import { TransactionsBlockWrapper } from '@/components/LiveDemo/TransactionsBlockWrapper';
import { appChains } from '@/configs/wagmiConfig';

const queryClient = new QueryClient();

export const config = createConfig(
  GDCCK({
    chains: appChains,
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`),
    },

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_PROJECT_ID ?? '',

    // Required App Info
    appName: 'TUWA docs',

    // Optional App Info
    appDescription: 'TUWA docs',
    appUrl: 'https://docs.tuwa.io/', // your app's url
    appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB) TODO
    ssr: true,
  }),
);

export const ConnectKitTransactionsBlock = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          <TransactionsBlockWrapper config={config} connectButton={<ConnectKitButton />} />
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
