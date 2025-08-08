[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / getAddress

# getAddress()

> **getAddress**(`name`): `Promise`\<`undefined` \| `` `0x${string}` ``\>

Defined in: [packages/transactions-tracking-ui/src/utils/ensUtils.ts:61](https://github.com/TuwaIO/web3-transactions-tracking/blob/d33a798a7b6f5ea37a9cf7f32c6601e6ce651d45/packages/transactions-tracking-ui/src/utils/ensUtils.ts#L61)

Fetches the Ethereum address associated with a given ENS name.
Performs the lookup on Ethereum Mainnet.

## Parameters

### name

`string`

The ENS name to resolve (e.g., 'vitalik.eth').

## Returns

`Promise`\<`undefined` \| `` `0x${string}` ``\>

The associated Ethereum address (lowercase) or undefined if not found.
