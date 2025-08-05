import { useEffect, useState } from 'react';
import { Hex } from 'viem';

import { getAvatar, getName } from '../../utils/ensUtils';
import { textCenterEllipsis } from '../../utils/textCenterEllipsis';
import { WalletAddressDisplay } from './WalletAddressDisplay';
import { WalletAvatar } from './WalletAvatar';

export function WalletHeader({ walletAddress }: { walletAddress?: string }) {
  const [ensName, setEnsName] = useState<string | undefined>(undefined);
  const [ensAvatar, setEnsAvatar] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (walletAddress) {
      setEnsName(walletAddress);
      getName(walletAddress as Hex).then((ensName) => {
        if (ensName) {
          setEnsName(ensName);
          getAvatar(ensName, walletAddress).then((avatar) => {
            setEnsAvatar(avatar);
          });
        }
      });
    }
  }, [walletAddress]);

  if (!walletAddress) {
    return null;
  }

  const ensNameAbbreviated = ensName ? (ensName.length > 30 ? textCenterEllipsis(ensName, 6, 6) : ensName) : undefined;

  return (
    <div className="flex items-center gap-4">
      <WalletAvatar address={walletAddress} ensAvatar={ensAvatar} />
      <div className="flex flex-col gap-y-1">
        {ensNameAbbreviated ? (
          <h2 className="text-xl font-bold text-gray-900">{ensNameAbbreviated}</h2>
        ) : (
          <div className="h-7 w-48 animate-pulse rounded-md bg-gray-200" />
        )}
        <WalletAddressDisplay address={walletAddress} />
      </div>
    </div>
  );
}
