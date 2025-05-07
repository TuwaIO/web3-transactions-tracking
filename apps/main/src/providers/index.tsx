'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { InitializeTransactionsPoolProvider } from '@tuwa/web3-transactions-tracking/src/providers/InitializeTransactionsPoolProvider';
import { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';

import { config } from '@/configs/wagmiConfig';
import { useTxTrackingStore } from '@/hooks/txTrackingHooks';
import { ThemeProvider } from '@/providers/ThemeProvider';

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  const initializeTransactionsPool = useTxTrackingStore((store) => store.initializeTransactionsPool);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <InitializeTransactionsPoolProvider initializeTransactionsPool={initializeTransactionsPool} />
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}
