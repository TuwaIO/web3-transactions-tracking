[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# InitialTransaction

> **InitialTransaction** = [`InitialTransactionParams`](InitialTransactionParams.md) & `object`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:114](https://github.com/TuwaIO/web3-transactions-tracking/blob/29463b139f3cc0ab8a7212190f71db95208ba6cc/packages/web3-transactions-tracking-core/src/types.ts#L114)

Represents a transaction in its initial, pre-submission state within the store.
This is used for UI feedback while the transaction is being signed and sent.

## Type declaration

### errorMessage?

> `optional` **errorMessage**: `string`

An error message if the initialization process fails (e.g., user rejects signature).

### isInitializing

> **isInitializing**: `boolean`

True if the transaction is currently being processed (e.g., waiting for user signature).

### lastTxKey?

> `optional` **lastTxKey**: `string`

The key of the transaction that was last added to the pool from this initial action.

### localTimestamp

> **localTimestamp**: `number`

The local timestamp when the user initiated the action.
