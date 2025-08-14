[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# ITxTrackingStore\<TR, T, C, A\>

> **ITxTrackingStore**\<`TR`, `T`, `C`, `A`\> = [`IInitializeTxTrackingStore`](IInitializeTxTrackingStore.md)\<`TR`, `T`\> & `object`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:132](https://github.com/TuwaIO/web3-transactions-tracking/blob/f13dd81a68ee1c8ba3221b0bd2545be1f2a19fb4/packages/web3-transactions-tracking-core/src/types.ts#L132)

Interface for the complete transaction tracking store.

## Type declaration

### handleTransaction()

> **handleTransaction**: (`params`) => `Promise`\<`void`\>

A wrapper function that handles the entire lifecycle of a transaction.
It adds the transaction to the store, executes the on-chain action, and tracks its status.

#### Parameters

##### params

The parameters for handling the transaction.

###### actionFunction

() => `Promise`\<`A` \| `undefined`\>

The async function to execute (e.g., a smart contract write call).

###### config

`C`

The web3 config object (e.g., from wagmi).

###### params

[`InitialTransactionParams`](InitialTransactionParams.md)

The metadata for the transaction to be created.

#### Returns

`Promise`\<`void`\>

### initializeTransactionsPool()

> **initializeTransactionsPool**: () => `Promise`\<`void`\>

Initializes all active trackers for pending transactions in the pool.
This is useful for resuming tracking after a page reload.

#### Returns

`Promise`\<`void`\>

## Type Parameters

### TR

`TR`

The type of the tracker identifier.

### T

`T` *extends* [`Transaction`](Transaction.md)\<`TR`\>

The transaction type.

### C

`C`

The configuration object type (e.g., wagmi config).

### A

`A`

The return type of the action function being wrapped.
