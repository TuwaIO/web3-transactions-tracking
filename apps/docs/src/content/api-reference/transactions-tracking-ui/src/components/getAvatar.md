[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / getAvatar

# getAvatar()

> **getAvatar**(`name`, `address`): `Promise`\<`undefined` \| `string`\>

Defined in: [packages/transactions-tracking-ui/src/utils/ensUtils.ts:43](https://github.com/TuwaIO/web3-transactions-tracking/blob/d33a798a7b6f5ea37a9cf7f32c6601e6ce651d45/packages/transactions-tracking-ui/src/utils/ensUtils.ts#L43)

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
