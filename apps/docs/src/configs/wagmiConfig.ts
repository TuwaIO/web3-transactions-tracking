'use client';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { Draft } from 'immer';
import { Chain } from 'viem';
import { mainnet, sepolia } from 'viem/chains';

export const appChains = [mainnet, sepolia] as unknown as Draft<Chain[]>;

export const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, ...appChains.slice(1)],
  ssr: true,
});
