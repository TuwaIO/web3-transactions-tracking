'use client';

import { Draft } from 'immer';
import { Chain } from 'viem';
import { mainnet, sepolia } from 'viem/chains';

export const appChains = [mainnet, sepolia] as unknown as Draft<Chain[]>;
