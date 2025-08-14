[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TransactionsHistory()

> **TransactionsHistory**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionsHistory.tsx:54](https://github.com/TuwaIO/web3-transactions-tracking/blob/f13dd81a68ee1c8ba3221b0bd2545be1f2a19fb4/packages/transactions-tracking-ui/src/components/TransactionsHistory.tsx#L54)

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
