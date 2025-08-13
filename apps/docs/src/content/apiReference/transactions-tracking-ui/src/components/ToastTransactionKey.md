[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# ToastTransactionKey()

> **ToastTransactionKey**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/ToastTransactionKey.tsx:43](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/transactions-tracking-ui/src/components/ToastTransactionKey.tsx#L43)

A component that intelligently displays the relevant keys and hashes for a transaction.
It handles different tracker types (EVM, Gelato, Safe) and statuses (e.g., replaced transactions).

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Parameters

### props

[`ToastTransactionKeyProps`](../interfaces/ToastTransactionKeyProps.md)\<`TR`, `T`\>

The component props.

## Returns

`Element`

The rendered component.
