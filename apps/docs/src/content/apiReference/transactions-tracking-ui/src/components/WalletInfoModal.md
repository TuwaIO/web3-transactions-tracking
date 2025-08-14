[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# WalletInfoModal()

> **WalletInfoModal**\<`TR`, `T`\>(`props`): `null` \| `Element`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:69](https://github.com/TuwaIO/web3-transactions-tracking/blob/f13dd81a68ee1c8ba3221b0bd2545be1f2a19fb4/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L69)

The main modal component for displaying wallet information and transaction history.
It is highly customizable through the `customization` prop and supports full Radix UI Dialog customization.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Parameters

### props

[`WalletInfoModalProps`](../interfaces/WalletInfoModalProps.md)\<`TR`, `T`\> & `object`

The component props.

## Returns

`null` \| `Element`

The rendered modal or null if not open.
