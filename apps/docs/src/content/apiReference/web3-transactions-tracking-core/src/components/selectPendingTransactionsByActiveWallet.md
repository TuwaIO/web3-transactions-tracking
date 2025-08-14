[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# selectPendingTransactionsByActiveWallet()

> **selectPendingTransactionsByActiveWallet**\<`TR`, `T`\>(`transactionsPool`, `from`): `T`[]

Defined in: [packages/web3-transactions-tracking-core/src/store/transactionsSelectors.ts:92](https://github.com/TuwaIO/web3-transactions-tracking/blob/29463b139f3cc0ab8a7212190f71db95208ba6cc/packages/web3-transactions-tracking-core/src/store/transactionsSelectors.ts#L92)

Selects all pending transactions initiated by a specific wallet address.

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

### from

`string`

The wallet address (`from` address) to filter transactions by.

## Returns

`T`[]

An array of pending transactions associated with the given wallet.
