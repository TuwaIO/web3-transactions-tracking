[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / TrackingTxModalCustomization

# TrackingTxModalCustomization\<TR, T\>

> **TrackingTxModalCustomization**\<`TR`, `T`\> = `object`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:41](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L41)

Defines the customization options for the TrackingTxModal.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### components?

> `optional` **components**: `object`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:44](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L44)

#### errorBlock()?

> `optional` **errorBlock**: (`props`) => `ReactNode`

##### Parameters

###### props

[`TxErrorBlockProps`](TxErrorBlockProps.md)

##### Returns

`ReactNode`

#### footer()?

> `optional` **footer**: (`props`) => `ReactNode`

##### Parameters

###### props

`CustomFooterProps`

##### Returns

`ReactNode`

#### header()?

> `optional` **header**: (`props`) => `ReactNode`

##### Parameters

###### props

`CustomHeaderProps`

##### Returns

`ReactNode`

#### infoBlock()?

> `optional` **infoBlock**: (`props`) => `ReactNode`

##### Parameters

###### props

[`TxInfoBlockProps`](TxInfoBlockProps.md)\<`TR`, `T`\>

##### Returns

`ReactNode`

#### progressIndicator()?

> `optional` **progressIndicator**: (`props`) => `ReactNode`

##### Parameters

###### props

[`TxProgressIndicatorProps`](../interfaces/TxProgressIndicatorProps.md)

##### Returns

`ReactNode`

#### statusVisual()?

> `optional` **statusVisual**: (`props`) => `ReactNode`

##### Parameters

###### props

[`TxStatusVisualProps`](TxStatusVisualProps.md)

##### Returns

`ReactNode`

***

### modalProps?

> `optional` **modalProps**: `Partial`\<`Modal.Props`\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:42](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L42)

***

### motionProps?

> `optional` **motionProps**: `MotionProps`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:43](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L43)
