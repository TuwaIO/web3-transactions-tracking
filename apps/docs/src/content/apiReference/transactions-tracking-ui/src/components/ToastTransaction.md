[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# ToastTransaction()

> **ToastTransaction**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/ToastTransaction.tsx:68](https://github.com/TuwaIO/web3-transactions-tracking/blob/06a37fe8e151c67b408e69e3e0bb027c0c35f48a/packages/transactions-tracking-ui/src/components/ToastTransaction.tsx#L68)

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
