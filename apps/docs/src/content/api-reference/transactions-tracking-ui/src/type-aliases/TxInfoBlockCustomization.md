[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / TxInfoBlockCustomization

# TxInfoBlockCustomization\<TR, T\>

> **TxInfoBlockCustomization**\<`TR`, `T`\> = `object`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TxInfoBlock.tsx:23](https://github.com/TuwaIO/web3-transactions-tracking/blob/21552a1c460bd6fb4d2af4641aec8b8b8280f1ea/packages/transactions-tracking-ui/src/components/TrackingTxModal/TxInfoBlock.tsx#L23)

Defines the customization options for the `TxInfoBlock` component.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### components?

> `optional` **components**: `object`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TxInfoBlock.tsx:24](https://github.com/TuwaIO/web3-transactions-tracking/blob/21552a1c460bd6fb4d2af4641aec8b8b8280f1ea/packages/transactions-tracking-ui/src/components/TrackingTxModal/TxInfoBlock.tsx#L24)

#### infoRow()?

> `optional` **infoRow**: (`props`) => `ReactNode`

A render prop to replace the default label-value row component.

##### Parameters

###### props

`CustomInfoRowProps`

##### Returns

`ReactNode`

#### transactionKey?

> `optional` **transactionKey**: [`ToastTransactionKeyProps`](../interfaces/ToastTransactionKeyProps.md)\<`TR`, `T`\>\[`"renderHashLink"`\]

A render prop to customize the rendering of the transaction keys/hashes.
This is passed down to the underlying `ToastTransactionKey` component.
