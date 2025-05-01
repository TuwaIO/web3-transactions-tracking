import { Config, switchChain } from '@wagmi/core';

import { getActiveWallet } from './getActiveWallet';

export async function checkChainForTx(chainId: number, config: Config) {
  const activeWallet = getActiveWallet(config);
  if (activeWallet.connector && activeWallet.chainId !== chainId) {
    try {
      await switchChain(config, { chainId });
    } catch (e) {
      console.error(e);
      throw new Error('Error occured when switching chain.');
    }
  }
}
