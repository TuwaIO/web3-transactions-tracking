'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

import { ABIStep } from '@/components/ABIStep';
import { ActionStep } from '@/components/ActionStep';
import { PackageInstallationTabs, PackageInstallationTabsProps } from '@/components/PackageInstallationTabs';
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
                <a className="text-blue-600" href="https://rainbowkit.com/docs/installation" target="_blank">
                  RainbowKit documentation
                </a>
                .
              </p>
            </div>
            <p className="my-2">Second, add the TUWA package's, for transactions tracking and store</p>
            <PackageInstallationTabs trackingPackageName={trackingPackageName} />
            <ABIStep />
            <ActionStep />

            <div>4) onSucceedCallbacks code</div>
            <div>5) Код хука и описание зачем он нужен</div>

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
