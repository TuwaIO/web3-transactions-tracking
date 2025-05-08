import { Config, switchChain } from '@wagmi/core';

import { getActiveWalletAndClient } from './getActiveWalletAndClient';

/**
 * Check if the current active wallet is connected to the specified chain.
 * If not, switch the wallet's connection to the specified chain.
 *
 * @param {number} chainId - The ID of the chain to be checked and potentially switched to.
 * @param {Config} config - The configuration object containing wallet and connection information.
 *
 * @return {Promise<void>} - A Promise that resolves once the chain check and potential switch is complete.
 */
export async function checkChainForTx(chainId: number, config: Config): Promise<void> {
  const { activeWallet } = getActiveWalletAndClient(config);
  if (activeWallet.connector && activeWallet.chainId !== chainId) {
    try {
      await switchChain(config, { chainId });
    } catch (e) {
      console.error(e);
      throw new Error('Error occured when switching chain.');
    }
  }
}
