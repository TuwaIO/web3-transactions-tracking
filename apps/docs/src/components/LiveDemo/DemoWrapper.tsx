'use client';

import dynamic from 'next/dynamic';
import { Tabs } from 'nextra/components';
import React, { useState } from 'react';

const DynamicTransactionsBlock = dynamic(
  () =>
    import('@/components/LiveDemo/DynamicTransactionsBlock').then((mod) => ({
      default: mod.DynamicTransactionsBlock,
    })),
  { ssr: false },
);

const ConnectKitTransactionsBlock = dynamic(
  () =>
    import('@/components/LiveDemo/ConnectKitTransactionsBlock').then((mod) => ({
      default: mod.ConnectKitTransactionsBlock,
    })),
  { ssr: false },
);

const walletConnectors = [
  {
    name: 'Dynamic.xyz',
    component: DynamicTransactionsBlock,
  },
  {
    name: 'ConnectKit',
    component: ConnectKitTransactionsBlock,
  },
];

export function DemoWrapper() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [loadedTabs, setLoadedTabs] = useState<Set<number>>(new Set([0])); // Первый таб загружаем сразу

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
    setLoadedTabs((prev) => new Set(prev).add(index));
  };

  return (
    <div className="mt-6">
      <div>
        <h3 className="mb-4 text-xl font-semibold text-[var(--tuwa-text-primary)]">
          Choose your preferred wallet connector:
        </h3>
        <Tabs items={walletConnectors.map((c) => c.name)} onChange={handleTabChange}>
          {walletConnectors.map((connector, index) => {
            const Component = connector.component;
            const shouldLoad = loadedTabs.has(index);
            const isActive = index === activeTabIndex;

            return (
              <Tabs.Tab key={connector.name}>
                <div style={{ display: isActive ? 'block' : 'none' }}>{shouldLoad && <Component />}</div>
              </Tabs.Tab>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}
