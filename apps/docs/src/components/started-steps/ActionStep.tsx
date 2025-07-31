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
        We'll select a contract function and wrap it in a reusable 'action'. This makes the function compatible with our
        transaction tracking library. While this step is optional, it's an excellent pattern for reducing code
        duplication in real-world projects. As an example, we'll take the increment function. The corresponding 'action'
        for it would look like this:
      </p>
      <CodeBlock title="increment.ts" titleIcons={<DocumentTextIcon />} textToCopy={codeBlock}>
        <CodeHighlighter children={codeBlock} language="ts" />
      </CodeBlock>
    </div>
  );
}
