import { Config, switchChain } from '@wagmi/core';

import { getActiveWalletAndClient } from './getActiveWalletAndClient';

export async function checkChainForTx(chainId: number, config: Config) {
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
