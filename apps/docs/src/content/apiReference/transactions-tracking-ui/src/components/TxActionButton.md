[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TxActionButton()

> **TxActionButton**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/TxActionButton.tsx:41](https://github.com/TuwaIO/web3-transactions-tracking/blob/a2b33dd12eef06eb58b1d85d26fc06937a20a7e4/packages/transactions-tracking-ui/src/components/TxActionButton.tsx#L41)

A stateful button that provides real-time feedback for a transaction's lifecycle.
It shows loading, success, and failure states by listening to the transaction pool.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Parameters

### props

[`TxActionButtonProps`](../interfaces/TxActionButtonProps.md)\<`TR`, `T`\>

The component props.

## Returns

`Element`

The rendered action button.
