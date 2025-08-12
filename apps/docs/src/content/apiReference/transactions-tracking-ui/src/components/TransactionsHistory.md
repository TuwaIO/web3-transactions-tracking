[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TransactionsHistory()

> **TransactionsHistory**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionsHistory.tsx:54](https://github.com/TuwaIO/web3-transactions-tracking/blob/9164bb13b3845660a18eb5abd8d55876b60a0d93/packages/transactions-tracking-ui/src/components/TransactionsHistory.tsx#L54)

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
