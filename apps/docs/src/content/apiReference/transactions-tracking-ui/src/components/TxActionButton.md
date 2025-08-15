[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TxActionButton()

> **TxActionButton**\<`TR`, `T`\>(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/TxActionButton.tsx:55](https://github.com/TuwaIO/web3-transactions-tracking/blob/770740dda3d4574741c78576c8d447a8659b112f/packages/transactions-tracking-ui/src/components/TxActionButton.tsx#L55)

A stateful button that provides real-time feedback for a transaction's lifecycle.
It listens for changes in the global `transactionsPool` to automatically update its
visual state, showing loading, success, failure, and replaced statuses.

## Type Parameters

### TR

`TR`

The generic type for the transaction tracker registry.

### T

`T` *extends* `Transaction`\<`TR`\>

The generic type for the transaction object.

## Parameters

### props

[`TxActionButtonProps`](../interfaces/TxActionButtonProps.md)\<`TR`, `T`\>

The component props.

## Returns

`Element`

The rendered stateful action button.
