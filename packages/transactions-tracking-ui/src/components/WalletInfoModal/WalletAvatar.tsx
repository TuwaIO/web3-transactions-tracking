import makeBlockie from 'ethereum-blockies-base64';

import { useLabels } from '../../providers/LabelsProvider';
import { cn } from '../../utils/cn';

export function WalletAvatar({
  address,
  ensAvatar,
  className,
}: {
  address: string;
  ensAvatar?: string;
  className?: string;
}) {
  const labels = useLabels();
  const bgColor = `#${address.slice(2, 8)}`;

  return (
    <div className={cn('h-12 w-12 flex-shrink-0 rounded-full', className)} style={{ backgroundColor: bgColor }}>
      <img
        className="h-full w-full rounded-full object-cover"
        src={ensAvatar ?? makeBlockie(address)}
        alt={`${labels.walletModal.header.avatarAlt} ${address}`}
      />
    </div>
  );
}
