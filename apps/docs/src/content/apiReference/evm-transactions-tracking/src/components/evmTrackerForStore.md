[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# evmTrackerForStore()

> **evmTrackerForStore**\<`T`\>(`__namedParameters`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:144](https://github.com/TuwaIO/web3-transactions-tracking/blob/1c531e3315ee04126f921b4f2611e5bf6a27395e/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L144)

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
