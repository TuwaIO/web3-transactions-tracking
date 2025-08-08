[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / TrackingTxModalProps

# TrackingTxModalProps\<TR, T\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:54](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L54)

## Extends

- `Partial`\<`Pick`\<`ITxTrackingStore`\<`TR`, `T`, `Config`, `ActionTxKey`\>, `"handleTransaction"` \| `"initialTx"`\>\>

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### actions?

> `optional` **actions**: [`TxActions`](../type-aliases/TxActions.md)

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:65](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L65)

A registry of retryable actions.

***

### appChains

> **appChains**: `Chain`[]

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:62](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L62)

***

### className?

> `optional` **className**: `string`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:60](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L60)

***

### config?

> `optional` **config**: `Config`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:67](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L67)

The wagmi config object, required for the retry functionality.

***

### customization?

> `optional` **customization**: [`TrackingTxModalCustomization`](../type-aliases/TrackingTxModalCustomization.md)\<`TR`, `T`\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:61](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L61)

***

### handleTransaction()?

> `optional` **handleTransaction**: (`params`) => `Promise`\<`void`\>

Defined in: packages/web3-transactions-tracking-core/dist/index.d.ts:128

A wrapper function that handles the entire lifecycle of a transaction.
It adds the transaction to the store, executes the on-chain action, and tracks its status.

#### Parameters

##### params

The parameters for handling the transaction.

###### actionFunction

() => `Promise`\<`undefined` \| `ActionTxKey`\>

The async function to execute (e.g., a smart contract write call).

###### config

`Config`

The web3 config object (e.g., from wagmi).

###### params

`InitialTransactionParams`

The metadata for the transaction to be created.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Partial.handleTransaction`

***

### initialTx?

> `optional` **initialTx**: `InitialTransaction`

Defined in: packages/web3-transactions-tracking-core/dist/index.d.ts:166

The state of a transaction that is currently being initiated but not yet submitted.

#### Inherited from

`Partial.initialTx`

***

### onClose()

> **onClose**: (`txKey?`) => `void`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:57](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L57)

A function to close the modal.

#### Parameters

##### txKey?

`string`

#### Returns

`void`

***

### onOpenWalletInfo()

> **onOpenWalletInfo**: () => `void`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:59](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L59)

A function to open the main wallet info modal.

#### Returns

`void`

***

### transactionsPool

> **transactionsPool**: `TransactionPool`\<`TR`, `T`\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:63](https://github.com/TuwaIO/web3-transactions-tracking/blob/abe6a4ef558cb29a4aef96fbcfa8c4d1e494d79d/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L63)
