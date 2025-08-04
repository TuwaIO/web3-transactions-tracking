import { GelatoRelay, SponsoredCallRequest } from '@gelatonetwork/relay-sdk';
import { encodeFunctionData } from 'viem';
import { sepolia } from 'viem/chains';

import { CounterAbi } from '../../abis/CounterAbi';
import { COUNTER_ADDRESS } from '../../constants';

export async function incrementGelato() {
  const relay = new GelatoRelay();
  const data = encodeFunctionData({
    abi: CounterAbi,
    functionName: 'increment',
  });

  const request: SponsoredCallRequest = {
    chainId: BigInt(sepolia.id),
    target: COUNTER_ADDRESS,
    data: data,
  };

  return relay.sponsoredCall(request, 'hmZhgOHmIOQU2__kKD_GnlkrGWIsRGv2ZEeQyJxBo9o_');
}
