'use client';

import { Tabs } from 'nextra/components';

import { RainbowKit } from '@/components/started-blocks/RainbowKit';

export const trackingPackages = [
  {
    name: 'EVM',
    packageName: 'evm-transactions-tracking',
  },
];

const walletConnectors = [
  {
    name: 'RainbowKit',
    component: <RainbowKit trackingPackageName={trackingPackages[0].packageName} />,
  },
  {
    name: 'ConnectKit',
    component: <div className="mt-4 text-center text-[var(--tuwa-text-secondary)]">In progress...</div>,
  },
  {
    name: 'Dynamic.xyz',
    component: <div className="mt-4 text-center text-[var(--tuwa-text-secondary)]">In progress...</div>,
  },
];

export function StartedWrapper() {
  return (
    <div className="mt-6">
      {/* <Tabs items={trackingPackages.map((p) => p.name)}>
        {trackingPackages.map((p) => (
          <Tabs.Tab key={p.name}>
            ...
          </Tabs.Tab>
        ))}
      </Tabs> */}

      <div>
        <h3 className="mb-4 text-xl font-semibold text-[var(--tuwa-text-primary)]">
          Choose your preferred wallet connector:
        </h3>
        <Tabs items={walletConnectors.map((c) => c.name)}>
          {walletConnectors.map((connector) => (
            <Tabs.Tab key={connector.name}>{connector.component}</Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
