[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# selectTXByKey()

> **selectTXByKey**\<`TR`, `T`\>(`transactionsPool`, `key`): `undefined` \| `T`

Defined in: [packages/web3-transactions-tracking-core/src/store/transactionsSelectors.ts:42](https://github.com/TuwaIO/web3-transactions-tracking/blob/06a37fe8e151c67b408e69e3e0bb027c0c35f48a/packages/web3-transactions-tracking-core/src/store/transactionsSelectors.ts#L42)

Selects a single transaction from the pool by its unique transaction key (`txKey`).
This is the most direct way to retrieve a transaction.

## Type Parameters

### TR

`TR`

The type of the tracker identifier.

### T

`T` *extends* [`Transaction`](../type-aliases/Transaction.md)\<`TR`\>

The transaction type.

## Parameters

### transactionsPool

[`TransactionPool`](../type-aliases/TransactionPool.md)\<`TR`, `T`\>

The entire pool of transactions from the store.

### key

`string`

The `txKey` of the transaction to retrieve.

## Returns

`undefined` \| `T`

The transaction object if found, otherwise undefined.
