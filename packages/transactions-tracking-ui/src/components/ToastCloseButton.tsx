import { XMarkIcon } from '@heroicons/react/24/solid';

import { useLabels } from '../providers/LabelsProvider';

export function ToastCloseButton({ closeToast }: { closeToast?: (e: React.MouseEvent<HTMLElement>) => void }) {
  const labels = useLabels();

  return (
    <button
      onClick={closeToast}
      aria-label={labels.actions.close}
      title={labels.actions.close}
      className="absolute top-2 right-2 cursor-pointer rounded-full p-1 text-[var(--tuwa-text-tertiary)] transition-colors hover:bg-[var(--tuwa-bg-muted)] hover:text-[var(--tuwa-text-primary)]"
    >
      <XMarkIcon className="h-5 w-5" />
    </button>
  );
}
