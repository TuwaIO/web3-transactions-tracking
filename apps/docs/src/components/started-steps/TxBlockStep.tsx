import { DocumentTextIcon } from '@heroicons/react/24/outline';

import { CodeBlock } from '@/components/CodeBlock';
import { CodeHighlighter } from '@/components/CodeHighlighter';

const codeBlock = `'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useInitializeTransactionsPool } from '@tuwa/evm-transactions-tracking/src/hooks/useInitializeTransactionsPool';
import { sepolia } from 'viem/chains';

import { config } from '@/configs/wagmiConfig';
import { useTxTrackingStore } from '@/hooks/txTrackingHooks';
import { increment } from '@/transactions/actions/increment';
import { TxType } from '@/transactions/onSucceedCallbacks';

export const Increment = () => {
  const handleTransaction = useTxTrackingStore((state) => state.handleTransaction);
  const trackedTransaction = useTxTrackingStore((state) => state.trackedTransaction);
  
  const initializeTransactionsPool = useTxTrackingStore((store) => store.initializeTransactionsPool);
  useInitializeTransactionsPool(initializeTransactionsPool); // required for continue tracking after page reload

  const handleIncrement = async () => {
    await handleTransaction({
      config,
      actionFunction: () => increment({ wagmiConfig: config }),
      params: {
        type: TxType.increment,
        desiredChainID: sepolia.id,
        payload: {
          value: 0,
        },
      },
    });
  };

  console.log(trackedTransaction);

  return (
    <div>
      <ConnectButton />

      <div className="m-4">
        <button
          type="button"
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
`;

export function TxBlockStep() {
  return (
    <div className="mt-4">
      <h3 className="text-[18px] font-bold mb-2">Step 6: Transaction component</h3>
      <p className="mb-2">
        We'll add a component that includes a wallet connection button and another button to initiate a transaction.
        Once initiated, this transaction will immediately have its status tracked and be added to the transaction pool.
        From that point on, the process may vary depending on the transaction's complexity, but TUWA's package's will
        handle all the status tracking for you.
      </p>
      <CodeBlock title="Increment.tsx" titleIcons={<DocumentTextIcon />} textToCopy={codeBlock}>
        <CodeHighlighter children={codeBlock} language="tsx" />
      </CodeBlock>
    </div>
  );
}
