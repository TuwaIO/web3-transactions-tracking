'use client';

import { Tabs } from 'nextra/components';
import React from 'react';

import { ConnectKitTransactionsBlock } from '@/components/LiveDemo/ConnectKitTransactionsBlock';
import { DynamicTransactionsBlock } from '@/components/LiveDemo/DynamicTransactionsBlock';
import { RainbowKitTransactionsBlock } from '@/components/LiveDemo/RainbowKitTransactionsBlock';

const walletConnectors = [
  {
    name: 'RainbowKit',
    component: <RainbowKitTransactionsBlock />,
  },
  {
    name: 'ConnectKit',
    component: <ConnectKitTransactionsBlock />,
  },
  {
    name: 'Dynamic.xyz',
    component: <DynamicTransactionsBlock />,
  },
];

export function DemoWrapper() {
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
