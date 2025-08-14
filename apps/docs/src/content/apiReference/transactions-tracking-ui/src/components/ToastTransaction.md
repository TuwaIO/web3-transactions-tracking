[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# ToastTransaction()

> **ToastTransaction**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/ToastTransaction.tsx:80](https://github.com/TuwaIO/web3-transactions-tracking/blob/549c342be0ff423f1f64fd953292d46d3ee64909/packages/transactions-tracking-ui/src/components/ToastTransaction.tsx#L80)

A composite component that renders the content for a transaction toast notification.
It is highly customizable and includes actions for speeding up or canceling transactions
when they are in a pending state.

## Type Parameters

### TR

`TR`

The generic type for the transaction tracker registry.

### T

`T` *extends* `Transaction`\<`TR`\>

The generic type for the transaction object.

## Parameters

### props

[`ToastTransactionProps`](../type-aliases/ToastTransactionProps.md)\<`TR`, `T`\>

The component props.

## Returns

`Element`

The rendered toast body.
