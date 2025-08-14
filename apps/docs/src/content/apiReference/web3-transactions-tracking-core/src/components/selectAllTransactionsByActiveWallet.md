[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# selectAllTransactionsByActiveWallet()

> **selectAllTransactionsByActiveWallet**\<`TR`, `T`\>(`transactionsPool`, `from`): `T`[]

Defined in: [packages/web3-transactions-tracking-core/src/store/transactionsSelectors.ts:77](https://github.com/TuwaIO/web3-transactions-tracking/blob/2268c81697cf1615c35dcbaf3ea349b793946511/packages/web3-transactions-tracking-core/src/store/transactionsSelectors.ts#L77)

Selects all transactions initiated by a specific wallet address.

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

An array of transactions associated with the given wallet.
