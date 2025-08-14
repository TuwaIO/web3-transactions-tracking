[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# getAvatar()

> **getAvatar**(`name`, `address`): `Promise`\<`undefined` \| `string`\>

Defined in: [packages/transactions-tracking-ui/src/utils/ensUtils.ts:43](https://github.com/TuwaIO/web3-transactions-tracking/blob/a1e18c8dd44998cdb601034c1ed713d4d7c5d2f9/packages/transactions-tracking-ui/src/utils/ensUtils.ts#L43)

Fetches the avatar for a given ENS name.
If no ENS avatar is set, it generates a unique "blockie" image as a fallback.
Performs the lookup on Ethereum Mainnet.

## Parameters

### name

`string`

The ENS name (e.g., 'vitalik.eth').

### address

`string`

The Ethereum address, used for the blockie fallback.

## Returns

`Promise`\<`undefined` \| `string`\>

The URL of the avatar image, a base64 blockie, or undefined if an error occurs.
