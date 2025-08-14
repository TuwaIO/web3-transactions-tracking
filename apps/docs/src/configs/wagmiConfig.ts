'use client';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { getDefaultConfig as GDCCK } from 'connectkit';
import { Draft } from 'immer';
import { Chain } from 'viem';
import { mainnet, sepolia } from 'viem/chains';
import { createConfig, http } from 'wagmi';

export const appChains = [mainnet, sepolia] as unknown as Draft<Chain[]>;

export const config = getDefaultConfig({
  appName: 'TUWA docs',
  projectId: process.env.NEXT_PUBLIC_WALLET_PROJECT_ID ?? '',
  chains: [mainnet, ...appChains.slice(1)],
  ssr: true,
});

export const configConnectKit = createConfig(
  GDCCK({
    chains: [mainnet, ...appChains.slice(1)],
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
    appUrl: 'https://docs.tuwa.co.ua/', // your app's url
    appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB) TODO
    ssr: true,
  }),
);
