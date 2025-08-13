[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TrackingTxModal()

> **TrackingTxModal**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:90](https://github.com/TuwaIO/web3-transactions-tracking/blob/a2b33dd12eef06eb58b1d85d26fc06937a20a7e4/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L90)

A detailed modal that displays the real-time status and lifecycle of a transaction.
It opens automatically for transactions initiated with `withTrackedModal: true`.
Supports full customization through the customization prop including Radix UI Dialog properties.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Parameters

### props

[`TrackingTxModalProps`](../interfaces/TrackingTxModalProps.md)\<`TR`, `T`\>

The component props.

## Returns

`Element`

The rendered tracking modal.
