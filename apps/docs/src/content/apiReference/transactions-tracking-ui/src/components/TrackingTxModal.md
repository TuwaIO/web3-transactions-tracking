[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TrackingTxModal()

> **TrackingTxModal**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:94](https://github.com/TuwaIO/web3-transactions-tracking/blob/27cafae30bccefa7ba3ea936ed9bfbdaf84605d5/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L94)

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
