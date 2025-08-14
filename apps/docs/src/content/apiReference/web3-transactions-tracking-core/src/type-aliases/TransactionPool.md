[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TransactionPool\<TR, T\>

> **TransactionPool**\<`TR`, `T`\> = `Record`\<`string`, `T`\>

Defined in: [packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts:15](https://github.com/TuwaIO/web3-transactions-tracking/blob/926476a2e29dd99c5b16e664ed8df05f81039399/packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts#L15)

Defines the structure of the transaction pool, which is a record of transactions indexed by their unique keys.

## Type Parameters

### TR

`TR`

The type of the tracker identifier.

### T

`T` *extends* [`Transaction`](Transaction.md)\<`TR`\>

The transaction type.
