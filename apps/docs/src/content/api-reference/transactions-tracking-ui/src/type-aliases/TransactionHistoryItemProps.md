[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TransactionHistoryItemProps\<TR, T\>

> **TransactionHistoryItemProps**\<`TR`, `T`\> = `object`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx:50](https://github.com/TuwaIO/web3-transactions-tracking/blob/0faf1ab988a5a0ce7c9996180cb885a015a6e019/packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx#L50)

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### appChains

> **appChains**: `Chain`[]

Defined in: [packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx:54](https://github.com/TuwaIO/web3-transactions-tracking/blob/0faf1ab988a5a0ce7c9996180cb885a015a6e019/packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx#L54)

An array of supported chain objects.

***

### className?

> `optional` **className**: `string`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx:58](https://github.com/TuwaIO/web3-transactions-tracking/blob/0faf1ab988a5a0ce7c9996180cb885a015a6e019/packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx#L58)

Optional additional CSS classes for the container.

***

### customization?

> `optional` **customization**: [`TransactionHistoryItemCustomization`](TransactionHistoryItemCustomization.md)\<`TR`, `T`\>

Defined in: [packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx:60](https://github.com/TuwaIO/web3-transactions-tracking/blob/0faf1ab988a5a0ce7c9996180cb885a015a6e019/packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx#L60)

An object to customize and override the default internal components.

***

### transactionsPool

> **transactionsPool**: [`TransactionPool`](../../../web3-transactions-tracking-core/src/type-aliases/TransactionPool.md)\<`TR`, `T`\>

Defined in: [packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx:56](https://github.com/TuwaIO/web3-transactions-tracking/blob/0faf1ab988a5a0ce7c9996180cb885a015a6e019/packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx#L56)

The entire pool of transactions.

***

### tx

> **tx**: `T`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx:52](https://github.com/TuwaIO/web3-transactions-tracking/blob/0faf1ab988a5a0ce7c9996180cb885a015a6e019/packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx#L52)

The transaction object to display.
