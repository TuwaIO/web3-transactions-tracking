[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# checkIsGelatoAvailable()

> **checkIsGelatoAvailable**(`chainId`): `Promise`\<`boolean`\>

Defined in: [packages/evm-transactions-tracking/src/utils/checkIsGelatoAvailable.ts:17](https://github.com/TuwaIO/web3-transactions-tracking/blob/c12e1012b38a49f4546c719dd8dfd1a6bb4dbd9d/packages/evm-transactions-tracking/src/utils/checkIsGelatoAvailable.ts#L17)

Checks if the Gelato Relay service supports a given chain ID.
The result is cached in memory for 5 minutes to avoid excessive network requests.

## Parameters

### chainId

`number`

The chain identifier to check.

## Returns

`Promise`\<`boolean`\>

True if Gelato supports the chain, false otherwise.
