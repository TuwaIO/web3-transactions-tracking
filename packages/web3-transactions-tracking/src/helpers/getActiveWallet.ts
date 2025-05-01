import { Config, getAccount, getClient } from '@wagmi/core';

export function getActiveWallet(config: Config) {
  const activeWallet = getAccount(config);
  const walletClient = getClient(config);
  if (!activeWallet.address || !walletClient) {
    throw new Error('Wallet not connected');
  }
  return activeWallet;
}
