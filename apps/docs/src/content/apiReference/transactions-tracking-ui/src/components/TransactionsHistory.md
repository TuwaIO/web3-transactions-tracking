[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TransactionsHistory()

> **TransactionsHistory**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionsHistory.tsx:54](https://github.com/TuwaIO/web3-transactions-tracking/blob/06a37fe8e151c67b408e69e3e0bb027c0c35f48a/packages/transactions-tracking-ui/src/components/TransactionsHistory.tsx#L54)

A component that displays a scrollable list of transactions for the connected wallet.
It handles states for when a wallet is not connected or when there is no history.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Parameters

### props

[`WalletInfoModalProps`](../interfaces/WalletInfoModalProps.md)\<`TR`, `T`\> & `object`

## Returns

`Element`

The rendered transaction history section.
