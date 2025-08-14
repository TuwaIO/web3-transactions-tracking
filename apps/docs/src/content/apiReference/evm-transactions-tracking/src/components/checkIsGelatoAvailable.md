[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# checkIsGelatoAvailable()

> **checkIsGelatoAvailable**(`chainId`): `Promise`\<`boolean`\>

Defined in: [packages/evm-transactions-tracking/src/utils/checkIsGelatoAvailable.ts:17](https://github.com/TuwaIO/web3-transactions-tracking/blob/a10c83309de467fc9c122360072c3c2a067cd4a4/packages/evm-transactions-tracking/src/utils/checkIsGelatoAvailable.ts#L17)

Checks if the Gelato Relay service supports a given chain ID.
The result is cached in memory for 5 minutes to avoid excessive network requests.

## Parameters

### chainId

`number`

The chain identifier to check.

## Returns

`Promise`\<`boolean`\>

True if Gelato supports the chain, false otherwise.
