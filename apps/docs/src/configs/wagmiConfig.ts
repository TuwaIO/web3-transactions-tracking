'use client';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { Draft } from 'immer';
import { Chain } from 'viem';
import { mainnet, sepolia } from 'viem/chains';

export const appChains = [mainnet, sepolia] as unknown as Draft<Chain[]>;

export const config = getDefaultConfig({
  appName: 'TUWA docs',
  projectId: process.env.NEXT_PUBLIC_WALLET_PROJECT_ID ?? '',
  chains: [mainnet, ...appChains.slice(1)],
  ssr: true,
});
