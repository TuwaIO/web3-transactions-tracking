/**
 * @file This file contains the `WalletAvatar` component for displaying a user's avatar.
 */

import makeBlockie from 'ethereum-blockies-base64';
import { JSX } from 'react';

import { useLabels } from '../../providers/LabelsProvider';
import { cn } from '../../utils';

export type WalletAvatarProps = {
  /** The user's wallet address. Used for the blockie fallback and background color generation. */
  address: string;
  /** An optional URL for the user's ENS avatar image. */
  ensAvatar?: string;
  /** Optional additional CSS classes for the container. */
  className?: string;
};

/**
 * A component that displays a user's avatar.
 * It prioritizes showing the provided `ensAvatar`. If unavailable, it falls back
 * to a procedurally generated "blockie" based on the user's address.
 * It also generates a unique background color from the address as a placeholder.
 *
 * @param {WalletAvatarProps} props - The component props.
 * @returns {JSX.Element} The rendered avatar component.
 */
export function WalletAvatar({ address, ensAvatar, className }: WalletAvatarProps): JSX.Element {
  const labels = useLabels();

  // Generate a unique, consistent background color from the first 6 hex characters of the address.
  const bgColor = `#${address.slice(2, 8)}`;

  return (
    <div className={cn('h-12 w-12 flex-shrink-0 rounded-full', className)} style={{ backgroundColor: bgColor }}>
      <img
        className="h-full w-full rounded-full object-cover"
        // Use the ENS avatar if provided, otherwise generate a blockie as a fallback.
        src={ensAvatar ?? makeBlockie(address)}
        alt={`${labels.walletModal.header.avatarAlt} ${address}`}
      />
    </div>
  );
}
