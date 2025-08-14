[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TrackingTxModal()

> **TrackingTxModal**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:94](https://github.com/TuwaIO/web3-transactions-tracking/blob/b5153949c59e82f6ac101c4b51be3e5161d4301e/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L94)

A detailed modal that displays the real-time status and lifecycle of a transaction.
It opens automatically for transactions initiated with `withTrackedModal: true`.

## Type Parameters

### TR

`TR`

The generic type for the transaction tracker registry.

### T

`T` *extends* `Transaction`\<`TR`\>

The generic type for the transaction object.

## Parameters

### props

[`TrackingTxModalProps`](../interfaces/TrackingTxModalProps.md)\<`TR`, `T`\>

The component props.

## Returns

`Element`

The rendered tracking modal.
