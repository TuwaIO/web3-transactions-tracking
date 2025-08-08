[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / WalletHeaderProps

# Interface: WalletHeaderProps

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx:21](https://github.com/TuwaIO/web3-transactions-tracking/blob/main/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx#L21)

Defines the props for the `WalletHeader` component, including extensive customization options.

## Properties

### chain?

> `optional` **chain**: `Chain`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx:25](https://github.com/TuwaIO/web3-transactions-tracking/blob/main/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx#L25)

The viem `Chain` object for the currently connected network.

***

### className?

> `optional` **className**: `string`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx:27](https://github.com/TuwaIO/web3-transactions-tracking/blob/main/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx#L27)

Optional additional CSS classes for the container.

***

### renderAddressDisplay()?

> `optional` **renderAddressDisplay**: (`props`) => `ReactNode`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx:33](https://github.com/TuwaIO/web3-transactions-tracking/blob/main/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx#L33)

A render prop to replace the default `WalletAddressDisplay` component.

#### Parameters

##### props

`AddressRenderProps`

#### Returns

`ReactNode`

***

### renderAvatar()?

> `optional` **renderAvatar**: (`props`) => `ReactNode`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx:29](https://github.com/TuwaIO/web3-transactions-tracking/blob/main/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx#L29)

A render prop to replace the default `WalletAvatar` component.

#### Parameters

##### props

`AvatarRenderProps`

#### Returns

`ReactNode`

***

### renderName()?

> `optional` **renderName**: (`props`) => `ReactNode`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx:31](https://github.com/TuwaIO/web3-transactions-tracking/blob/main/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx#L31)

A render prop to replace the default ENS name display.

#### Parameters

##### props

`NameRenderProps`

#### Returns

`ReactNode`

***

### renderNoWalletContent()?

> `optional` **renderNoWalletContent**: () => `ReactNode`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx:35](https://github.com/TuwaIO/web3-transactions-tracking/blob/main/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx#L35)

A render prop to replace the default content shown when no wallet is connected.

#### Returns

`ReactNode`

***

### walletAddress?

> `optional` **walletAddress**: `` `0x${string}` ``

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx:23](https://github.com/TuwaIO/web3-transactions-tracking/blob/main/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletHeader.tsx#L23)

The user's wallet address. If undefined, the 'not connected' state is shown.
