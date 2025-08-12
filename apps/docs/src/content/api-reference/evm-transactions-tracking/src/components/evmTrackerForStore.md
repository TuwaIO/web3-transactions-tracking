[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# evmTrackerForStore()

> **evmTrackerForStore**\<`T`\>(`__namedParameters`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:134](https://github.com/TuwaIO/web3-transactions-tracking/blob/4a237b00ed848de7f49da6090247382e0e9beb07/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L134)

A higher-level wrapper for `evmTracker` that integrates directly with the Zustand store.
It provides the necessary callbacks to update the transaction's state in the store.

## Type Parameters

### T

`T` *extends* `Transaction`\<[`TransactionTracker`](../enumerations/TransactionTracker.md)\>

The application-specific transaction union type.

## Parameters

### \_\_namedParameters

`Pick`\<[`EVMTrackerParams`](../type-aliases/EVMTrackerParams.md), `"chains"`\> & `Pick`\<`ITxTrackingStore`\<[`TransactionTracker`](../enumerations/TransactionTracker.md), `T`, `Config`, [`ActionTxKey`](../type-aliases/ActionTxKey.md)\>, `"transactionsPool"` \| `"updateTxParams"` \| `"onSucceedCallbacks"`\> & `object`

## Returns

`Promise`\<`void`\>
