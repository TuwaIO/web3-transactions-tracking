[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# getName()

> **getName**(`address`): `Promise`\<`undefined` \| `string`\>

Defined in: [packages/transactions-tracking-ui/src/utils/ensUtils.ts:23](https://github.com/TuwaIO/web3-transactions-tracking/blob/a5b6681b81f2ac2ebab5a209571fc0fd463f436b/packages/transactions-tracking-ui/src/utils/ensUtils.ts#L23)

Fetches the primary ENS name for a given Ethereum address.
Performs the lookup on Ethereum Mainnet.

## Parameters

### address

`` `0x${string}` ``

The Ethereum address to look up.

## Returns

`Promise`\<`undefined` \| `string`\>

The ENS name if found, otherwise undefined.
