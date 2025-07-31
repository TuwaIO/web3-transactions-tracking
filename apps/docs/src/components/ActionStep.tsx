import { DocumentTextIcon } from '@heroicons/react/24/outline';

import { CodeBlock } from '@/components/CodeBlock';
import { CodeHighlighter } from '@/components/CodeHighlighter';

const codeBlock = `import { Config, writeContract } from '@wagmi/core';

export async function increment({ wagmiConfig }: { wagmiConfig?: Config }) {
  if (wagmiConfig) {
    return writeContract(wagmiConfig, {
      abi: CounterAbi, // ABI from previus step
      address: COUNTER_ADDRESS, // Contract address
      functionName: 'increment',
      args: [],
      chainId: sepolia.id,
    });
  }
  return undefined;
}
`;

export function ActionStep() {
  return (
    <div className="mt-4">
      <h3 className="text-[18px] font-bold mb-2">Step 3: Action from contract</h3>
      <p className="mb-2">
        In the third step, we'll select a contract function and create an 'action' for it that is ready to be used by
        our transaction tracking library. This step is optional, but I am demonstrating it here for convenience and to
        show how to reduce code duplication in your real-world projects. For example, we'll pick 'increment' function,
        the action of this function will look like this.
      </p>
      <CodeBlock title="CounterAbi.ts" titleIcons={<DocumentTextIcon />} textToCopy={codeBlock}>
        <CodeHighlighter children={codeBlock} language="ts" />
      </CodeBlock>
    </div>
  );
}
