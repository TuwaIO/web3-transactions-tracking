import makeBlockie from 'ethereum-blockies-base64';

export function WalletAvatar({ address, ensAvatar }: { address: string; ensAvatar?: string }) {
  const bgColor = `#${address.slice(2, 8)}`;
  return (
    <div className="h-12 w-12 flex-shrink-0 rounded-full" style={{ backgroundColor: bgColor }}>
      <img className="h-12 w-12 flex-shrink-0 rounded-full" src={ensAvatar ?? makeBlockie(address)} alt="ENS avatar" />
    </div>
  );
}
