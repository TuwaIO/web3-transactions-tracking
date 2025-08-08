[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / WalletInfoModal

# Function: WalletInfoModal()

> **WalletInfoModal**\<`TR`, `T`\>(`props`): `null` \| `Element`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:67](https://github.com/TuwaIO/web3-transactions-tracking/blob/main/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L67)

The main modal component for displaying wallet information and transaction history.
It is highly customizable through the `customization` prop.

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
