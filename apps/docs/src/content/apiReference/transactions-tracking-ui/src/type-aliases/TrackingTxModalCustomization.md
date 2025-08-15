[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TrackingTxModalCustomization\<TR, T\>

> **TrackingTxModalCustomization**\<`TR`, `T`\> = `object`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:49](https://github.com/TuwaIO/web3-transactions-tracking/blob/b63ee874e01b037e0ee503214c6cfe4d0ac7491c/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L49)

Defines the customization options for the TrackingTxModal.
Allows overriding modal behavior, animations, and individual UI components.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### components?

> `optional` **components**: `object`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:55](https://github.com/TuwaIO/web3-transactions-tracking/blob/b63ee874e01b037e0ee503214c6cfe4d0ac7491c/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L55)

A record of custom components to override parts of the modal's UI.

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

> `optional` **modalProps**: `Partial`\<`ComponentPropsWithoutRef`\<*typeof* `Dialog.Content`\>\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:51](https://github.com/TuwaIO/web3-transactions-tracking/blob/b63ee874e01b037e0ee503214c6cfe4d0ac7491c/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L51)

Custom props to pass to the underlying Radix UI `Dialog.Content` component.

***

### motionProps?

> `optional` **motionProps**: `MotionProps`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:53](https://github.com/TuwaIO/web3-transactions-tracking/blob/b63ee874e01b037e0ee503214c6cfe4d0ac7491c/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L53)

Custom Framer Motion animation properties for the modal's entrance and exit.
