[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TrackingTxModalProps\<TR, T\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:65](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L65)

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

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:80](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L80)

A registry of retryable actions, keyed by `actionKey`.

***

### appChains

> **appChains**: `Chain`[]

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:76](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L76)

An array of `viem` chain objects supported by the application.

***

### className?

> `optional` **className**: `string`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:72](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L72)

Optional additional CSS classes for the modal's container.

***

### config?

> `optional` **config**: `Config`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:82](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L82)

The wagmi config object, required for retry, cancel, and speed up functionality.

***

### customization?

> `optional` **customization**: [`TrackingTxModalCustomization`](../type-aliases/TrackingTxModalCustomization.md)\<`TR`, `T`\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:74](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L74)

An object containing all customization options for the modal.

***

### handleTransaction()?

> `optional` **handleTransaction**: (`params`) => `Promise`\<`void`\>

Defined in: packages/web3-transactions-tracking-core/dist/index.d.ts:136

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

Defined in: packages/web3-transactions-tracking-core/dist/index.d.ts:174

The state of a transaction that is currently being initiated but not yet submitted.

#### Inherited from

`Partial.initialTx`

***

### onClose()

> **onClose**: (`txKey?`) => `void`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:68](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L68)

A function to close the modal.

#### Parameters

##### txKey?

`string`

#### Returns

`void`

***

### onOpenWalletInfo()

> **onOpenWalletInfo**: () => `void`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:70](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L70)

A function to open the main wallet info modal.

#### Returns

`void`

***

### transactionsPool

> **transactionsPool**: `TransactionPool`\<`TR`, `T`\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:78](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L78)

The global transaction pool from the tracking store.
