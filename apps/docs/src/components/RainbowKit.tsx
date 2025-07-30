'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

import { TransactionsBlock } from '@/components/TransactionsBlock';
import { config } from '@/configs/wagmiConfig';

const queryClient = new QueryClient();

export function RainbowKit() {
  return (
    <div>
      <div>code</div>
      <div>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              <TransactionsBlock />
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </div>
    </div>
  );
}
