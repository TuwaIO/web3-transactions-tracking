[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# ToastTransaction()

> **ToastTransaction**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/ToastTransaction.tsx:80](https://github.com/TuwaIO/web3-transactions-tracking/blob/b389bfa5867b1844b26d40be43be5bc5566575ea/packages/transactions-tracking-ui/src/components/ToastTransaction.tsx#L80)

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
