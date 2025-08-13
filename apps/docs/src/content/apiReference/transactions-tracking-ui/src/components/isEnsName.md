[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# isEnsName()

> **isEnsName**(`address`): `boolean`

Defined in: [packages/transactions-tracking-ui/src/utils/ensUtils.ts:79](https://github.com/TuwaIO/web3-transactions-tracking/blob/d30dc6a3e80476f3e836f0385d8c40646abfed41/packages/transactions-tracking-ui/src/utils/ensUtils.ts#L79)

A simple heuristic to check if a string could be an ENS name.
It works by checking if the string is NOT a valid Ethereum address.

## Parameters

### address

`string`

The string to check.

## Returns

`boolean`

True if the string is not in a valid address format.
