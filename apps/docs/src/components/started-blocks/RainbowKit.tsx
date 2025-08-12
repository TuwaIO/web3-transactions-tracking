'use client';

import { PackageInstallationTabsProps } from '@/components/PackageInstallationTabs';
import { CombineSteps } from '@/components/started-steps/CombineSteps';
import { TxBlockStep } from '@/components/started-steps/TxBlockStep';
import { StyledLink } from '@/components/StyledLink';

export function RainbowKit({ trackingPackageName }: PackageInstallationTabsProps) {
  return (
    <div className="flex flex-col">
      <div>
        <h3 className="mb-2 text-xl font-semibold text-[var(--tuwa-text-primary)]">Step 1: Wallet Connector Setup</h3>
        <p className="text-[var(--tuwa-text-secondary)]">
          The TUWA Web3 Tx's Tracking Suite works with any wagmi-based setup. This guide uses{' '}
          <StyledLink href="https://rainbowkit.com/docs/installation">RainbowKit</StyledLink> as an example.
        </p>
        <CombineSteps trackingPackageName={trackingPackageName} />
      </div>
      <TxBlockStep />
    </div>
  );
}
