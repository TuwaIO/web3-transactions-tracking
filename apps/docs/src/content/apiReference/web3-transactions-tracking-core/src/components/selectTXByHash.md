[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# selectTXByHash()

> **selectTXByHash**\<`TR`, `T`\>(`transactionsPool`, `hash`): `undefined` \| `T`

Defined in: [packages/web3-transactions-tracking-core/src/store/transactionsSelectors.ts:58](https://github.com/TuwaIO/web3-transactions-tracking/blob/a1e18c8dd44998cdb601034c1ed713d4d7c5d2f9/packages/web3-transactions-tracking-core/src/store/transactionsSelectors.ts#L58)

Selects a single transaction from the pool by its on-chain hash.
It first attempts a direct lookup assuming the hash is the `txKey`, then falls back to a full search.

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

### hash

`string`

The on-chain hash of the transaction to find.

## Returns

`undefined` \| `T`

The transaction object if found, otherwise undefined.
