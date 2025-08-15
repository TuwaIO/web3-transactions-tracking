[**@tuwaio/web3-txs-tracking-repo**](../../../README.md)

***

# WalletInfoModalCustomization\<TR, T\>

> **WalletInfoModalCustomization**\<`TR`, `T`\> = `object`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:28](https://github.com/TuwaIO/web3-transactions-tracking/blob/e8fc17df1e7aa9c38ef9c156281f0501e50bc7fd/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L28)

Defines the customization options for the WalletInfoModal.
Allows customization of modal behavior, animations, and individual UI components.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### classNames?

> `optional` **classNames**: `object`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:33](https://github.com/TuwaIO/web3-transactions-tracking/blob/e8fc17df1e7aa9c38ef9c156281f0501e50bc7fd/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L33)

#### contentWrapper?

> `optional` **contentWrapper**: `string`

CSS classes for the main content wrapper div.

***

### components?

> `optional` **components**: `object`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:38](https://github.com/TuwaIO/web3-transactions-tracking/blob/e8fc17df1e7aa9c38ef9c156281f0501e50bc7fd/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L38)

Custom component overrides for different parts of the modal

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

> `optional` **modalProps**: `Partial`\<`ComponentPropsWithoutRef`\<*typeof* `Dialog.Content`\>\>

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:30](https://github.com/TuwaIO/web3-transactions-tracking/blob/e8fc17df1e7aa9c38ef9c156281f0501e50bc7fd/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L30)

Custom props to pass to the underlying Radix UI Dialog.Content component

***

### motionProps?

> `optional` **motionProps**: `MotionProps`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:32](https://github.com/TuwaIO/web3-transactions-tracking/blob/e8fc17df1e7aa9c38ef9c156281f0501e50bc7fd/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L32)

Custom Framer Motion animation properties
