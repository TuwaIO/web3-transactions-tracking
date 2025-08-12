[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TxActionButton()

> **TxActionButton**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/TxActionButton.tsx:41](https://github.com/TuwaIO/web3-transactions-tracking/blob/ef26e0214bae02134bca62097cf4b010e691f9d5/packages/transactions-tracking-ui/src/components/TxActionButton.tsx#L41)

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
