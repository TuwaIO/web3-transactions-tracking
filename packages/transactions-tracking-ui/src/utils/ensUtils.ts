import { createViemClient } from '@tuwa/evm-transactions-tracking/dist';
import makeBlockie from 'ethereum-blockies-base64';
import { Address, Hex, isAddress } from 'viem';
import { mainnet } from 'viem/chains';
import { getEnsAddress, getEnsAvatar, getEnsName, normalize } from 'viem/ens';

export const getName = async (address: Hex) => {
  try {
    const client = createViemClient(mainnet.id, [mainnet]);
    if (client) {
      const name = await getEnsName(client, { address });
      return name ? name : undefined;
    }
    return undefined;
  } catch (error) {
    console.error('ENS name lookup error', error);
  }
};

export const getAvatar = async (name: string, address: string) => {
  try {
    const client = createViemClient(mainnet.id, [mainnet]);
    if (client) {
      const background_image = await getEnsAvatar(client, { name });
      return background_image ? background_image : makeBlockie(address);
    }
    return undefined;
  } catch (error) {
    console.error('ENS avatar lookup error', error);
  }
};

export const getAddress = async (name: string) => {
  try {
    const client = createViemClient(mainnet.id, [mainnet]);
    if (client) {
      const address = await getEnsAddress(client, {
        name: normalize(name),
      });
      return (address ? address.toLocaleLowerCase() : undefined) as Address | undefined;
    }
  } catch (error) {
    console.error('ENS address lookup error', error);
  }
};

export const isEnsName = (address: string) => !isAddress(address);
