[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# getAddress()

> **getAddress**(`name`): `Promise`\<`undefined` \| `` `0x${string}` ``\>

Defined in: [packages/transactions-tracking-ui/src/utils/ensUtils.ts:61](https://github.com/TuwaIO/web3-transactions-tracking/blob/27cafae30bccefa7ba3ea936ed9bfbdaf84605d5/packages/transactions-tracking-ui/src/utils/ensUtils.ts#L61)

Fetches the Ethereum address associated with a given ENS name.
Performs the lookup on Ethereum Mainnet.

## Parameters

### name

`string`

The ENS name to resolve (e.g., 'vitalik.eth').

## Returns

`Promise`\<`undefined` \| `` `0x${string}` ``\>

The associated Ethereum address (lowercase) or undefined if not found.
