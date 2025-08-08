[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [web3-transactions-tracking-core/src](../README.md) / selectPendingTransactions

# selectPendingTransactions()

> **selectPendingTransactions**\<`TR`, `T`\>(`transactionsPool`): `T`[]

Defined in: [packages/web3-transactions-tracking-core/src/store/transactionsSelectors.ts:27](https://github.com/TuwaIO/web3-transactions-tracking/blob/2043cd5621e576c11710316754b2017a7b544567/packages/web3-transactions-tracking-core/src/store/transactionsSelectors.ts#L27)

Selects all transactions that are currently in a pending state.

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

An array of pending transactions.
