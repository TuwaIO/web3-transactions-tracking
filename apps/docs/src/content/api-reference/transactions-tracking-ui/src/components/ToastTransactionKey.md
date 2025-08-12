[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# ToastTransactionKey()

> **ToastTransactionKey**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/ToastTransactionKey.tsx:43](https://github.com/TuwaIO/web3-transactions-tracking/blob/eaf021b82894acf37ea9a64502e1f9dcaf67a571/packages/transactions-tracking-ui/src/components/ToastTransactionKey.tsx#L43)

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
