import { Config, getAccount, getClient } from '@wagmi/core';

/**
 * Retrieves the active wallet and client based on the provided configuration.
 *
 * @param {Config} config - The wagmi core config.
 * @return {Object} Object containing the active wallet and client.
 * @throws {Error} Throws an error if the wallet is not connected.
 */
export function getActiveWalletAndClient(config: Config) {
  const activeWallet = getAccount(config);
  const walletClient = getClient(config);
  if (!activeWallet.address || !walletClient) {
    throw new Error('Wallet not connected');
  }
  return { activeWallet, walletClient };
}
