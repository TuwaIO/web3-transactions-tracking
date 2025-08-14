[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TxInfoBlockCustomization\<TR, T\>

> **TxInfoBlockCustomization**\<`TR`, `T`\> = `object`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TxInfoBlock.tsx:23](https://github.com/TuwaIO/web3-transactions-tracking/blob/926476a2e29dd99c5b16e664ed8df05f81039399/packages/transactions-tracking-ui/src/components/TrackingTxModal/TxInfoBlock.tsx#L23)

Defines the customization options for the `TxInfoBlock` component.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### components?

> `optional` **components**: `object`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TxInfoBlock.tsx:24](https://github.com/TuwaIO/web3-transactions-tracking/blob/926476a2e29dd99c5b16e664ed8df05f81039399/packages/transactions-tracking-ui/src/components/TrackingTxModal/TxInfoBlock.tsx#L24)

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
This is passed down to the underlying `TransactionKey` component.
