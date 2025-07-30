import { Tabs } from 'nextra/components';

import { RainbowKit } from '@/components/RainbowKit';

export function Examples() {
  return (
    <Tabs items={['evm-transactions-tracking']}>
      <Tabs.Tab>
        <Tabs items={['RainbowKit', 'ConnectKit']}>
          <Tabs.Tab>
            <RainbowKit />
          </Tabs.Tab>
          <Tabs.Tab>**npm** is a package manager for the JavaScript programming language.</Tabs.Tab>
        </Tabs>
      </Tabs.Tab>
    </Tabs>
  );
}
