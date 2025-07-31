'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

import { PackageInstallationTabsProps } from '@/components/PackageInstallationTabs';
import { CombineSteps } from '@/components/started-steps/CombineSteps';
import { TxBlockStep } from '@/components/started-steps/TxBlockStep';
import { TransactionsBlock } from '@/components/TransactionsBlock';
import { config } from '@/configs/wagmiConfig';

const queryClient = new QueryClient();

export function RainbowKit({ trackingPackageName }: PackageInstallationTabsProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div>
            <div>
              <h3 className="text-[18px] font-bold mb-2">Step 1: Installation</h3>
              <p>
                First, add the RainbowKit to your project, for wallet connection logic:{' '}
                <a
                  className="text-blue-600 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 hover:after:bg-blue-800 after:transition"
                  href="https://rainbowkit.com/docs/installation"
                  target="_blank"
                >
                  RainbowKit documentation
                </a>
                .
              </p>
            </div>
            <CombineSteps trackingPackageName={trackingPackageName} />
            <TxBlockStep />

            <div>
              <h4 className="font-bold text-[18px] my-4">Try it out:</h4>
              <TransactionsBlock />
            </div>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
