/**
 * @file This file contains the `WalletHeader` component, used to display user avatar, name, and address.
 */

import { JSX, ReactNode, useEffect, useState } from 'react';
import { Address, Chain, Hex } from 'viem';

import { useLabels } from '../../providers';
import { cn, getAvatar, getName, textCenterEllipsis } from '../../utils';
import { WalletAddressDisplay } from './WalletAddressDisplay';
import { WalletAvatar } from './WalletAvatar';

// --- Prop Types for Customization ---
type AvatarRenderProps = { address: string; ensAvatar?: string };
type NameRenderProps = { ensName?: string; isLoading: boolean; address: string };
type AddressRenderProps = { address: string; chain?: Chain };

/**
 * Defines the props for the `WalletHeader` component, including extensive customization options.
 */
export interface WalletHeaderProps {
  /** The user's wallet address. If undefined, the 'not connected' state is shown. */
  walletAddress?: Address;
  /** The viem `Chain` object for the currently connected network. */
  chain?: Chain;
  /** Optional additional CSS classes for the container. */
  className?: string;
  /** A render prop to replace the default `WalletAvatar` component. */
  renderAvatar?: (props: AvatarRenderProps) => ReactNode;
  /** A render prop to replace the default ENS name display. */
  renderName?: (props: NameRenderProps) => ReactNode;
  /** A render prop to replace the default `WalletAddressDisplay` component. */
  renderAddressDisplay?: (props: AddressRenderProps) => ReactNode;
  /** A render prop to replace the default content shown when no wallet is connected. */
  renderNoWalletContent?: () => ReactNode;
}

/**
 * A component that displays the header for the wallet modal, including the user's avatar,
 * ENS name (if available), and address. It handles loading states for ENS data and
 * provides a "not connected" view.
 *
 * @param {WalletHeaderProps} props - The component props.
 * @returns {JSX.Element} The rendered wallet header.
 */
export function WalletHeader({
  walletAddress,
  chain,
  className,
  renderAvatar,
  renderName,
  renderAddressDisplay,
  renderNoWalletContent,
}: WalletHeaderProps): JSX.Element {
  const labels = useLabels();

  const [ensName, setEnsName] = useState<string | undefined>(undefined);
  const [ensAvatar, setEnsAvatar] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch ENS data whenever the wallet address changes.
  useEffect(() => {
    const fetchEnsData = async () => {
      if (walletAddress) {
        setIsLoading(true);
        setEnsName(undefined);
        setEnsAvatar(undefined);

        try {
          const name = await getName(walletAddress as Hex);
          if (name) {
            setEnsName(name);
            const avatar = await getAvatar(name, walletAddress);
            setEnsAvatar(avatar);
          }
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchEnsData();
  }, [walletAddress]);

  // --- Render "Not Connected" State ---
  if (!walletAddress) {
    if (renderNoWalletContent) {
      return <>{renderNoWalletContent()}</>;
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

  const ensNameAbbreviated = ensName
    ? ensName.length > 30
      ? textCenterEllipsis(ensName, 12, 12)
      : ensName
    : undefined;

  // --- Render "Connected" State ---
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
          <div className="h-7">
            {isLoading ? (
              <div className="h-full w-48 animate-pulse rounded-md bg-[var(--tuwa-bg-muted)]" />
            ) : (
              ensNameAbbreviated && (
                <h2 className="text-xl font-bold text-[var(--tuwa-text-primary)]">{ensNameAbbreviated}</h2>
              )
            )}
          </div>
        )}

        {renderAddressDisplay ? (
          renderAddressDisplay({ address: walletAddress, chain })
        ) : (
          <WalletAddressDisplay address={walletAddress} chain={chain} />
        )}
      </div>
    </div>
  );
}
