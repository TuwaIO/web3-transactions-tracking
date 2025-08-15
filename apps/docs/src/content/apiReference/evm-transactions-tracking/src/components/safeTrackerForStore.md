[**@tuwaio/web3-txs-tracking-repo**](../../../README.md)

***

# safeTrackerForStore()

> **safeTrackerForStore**\<`T`\>(`__namedParameters`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/safeTracker.ts:146](https://github.com/TuwaIO/web3-transactions-tracking/blob/cafcfd51767ecca0fea12270d048f0222d6b65a2/packages/evm-transactions-tracking/src/trackers/safeTracker.ts#L146)

A higher-level wrapper for `safeTracker` that integrates directly with the Zustand store.

## Type Parameters

### T

`T` *extends* `Transaction`\<[`TransactionTracker`](../enumerations/TransactionTracker.md)\>

## Parameters

### \_\_namedParameters

`Pick`\<`ITxTrackingStore`\<[`TransactionTracker`](../enumerations/TransactionTracker.md), `T`, `Config`, [`ActionTxKey`](../type-aliases/ActionTxKey.md)\>, `"removeTxFromPool"` \| `"transactionsPool"` \| `"updateTxParams"` \| `"onSucceedCallbacks"`\> & `object`

## Returns

`Promise`\<`void`\>
