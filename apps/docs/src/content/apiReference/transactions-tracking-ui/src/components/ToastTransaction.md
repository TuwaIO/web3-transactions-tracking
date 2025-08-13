[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# ToastTransaction()

> **ToastTransaction**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/ToastTransaction.tsx:68](https://github.com/TuwaIO/web3-transactions-tracking/blob/a2b33dd12eef06eb58b1d85d26fc06937a20a7e4/packages/transactions-tracking-ui/src/components/ToastTransaction.tsx#L68)

A composite component that renders the content for a transaction toast notification.
It is highly customizable via the `customization` prop, which allows for overriding
its internal components.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Parameters

### props

[`ToastTransactionProps`](../type-aliases/ToastTransactionProps.md)\<`TR`, `T`\>

The component props.

## Returns

`Element`

The rendered toast body.
