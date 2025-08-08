[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [evm-transactions-tracking/src](../README.md) / selectTxExplorerLink

# selectTxExplorerLink()

> **selectTxExplorerLink**\<`TR`, `T`\>(`transactionsPool`, `chains`, `txHash`, `replacedTxHash?`): `string`

Defined in: [packages/evm-transactions-tracking/src/store/transactionsSelectors.ts:24](https://github.com/TuwaIO/web3-transactions-tracking/blob/21552a1c460bd6fb4d2af4641aec8b8b8280f1ea/packages/evm-transactions-tracking/src/store/transactionsSelectors.ts#L24)

Generates a URL to a block explorer for a given transaction.
It handles different URL structures for standard EVM transactions and Safe transactions.

## Type Parameters

### TR

`TR`

The generic type for the tracker identifier.

### T

`T` *extends* `Transaction`\<`TR`\>

The transaction type.

## Parameters

### transactionsPool

`TransactionPool`\<`TR`, `T`\>

The entire pool of transactions from the store.

### chains

`Chain`[]

An array of supported chain objects from viem.

### txHash

`` `0x${string}` ``

The hash of the transaction for which to generate the link.

### replacedTxHash?

`` `0x${string}` ``

Optional. If provided, the link will be generated for this hash instead of the original.

## Returns

`string`

The URL to the transaction on the corresponding block explorer, or an empty string if not found.
