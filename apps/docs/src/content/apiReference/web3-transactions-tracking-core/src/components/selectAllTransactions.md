[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# selectAllTransactions()

> **selectAllTransactions**\<`TR`, `T`\>(`transactionsPool`): `T`[]

Defined in: [packages/web3-transactions-tracking-core/src/store/transactionsSelectors.ts:16](https://github.com/TuwaIO/web3-transactions-tracking/blob/2268c81697cf1615c35dcbaf3ea349b793946511/packages/web3-transactions-tracking-core/src/store/transactionsSelectors.ts#L16)

Selects all transactions from the pool and sorts them by their creation timestamp.

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

## Returns

`T`[]

An array of all transactions, sorted chronologically.
