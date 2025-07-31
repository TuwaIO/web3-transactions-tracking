import { CheckCircleIcon, Square2StackIcon } from '@heroicons/react/24/outline';

import { cn } from '@/utils/cn';

interface CopyIconButtonProps {
  copied: boolean;
  handleCopy: () => void;
}

export function CopyIconButton({ copied, handleCopy }: CopyIconButtonProps) {
  return (
    <button
      className={cn('transition cursor-pointer text-black w-[24px] h-[24px] block', { ['text-green-500']: copied })}
      onClick={handleCopy}
      type="button"
    >
      {copied ? <CheckCircleIcon /> : <Square2StackIcon />}
    </button>
  );
}
