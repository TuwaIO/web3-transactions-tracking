import { ReactNode, useEffect, useState } from 'react';
import { Hex } from 'viem';

import { useLabels } from '../../providers/LabelsProvider';
import { cn } from '../../utils/cn';
import { getAvatar, getName } from '../../utils/ensUtils';
import { textCenterEllipsis } from '../../utils/textCenterEllipsis';
import { WalletAddressDisplay } from './WalletAddressDisplay';
import { WalletAvatar } from './WalletAvatar';

type AvatarRenderProps = { address: string; ensAvatar?: string };
type NameRenderProps = { ensName?: string; isLoading: boolean; address: string };
type AddressRenderProps = { address: string };

export interface WalletHeaderProps {
  walletAddress?: string;
  className?: string;
  renderAvatar?: (props: AvatarRenderProps) => ReactNode;
  renderName?: (props: NameRenderProps) => ReactNode;
  renderAddressDisplay?: (props: AddressRenderProps) => ReactNode;
  renderNoWalletContent?: () => ReactNode;
}

export function WalletHeader({
  walletAddress,
  className,
  renderAvatar,
  renderName,
  renderAddressDisplay,
  renderNoWalletContent,
}: WalletHeaderProps) {
  const labels = useLabels();

  const [ensName, setEnsName] = useState<string | undefined>(undefined);
  const [ensAvatar, setEnsAvatar] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEnsData = async () => {
      if (walletAddress) {
        setIsLoading(true);
        setEnsName(undefined);
        setEnsAvatar(undefined);

        const name = await getName(walletAddress as Hex);
        if (name) {
          setEnsName(name);
          const avatar = await getAvatar(name, walletAddress);
          setEnsAvatar(avatar);
        }
        setIsLoading(false);
      }
    };

    fetchEnsData();
  }, [walletAddress]);

  if (!walletAddress) {
    if (renderNoWalletContent) {
      return renderNoWalletContent();
    }

    return (
      <div
        className={cn(
          'flex h-20 items-center justify-center rounded-lg bg-[var(--tuwa-bg-muted)] text-[var(--tuwa-text-secondary)]',
          className,
        )}
      >
        {labels.walletModal.header.notConnected}
      </div>
    );
  }

  const ensNameAbbreviated = ensName ? (ensName.length > 30 ? textCenterEllipsis(ensName, 6, 6) : ensName) : undefined;

  return (
    <div className={cn('flex items-center gap-4', className)}>
      {renderAvatar ? (
        renderAvatar({ address: walletAddress, ensAvatar })
      ) : (
        <WalletAvatar address={walletAddress} ensAvatar={ensAvatar} />
      )}

      <div className="flex flex-col gap-y-1">
        {renderName ? (
          renderName({ ensName: ensNameAbbreviated, isLoading, address: walletAddress })
        ) : (
          <>
            {isLoading ? (
              <div className="h-7 w-48 animate-pulse rounded-md bg-[var(--tuwa-border-primary)]" />
            ) : (
              ensNameAbbreviated && (
                <h2 className="text-xl font-bold text-[var(--tuwa-text-primary)]">{ensNameAbbreviated}</h2>
              )
            )}
          </>
        )}

        {renderAddressDisplay ? (
          renderAddressDisplay({ address: walletAddress })
        ) : (
          <WalletAddressDisplay address={walletAddress} />
        )}
      </div>
    </div>
  );
}
