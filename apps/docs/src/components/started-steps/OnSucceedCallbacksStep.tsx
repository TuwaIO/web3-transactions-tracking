import { DocumentTextIcon } from '@heroicons/react/24/outline';

import { CodeBlock } from '@/components/CodeBlock';
import { CodeHighlighter } from '@/components/CodeHighlighter';

const codeBlock = `import { TransactionTracker } from '@tuwa/evm-transactions-tracking/dist/types';
import { Transaction } from '@tuwa/web3-transactions-tracking-core/dist/types';

export enum TxType {
  increment = 'increment',
}

type IncrementTx = Transaction<TransactionTracker> & {
  type: TxType.increment;
  payload: {
    value: number;
  };
};

export type TransactionUnion = IncrementTx;

export async function onSucceedCallbacks(tx: TransactionUnion) {
  switch (tx.type) {
    case TxType.increment:
      console.log('tx increment executed, current count is tx.payload.value');
      break;
  }
}
`;

export function OnSucceedCallbacksStep() {
  return (
    <div className="mt-4">
      <h3 className="text-[18px] font-bold mb-2">Step 4: On succeed callbacks function</h3>
      <p className="mb-2">
        We'll define our transaction type, which in this case is increment. We'll also prepare a callback function to be
        executed once the transaction is finalized. This feature is optional.
      </p>
      <CodeBlock title="onSucceedCallbacks.ts" titleIcons={<DocumentTextIcon />} textToCopy={codeBlock}>
        <CodeHighlighter children={codeBlock} language="ts" />
      </CodeBlock>
    </div>
  );
}
