[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# WalletInfoModal()

> **WalletInfoModal**\<`TR`, `T`\>(`props`): `null` \| `Element`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:69](https://github.com/TuwaIO/web3-transactions-tracking/blob/c41f5708079d0be5a252ccc504a3465e6f5aafc4/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L69)

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
