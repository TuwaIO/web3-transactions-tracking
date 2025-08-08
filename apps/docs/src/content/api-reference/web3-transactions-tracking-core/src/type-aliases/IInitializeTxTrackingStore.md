[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [web3-transactions-tracking-core/src](../README.md) / IInitializeTxTrackingStore

# IInitializeTxTrackingStore\<TR, T\>

> **IInitializeTxTrackingStore**\<`TR`, `T`\> = `object`

Defined in: [packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts:43](https://github.com/TuwaIO/web3-transactions-tracking/blob/0ddfef8585a5b555079dba5742e10bcf23985a9e/packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts#L43)

Defines the interface for the base transaction tracking store slice.
It includes the state and actions for managing transactions.

## Type Parameters

### TR

`TR`

The type of the tracker identifier.

### T

`T` *extends* [`Transaction`](Transaction.md)\<`TR`\>

The transaction type.

## Properties

### addTxToPool()

> **addTxToPool**: (`{ tx }`) => `void`

Defined in: [packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts:54](https://github.com/TuwaIO/web3-transactions-tracking/blob/0ddfef8585a5b555079dba5742e10bcf23985a9e/packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts#L54)

Adds a new transaction to the tracking pool.

#### Parameters

##### \{ tx \}

###### tx

`T`

#### Returns

`void`

***

### closeTxTrackedModal()

> **closeTxTrackedModal**: (`txKey?`) => `void`

Defined in: [packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts:60](https://github.com/TuwaIO/web3-transactions-tracking/blob/0ddfef8585a5b555079dba5742e10bcf23985a9e/packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts#L60)

Closes the tracking modal for a specific transaction.

#### Parameters

##### txKey?

`string`

#### Returns

`void`

***

### getLastTxKey()

> **getLastTxKey**: () => `string` \| `undefined`

Defined in: [packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts:62](https://github.com/TuwaIO/web3-transactions-tracking/blob/0ddfef8585a5b555079dba5742e10bcf23985a9e/packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts#L62)

Returns the key of the last transaction that was added to the pool.

#### Returns

`string` \| `undefined`

***

### initialTx?

> `optional` **initialTx**: [`InitialTransaction`](InitialTransaction.md)

Defined in: [packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts:51](https://github.com/TuwaIO/web3-transactions-tracking/blob/0ddfef8585a5b555079dba5742e10bcf23985a9e/packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts#L51)

The state of a transaction that is currently being initiated but not yet submitted.

***

### lastAddedTxKey?

> `optional` **lastAddedTxKey**: `string`

Defined in: [packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts:49](https://github.com/TuwaIO/web3-transactions-tracking/blob/0ddfef8585a5b555079dba5742e10bcf23985a9e/packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts#L49)

The key of the most recently added transaction.

***

### onSucceedCallbacks()?

> `optional` **onSucceedCallbacks**: (`tx`) => `Promise`\<`void`\> \| `void`

Defined in: [packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts:45](https://github.com/TuwaIO/web3-transactions-tracking/blob/0ddfef8585a5b555079dba5742e10bcf23985a9e/packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts#L45)

An optional callback function to be executed when a transaction successfully completes.

#### Parameters

##### tx

`T`

#### Returns

`Promise`\<`void`\> \| `void`

***

### removeTxFromPool()

> **removeTxFromPool**: (`txKey`) => `void`

Defined in: [packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts:58](https://github.com/TuwaIO/web3-transactions-tracking/blob/0ddfef8585a5b555079dba5742e10bcf23985a9e/packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts#L58)

Removes a transaction from the tracking pool using its key.

#### Parameters

##### txKey

`string`

#### Returns

`void`

***

### transactionsPool

> **transactionsPool**: [`TransactionPool`](TransactionPool.md)\<`TR`, `T`\>

Defined in: [packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts:47](https://github.com/TuwaIO/web3-transactions-tracking/blob/0ddfef8585a5b555079dba5742e10bcf23985a9e/packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts#L47)

A pool of all transactions currently being tracked, indexed by their `txKey`.

***

### updateTxParams()

> **updateTxParams**: (`fields`) => `void`

Defined in: [packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts:56](https://github.com/TuwaIO/web3-transactions-tracking/blob/0ddfef8585a5b555079dba5742e10bcf23985a9e/packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts#L56)

Updates one or more parameters of an existing transaction in the pool.

#### Parameters

##### fields

`UpdatedParamsFields`\<`TR`\>

#### Returns

`void`
