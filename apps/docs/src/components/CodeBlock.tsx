import { ReactNode, useState } from 'react';

import { CopyIconButton } from '@/components/CopyIconButton';

interface TerminalProps {
  title: string;
  titleIcons: ReactNode;
  children: ReactNode;
  textToCopy: string;
}

export function CodeBlock({ title, titleIcons, children, textToCopy }: TerminalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="group border rounded overflow-hidden border-gray-200">
      <div className="p-2 flex items-center justify-between bg-gray-100">
        <div className="flex items-center">
          <div className="mr-1 w-[24px] h-[24px]">{titleIcons}</div>
          <p>{title}</p>
        </div>
        <div className="transition md:opacity-0 group-hover:opacity-100">
          <CopyIconButton copied={copied} handleCopy={handleCopy} />
        </div>
      </div>

      {children}
    </div>
  );
}
