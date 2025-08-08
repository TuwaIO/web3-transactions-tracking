[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / ToastTransaction

# ToastTransaction()

> **ToastTransaction**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/ToastTransaction.tsx:68](https://github.com/TuwaIO/web3-transactions-tracking/blob/0ddfef8585a5b555079dba5742e10bcf23985a9e/packages/transactions-tracking-ui/src/components/ToastTransaction.tsx#L68)

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
