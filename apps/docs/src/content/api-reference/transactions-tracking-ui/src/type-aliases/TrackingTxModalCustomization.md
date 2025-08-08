[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TrackingTxModalCustomization\<TR, T\>

> **TrackingTxModalCustomization**\<`TR`, `T`\> = `object`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:44](https://github.com/TuwaIO/web3-transactions-tracking/blob/23f986a0b4a0d56019b0420cc7b526ee2c895afb/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L44)

Defines the customization options for the TrackingTxModal.
Allows customization of modal behavior, animations, and individual UI components.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### components?

> `optional` **components**: `object`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:50](https://github.com/TuwaIO/web3-transactions-tracking/blob/23f986a0b4a0d56019b0420cc7b526ee2c895afb/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L50)

Custom component overrides for different parts of the modal

#### errorBlock()?

> `optional` **errorBlock**: (`props`) => `ReactNode`

Custom error block component

##### Parameters

###### props

[`TxErrorBlockProps`](TxErrorBlockProps.md)

##### Returns

`ReactNode`

#### footer()?

> `optional` **footer**: (`props`) => `ReactNode`

Custom footer component

##### Parameters

###### props

`CustomFooterProps`

##### Returns

`ReactNode`

#### header()?

> `optional` **header**: (`props`) => `ReactNode`

Custom header component

##### Parameters

###### props

`CustomHeaderProps`

##### Returns

`ReactNode`

#### infoBlock()?

> `optional` **infoBlock**: (`props`) => `ReactNode`

Custom transaction info block component

##### Parameters

###### props

[`TxInfoBlockProps`](TxInfoBlockProps.md)\<`TR`, `T`\>

##### Returns

`ReactNode`

#### progressIndicator()?

> `optional` **progressIndicator**: (`props`) => `ReactNode`

Custom progress indicator component

##### Parameters

###### props

[`TxProgressIndicatorProps`](../interfaces/TxProgressIndicatorProps.md)

##### Returns

`ReactNode`

#### statusVisual()?

> `optional` **statusVisual**: (`props`) => `ReactNode`

Custom status visual component (icons, animations)

##### Parameters

###### props

[`TxStatusVisualProps`](TxStatusVisualProps.md)

##### Returns

`ReactNode`

***

### modalProps?

> `optional` **modalProps**: `Partial`\<`ComponentPropsWithoutRef`\<*typeof* `Dialog.Content`\>\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:46](https://github.com/TuwaIO/web3-transactions-tracking/blob/23f986a0b4a0d56019b0420cc7b526ee2c895afb/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L46)

Custom props to pass to the underlying Radix UI Dialog.Content component

***

### motionProps?

> `optional` **motionProps**: `MotionProps`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:48](https://github.com/TuwaIO/web3-transactions-tracking/blob/23f986a0b4a0d56019b0420cc7b526ee2c895afb/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L48)

Custom Framer Motion animation properties
