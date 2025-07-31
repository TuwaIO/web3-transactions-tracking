import { DocumentTextIcon } from '@heroicons/react/24/outline';

import { CodeBlock } from '@/components/CodeBlock';
import { CodeHighlighter } from '@/components/CodeHighlighter';

const codeBlock = `import { createTxTrackingStore } from '@tuwa/evm-transactions-tracking/dist/store/txTrackingStore';
import { createBoundedUseStore } from '@tuwa/web3-transactions-tracking-core/dist/utils/createBoundedUseStore';
import { sepolia } from 'viem/chains';

import { onSucceedCallbacks, TransactionUnion } from '@/transactions/onSucceedCallbacks';

const storageName = 'transactions-tracking-storage';

export const useTxTrackingStore = createBoundedUseStore(
  createTxTrackingStore<TransactionUnion>({
    name: storageName,
    appChains: [sepolia],
    onSucceedCallbacks,
  }),
);
`;

export function TxTrackingStoreStep() {
  return (
    <div className="mt-4">
      <h3 className="text-[18px] font-bold mb-2">Step 5: Initialize transaction tracking store</h3>
      <p className="mb-2">
        We'll initialize the store. This store is responsible for persisting completed transactions; by default, it uses
        the browser's Local Storage, but it can also be configured, all{' '}
        <a
          className="text-blue-600 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 hover:after:bg-blue-800 after:transition"
          href="https://zustand.docs.pmnd.rs/integrations/persisting-store-data"
          target="_blank"
        >
          zustand persist storage option available
        </a>
        . The store also includes several helper functions designed to simplify interactions with web3 transactions.
        Each of these will be described in more detail in the next section of the documentation.
      </p>
      <CodeBlock title="txTrackingHooks.ts" titleIcons={<DocumentTextIcon />} textToCopy={codeBlock}>
        <CodeHighlighter children={codeBlock} language="ts" />
      </CodeBlock>
    </div>
  );
}
