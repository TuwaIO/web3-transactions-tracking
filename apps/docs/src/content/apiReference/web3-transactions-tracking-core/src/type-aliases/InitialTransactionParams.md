[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# InitialTransactionParams

> **InitialTransactionParams** = `object`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:93](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/web3-transactions-tracking-core/src/types.ts#L93)

Represents the parameters required to initiate a new transaction via the `handleTransaction` method.

## Properties

### actionKey?

> `optional` **actionKey**: `string`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:99](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/web3-transactions-tracking-core/src/types.ts#L99)

A key identifying the retry logic from the actions registry.

***

### description?

> `optional` **description**: `string` \| \[`string`, `string`, `string`, `string`\]

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:105](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/web3-transactions-tracking-core/src/types.ts#L105)

A description for the transaction, with the same structure as the title.

***

### desiredChainID

> **desiredChainID**: `number`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:97](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/web3-transactions-tracking-core/src/types.ts#L97)

The ID of the desired blockchain network.

***

### payload?

> `optional` **payload**: `object`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:101](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/web3-transactions-tracking-core/src/types.ts#L101)

Any additional data to be associated with the transaction.

***

### title?

> `optional` **title**: `string` \| \[`string`, `string`, `string`, `string`\]

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:103](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/web3-transactions-tracking-core/src/types.ts#L103)

A title for the transaction, can be a single string or an array for different states.

***

### type

> **type**: `string`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:95](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/web3-transactions-tracking-core/src/types.ts#L95)

The type or category of the transaction (e.g., 'increment', 'approve').

***

### withTrackedModal?

> `optional` **withTrackedModal**: `boolean`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:107](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/web3-transactions-tracking-core/src/types.ts#L107)

If true, the detailed tracking modal will open automatically for this transaction.
