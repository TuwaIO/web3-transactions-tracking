[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# WalletAvatar()

> **WalletAvatar**(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletAvatar.tsx:30](https://github.com/TuwaIO/web3-transactions-tracking/blob/b90304bc8064531937db86944c69f0931d7db871/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletAvatar.tsx#L30)

A component that displays a user's avatar.
It prioritizes showing the provided `ensAvatar`. If unavailable, it falls back
to a procedurally generated "blockie" based on the user's address.
It also generates a unique background color from the address as a placeholder.

## Parameters

### props

[`WalletAvatarProps`](../type-aliases/WalletAvatarProps.md)

The component props.

## Returns

`Element`

The rendered avatar component.
