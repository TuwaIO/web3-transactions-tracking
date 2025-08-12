import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Tabs } from 'nextra/components';

import { RainbowKitTransactionsBlock } from '@/components/RainbowKitTransactionsBlock';

const walletConnectors = [
  {
    name: 'RainbowKit',
    component: (
      <RainbowKitProvider>
        <RainbowKitTransactionsBlock />
      </RainbowKitProvider>
    ),
  },
  {
    name: 'ConnectKit',
    component: <div className="mt-4 text-center text-[var(--tuwa-text-secondary)]">In progress...</div>,
  },
];

export function DemoWrapper() {
  return (
    <div className="mt-6">
      {/* Внешние вкладки для выбора экосистемы (сейчас только EVM).
        Этот код закомментирован, так как сейчас у вас только один вариант,
        но он готов к расширению в будущем.
      */}
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
