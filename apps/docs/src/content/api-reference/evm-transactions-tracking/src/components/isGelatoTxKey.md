[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [evm-transactions-tracking/src](../README.md) / isGelatoTxKey

# isGelatoTxKey()

> **isGelatoTxKey**(`txKey`): `txKey is GelatoTxKey`

Defined in: [packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts:31](https://github.com/TuwaIO/web3-transactions-tracking/blob/b7157ec97601bac11089c33347f8d589c043b005/packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts#L31)

A type guard to determine if an ActionTxKey is a GelatoTxKey.

## Parameters

### txKey

[`ActionTxKey`](../type-aliases/ActionTxKey.md)

The transaction key to check.

## Returns

`txKey is GelatoTxKey`

True if the key is for a Gelato transaction.
