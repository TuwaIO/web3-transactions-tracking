'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IWeb3AuthState, WEB3AUTH_NETWORK } from '@web3auth/modal';
import { Web3AuthContextConfig, Web3AuthProvider } from '@web3auth/modal/react';
import { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';

import { config } from '@/configs/wagmiConfig';

import { TxWidgetProvider } from './TxWidgetProvider';

const queryClient = new QueryClient();

const web3AuthContextConfig: Web3AuthContextConfig = {
  web3AuthOptions: {
    clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID ?? '',
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
    ssr: true,
    uiConfig: {
      logoLight: '',
      logoDark: '',
    },
  },
};

export function Providers({
  children,
  web3authInitialState,
}: {
  children: ReactNode;
  web3authInitialState: IWeb3AuthState | undefined;
}) {
  return (
    <Web3AuthProvider config={web3AuthContextConfig} initialState={web3authInitialState}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          <TxWidgetProvider />
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </Web3AuthProvider>
  );
}
