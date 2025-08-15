[**@tuwaio/web3-txs-tracking-repo**](../../../README.md)

***

# WalletAvatar()

> **WalletAvatar**(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletAvatar.tsx:30](https://github.com/TuwaIO/web3-transactions-tracking/blob/e8fc17df1e7aa9c38ef9c156281f0501e50bc7fd/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletAvatar.tsx#L30)

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
