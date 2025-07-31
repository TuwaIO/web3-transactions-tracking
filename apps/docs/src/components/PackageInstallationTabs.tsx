import { CommandLineIcon } from '@heroicons/react/24/outline';
import { Tabs } from 'nextra/components';

import { CodeBlock } from '@/components/CodeBlock';
import { CodeHighlighter } from '@/components/CodeHighlighter';

export interface PackageInstallationTabsProps {
  trackingPackageName: string;
}

const tabsItems = [
  {
    title: 'npm',
    install: 'npm install',
  },
  {
    title: 'yarn',
    install: 'yarn add',
  },
  {
    title: 'pnpm',
    install: 'pnpm install',
  },
];

export function PackageInstallationTabs({ trackingPackageName }: PackageInstallationTabsProps) {
  const packageName = `@tuwa/web3-transactions-tracking-core && @tuwa/${trackingPackageName}`;

  return (
    <div className="my-4">
      <Tabs items={tabsItems.map((tab) => tab.title)}>
        {tabsItems.map((tab) => {
          return (
            <Tabs.Tab key={tab.title}>
              <CodeBlock title="Terminal" titleIcons={<CommandLineIcon />} textToCopy={`${tab.install} ${packageName}`}>
                <CodeHighlighter children={`${tab.install} ${packageName}`} />
              </CodeBlock>
            </Tabs.Tab>
          );
        })}
      </Tabs>
    </div>
  );
}
