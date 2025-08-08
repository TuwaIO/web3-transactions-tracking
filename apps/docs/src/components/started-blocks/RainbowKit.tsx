'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { cn } from '@tuwa/transactions-tracking-ui';
import { ReactNode } from 'react';

import { PackageInstallationTabsProps } from '@/components/PackageInstallationTabs';
import { RainbowKitTransactionsBlock } from '@/components/RainbowKitTransactionsBlock';
import { CombineSteps } from '@/components/started-steps/CombineSteps';
import { TxBlockStep } from '@/components/started-steps/TxBlockStep';

function StyledLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className={cn('font-medium text-[var(--tuwa-text-accent)]', 'transition-all hover:underline underline-offset-4')}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export function RainbowKit({ trackingPackageName }: PackageInstallationTabsProps) {
  return (
    <RainbowKitProvider>
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-[var(--tuwa-text-primary)]">Step 1: Wallet Connector Setup</h3>
          <p className="text-[var(--tuwa-text-secondary)]">
            Our library works with any wagmi-based setup. This guide uses{' '}
            <StyledLink href="https://rainbowkit.com/docs/installation">RainbowKit</StyledLink> as an example.
          </p>
        </div>

        <CombineSteps trackingPackageName={trackingPackageName} />
        <TxBlockStep />

        <div>
          <h4 className="mb-4 text-xl font-semibold text-[var(--tuwa-text-primary)]">
            Live Demo{' '}
            <span className="text-base font-normal text-[var(--tuwa-text-secondary)]">
              (<StyledLink href="https://www.sepoliafaucet.io/">Sepolia Faucet</StyledLink>)
            </span>
          </h4>
          <RainbowKitTransactionsBlock />
        </div>
      </div>
    </RainbowKitProvider>
  );
}
