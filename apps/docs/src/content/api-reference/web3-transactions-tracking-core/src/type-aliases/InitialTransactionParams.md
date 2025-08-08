[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [web3-transactions-tracking-core/src](../README.md) / InitialTransactionParams

# InitialTransactionParams

> **InitialTransactionParams** = `object`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:85](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/web3-transactions-tracking-core/src/types.ts#L85)

Represents the parameters required to initiate a new transaction via the `handleTransaction` method.

## Properties

### actionKey?

> `optional` **actionKey**: `string`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:91](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/web3-transactions-tracking-core/src/types.ts#L91)

A key identifying the retry logic from the actions registry.

***

### description?

> `optional` **description**: `string` \| \[`string`, `string`, `string`, `string`\]

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:97](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/web3-transactions-tracking-core/src/types.ts#L97)

A description for the transaction, with the same structure as the title.

***

### desiredChainID

> **desiredChainID**: `number`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:89](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/web3-transactions-tracking-core/src/types.ts#L89)

The ID of the desired blockchain network.

***

### payload?

> `optional` **payload**: `object`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:93](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/web3-transactions-tracking-core/src/types.ts#L93)

Any additional data to be associated with the transaction.

***

### title?

> `optional` **title**: `string` \| \[`string`, `string`, `string`, `string`\]

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:95](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/web3-transactions-tracking-core/src/types.ts#L95)

A title for the transaction, can be a single string or an array for different states.

***

### type

> **type**: `string`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:87](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/web3-transactions-tracking-core/src/types.ts#L87)

The type or category of the transaction (e.g., 'increment', 'approve').

***

### withTrackedModal?

> `optional` **withTrackedModal**: `boolean`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:99](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/web3-transactions-tracking-core/src/types.ts#L99)

If true, the detailed tracking modal will open automatically for this transaction.
