import { ArrowPathIcon, CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';

import { useLabels } from '../../providers/LabelsProvider';
import { cn } from '../../utils/cn';

type StepStatus = 'active' | 'completed' | 'error' | 'inactive' | 'replaced';
export type StepProps = { status: StepStatus; label: string; isFirst?: boolean; isLast?: boolean; className?: string };

function Step({ status, label, isFirst = false }: Omit<StepProps, 'isLast' | 'className'> & { label: ReactNode }) {
  const isCompleted = status === 'completed';
  const isError = status === 'error';
  const isReplaced = status === 'replaced';
  const isActive = status === 'active';

  const colorConfig = {
    line: cn({
      'bg-[var(--tuwa-success-icon)]': isCompleted,
      'bg-[var(--tuwa-error-icon)]': isError,
      'bg-[var(--tuwa-info-icon)]': isReplaced,
      'bg-[var(--tuwa-pending-icon)]': isActive,
      'bg-[var(--tuwa-border-primary)]': status === 'inactive',
    }),
    border: cn({
      'border-[var(--tuwa-success-icon)]': isCompleted,
      'border-[var(--tuwa-error-icon)]': isError,
      'border-[var(--tuwa-info-icon)]': isReplaced,
      'border-[var(--tuwa-pending-icon)]': isActive,
      'border-[var(--tuwa-border-primary)]': status === 'inactive',
    }),
    fill: cn({
      'bg-[var(--tuwa-success-icon)]': isCompleted,
      'bg-[var(--tuwa-error-icon)]': isError,
      'bg-[var(--tuwa-info-icon)]': isReplaced,
    }),
    pulse: cn({
      'bg-[var(--tuwa-pending-icon)]': isActive,
    }),
  };

  return (
    <div className="relative flex flex-1 flex-col items-center">
      {!isFirst && (
        <div className={cn('absolute right-1/2 top-[10px] h-0.5 w-full transition-colors', colorConfig.line)} />
      )}

      <div
        className={cn(
          'relative z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors',
          colorConfig.border,
          colorConfig.fill,
        )}
      >
        {isCompleted && <CheckIcon className="h-3 w-3 text-[var(--tuwa-text-on-accent)]" />}
        {isError && <ExclamationTriangleIcon className="h-3 w-3 text-[var(--tuwa-text-on-accent)]" />}
        {isReplaced && <ArrowPathIcon className="h-3 w-3 text-[var(--tuwa-text-on-accent)]" />}
        {isActive && <div className={cn('h-2 w-2 animate-pulse rounded-full', colorConfig.pulse)} />}
      </div>

      <span
        className={cn(
          'mt-2 text-center text-xs',
          status !== 'inactive' ? 'font-semibold text-[var(--tuwa-text-primary)]' : 'text-[var(--tuwa-text-secondary)]',
        )}
      >
        {label}
      </span>
    </div>
  );
}

export interface TxProgressIndicatorProps {
  isProcessing?: boolean;
  isSucceed?: boolean;
  isFailed?: boolean;
  isReplaced?: boolean;
  className?: string;
  renderStep?: (props: StepProps & { key: number }) => ReactNode;
}

export function TxProgressIndicator({
  isProcessing,
  isSucceed,
  isFailed,
  isReplaced,
  className,
  renderStep,
}: TxProgressIndicatorProps) {
  const labels = useLabels();

  const getStatus = (step: number): StepStatus => {
    if (step === 1) return 'completed';
    if (step === 2) {
      if (isProcessing) return 'active';
      if (isSucceed || isFailed || isReplaced) return 'completed';
    }
    if (step === 3) {
      if (isSucceed) return 'completed';
      if (isFailed) return 'error';
      if (isReplaced) return 'replaced';
      if (isProcessing) return 'active';
    }
    return 'inactive';
  };

  let finalStepLabel = labels.trackingModal.progressIndicator.succeed;
  if (isFailed) finalStepLabel = labels.statuses.failed;
  if (isReplaced) finalStepLabel = labels.statuses.replaced;

  const renderStepComponent = (stepNum: number, isFirst = false, isLast = false) => {
    const props: StepProps & { key: number } = {
      key: stepNum,
      status: getStatus(stepNum),
      label:
        stepNum === 1
          ? labels.trackingModal.progressIndicator.created
          : stepNum === 2
            ? labels.trackingModal.progressIndicator.processing
            : finalStepLabel,
      isFirst,
      isLast,
    };
    return renderStep ? renderStep(props) : <Step {...props} />;
  };

  return (
    <div className={cn('flex w-full items-start px-4 pt-2 pb-1', className)}>
      {renderStepComponent(1, true)}
      {renderStepComponent(2)}
      {renderStepComponent(3, false, true)}
    </div>
  );
}
