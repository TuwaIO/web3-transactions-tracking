[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# ToastTransactionKey()

> **ToastTransactionKey**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/ToastTransactionKey.tsx:43](https://github.com/TuwaIO/web3-transactions-tracking/blob/a2b33dd12eef06eb58b1d85d26fc06937a20a7e4/packages/transactions-tracking-ui/src/components/ToastTransactionKey.tsx#L43)

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
