[**@tuwaio/web3-txs-tracking-repo**](../../../README.md)

***

# TransactionPool\<TR, T\>

> **TransactionPool**\<`TR`, `T`\> = `Record`\<`string`, `T`\>

Defined in: [packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts:15](https://github.com/TuwaIO/web3-transactions-tracking/blob/e8fc17df1e7aa9c38ef9c156281f0501e50bc7fd/packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts#L15)

Defines the structure of the transaction pool, which is a record of transactions indexed by their unique keys.

## Type Parameters

### TR

`TR`

The type of the tracker identifier.

### T

`T` *extends* [`Transaction`](Transaction.md)\<`TR`\>

The transaction type.
