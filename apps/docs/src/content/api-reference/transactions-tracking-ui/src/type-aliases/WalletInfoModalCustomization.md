[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / WalletInfoModalCustomization

# WalletInfoModalCustomization\<TR, T\>

> **WalletInfoModalCustomization**\<`TR`, `T`\> = `object`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:27](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L27)

Defines the customization options for the WalletInfoModal.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### classNames?

> `optional` **classNames**: `object`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:32](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L32)

#### contentWrapper?

> `optional` **contentWrapper**: `string`

CSS classes for the main content wrapper div.

***

### components?

> `optional` **components**: `object`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:36](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L36)

#### header()?

> `optional` **header**: (`props`) => `ReactNode`

A render prop to replace the entire modal header.

##### Parameters

###### props

`CustomHeaderProps`

##### Returns

`ReactNode`

#### history()?

> `optional` **history**: (`props`) => `ReactNode`

A render prop to replace the `TransactionsHistory` component.

##### Parameters

###### props

`CustomHistoryProps`\<`TR`, `T`\>

##### Returns

`ReactNode`

#### walletInfo()?

> `optional` **walletInfo**: (`props`) => `ReactNode`

A render prop to replace the `WalletHeader` component.

##### Parameters

###### props

`CustomWalletInfoProps`\<`TR`, `T`\>

##### Returns

`ReactNode`

***

### modalProps?

> `optional` **modalProps**: `Partial`\<`Modal.Props`\>

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:29](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L29)

Props to pass directly to the underlying `react-modal` component.

***

### motionProps?

> `optional` **motionProps**: `MotionProps`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:31](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L31)

Props to pass to the `framer-motion` component for custom animations.
