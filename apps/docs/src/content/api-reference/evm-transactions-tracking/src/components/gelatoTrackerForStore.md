[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# gelatoTrackerForStore()

> **gelatoTrackerForStore**\<`T`\>(`__namedParameters`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts:170](https://github.com/TuwaIO/web3-transactions-tracking/blob/4a237b00ed848de7f49da6090247382e0e9beb07/packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts#L170)

A higher-level wrapper for `gelatoTracker` that integrates directly with the Zustand store.
It provides the necessary callbacks to update the transaction's state in the store.

## Type Parameters

### T

`T` *extends* `Transaction`\<[`TransactionTracker`](../enumerations/TransactionTracker.md)\>

The application-specific transaction union type.

## Parameters

### \_\_namedParameters

`Pick`\<`ITxTrackingStore`\<[`TransactionTracker`](../enumerations/TransactionTracker.md), `T`, `Config`, [`ActionTxKey`](../type-aliases/ActionTxKey.md)\>, `"removeTxFromPool"` \| `"transactionsPool"` \| `"updateTxParams"` \| `"onSucceedCallbacks"`\> & `object`

## Returns

`Promise`\<`void`\>
