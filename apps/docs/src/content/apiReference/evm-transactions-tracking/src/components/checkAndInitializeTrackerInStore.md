[**@tuwaio/web3-txs-tracking-repo**](../../../README.md)

***

# checkAndInitializeTrackerInStore()

> **checkAndInitializeTrackerInStore**\<`T`\>(`params`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/utils/checkAndInitializeTrackerInStore.ts:29](https://github.com/TuwaIO/web3-transactions-tracking/blob/e8fc17df1e7aa9c38ef9c156281f0501e50bc7fd/packages/evm-transactions-tracking/src/utils/checkAndInitializeTrackerInStore.ts#L29)

Initializes the appropriate tracker for a given transaction based on its `tracker` type.
This function acts as a central router, delegating to the specific tracker implementation
(e.g., EVM, Gelato, Safe).

## Type Parameters

### T

`T` *extends* `Transaction`\<[`TransactionTracker`](../enumerations/TransactionTracker.md)\>

The application-specific transaction union type.

## Parameters

### params

`Pick`\<`ITxTrackingStore`\<[`TransactionTracker`](../enumerations/TransactionTracker.md), `T`, `Config`, [`ActionTxKey`](../type-aliases/ActionTxKey.md)\>, `"removeTxFromPool"` \| `"transactionsPool"` \| `"updateTxParams"` \| `"onSucceedCallbacks"`\> & `object`

The parameters for initializing the tracker.

## Returns

`Promise`\<`void`\>

A promise that resolves once the tracking process has been initiated.
