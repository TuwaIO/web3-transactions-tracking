import { PackageInstallationTabs, PackageInstallationTabsProps } from '@/components/PackageInstallationTabs';
import { ABIStep } from '@/components/started-steps/ABIStep';
import { ActionStep } from '@/components/started-steps/ActionStep';
import { OnSucceedCallbacksStep } from '@/components/started-steps/OnSucceedCallbacksStep';
import { TxTrackingStoreStep } from '@/components/started-steps/TxTrackingStoreStep';

export function CombineSteps({ trackingPackageName }: PackageInstallationTabsProps) {
  return (
    <>
      <p className="my-2">Second, add the package's from TUWA, for transactions tracking and store.</p>
      <PackageInstallationTabs trackingPackageName={trackingPackageName} />
      <ABIStep />
      <ActionStep />
      <OnSucceedCallbacksStep />
      <TxTrackingStoreStep />
    </>
  );
}
