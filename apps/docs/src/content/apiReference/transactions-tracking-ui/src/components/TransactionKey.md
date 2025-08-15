[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TransactionKey()

> **TransactionKey**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionKey.tsx:43](https://github.com/TuwaIO/web3-transactions-tracking/blob/a5b6681b81f2ac2ebab5a209571fc0fd463f436b/packages/transactions-tracking-ui/src/components/TransactionKey.tsx#L43)

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
