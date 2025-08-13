[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# checkIsGelatoAvailable()

> **checkIsGelatoAvailable**(`chainId`): `Promise`\<`boolean`\>

Defined in: [packages/evm-transactions-tracking/src/utils/checkIsGelatoAvailable.ts:17](https://github.com/TuwaIO/web3-transactions-tracking/blob/1bf3018dad7abb3e78153016a05f83f9bb810f10/packages/evm-transactions-tracking/src/utils/checkIsGelatoAvailable.ts#L17)

Checks if the Gelato Relay service supports a given chain ID.
The result is cached in memory for 5 minutes to avoid excessive network requests.

## Parameters

### chainId

`number`

The chain identifier to check.

## Returns

`Promise`\<`boolean`\>

True if Gelato supports the chain, false otherwise.
