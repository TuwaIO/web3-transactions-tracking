'use client';

import { Tabs } from 'nextra/components';
import { useState } from 'react';

import { RainbowKit } from '@/components/RainbowKit';

const trackingPackages = ['evm-transactions-tracking'];

export function Examples() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tabs items={trackingPackages} onChange={(index) => setSelectedIndex(index)}>
      <Tabs.Tab>
        <h3 className="font-bold text-lg">Connect wallet library variants:</h3>
        <Tabs items={['RainbowKit', 'ConnectKit']}>
          <Tabs.Tab>
            <RainbowKit trackingPackageName={trackingPackages[selectedIndex]} />
          </Tabs.Tab>
          <Tabs.Tab>**npm** is a package manager for the JavaScript programming language.</Tabs.Tab>
        </Tabs>
      </Tabs.Tab>
    </Tabs>
  );
}
