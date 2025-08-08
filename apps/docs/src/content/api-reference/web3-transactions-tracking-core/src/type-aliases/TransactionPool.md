[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [web3-transactions-tracking-core/src](../README.md) / TransactionPool

# TransactionPool\<TR, T\>

> **TransactionPool**\<`TR`, `T`\> = `Record`\<`string`, `T`\>

Defined in: [packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts:15](https://github.com/TuwaIO/web3-transactions-tracking/blob/2043cd5621e576c11710316754b2017a7b544567/packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts#L15)

Defines the structure of the transaction pool, which is a record of transactions indexed by their unique keys.

## Type Parameters

### TR

`TR`

The type of the tracker identifier.

### T

`T` *extends* [`Transaction`](Transaction.md)\<`TR`\>

The transaction type.
