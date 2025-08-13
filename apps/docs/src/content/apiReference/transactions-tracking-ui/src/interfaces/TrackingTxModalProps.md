[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TrackingTxModalProps\<TR, T\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:66](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L66)

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

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:77](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L77)

A registry of retryable actions.

***

### appChains

> **appChains**: `Chain`[]

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:74](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L74)

***

### className?

> `optional` **className**: `string`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:72](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L72)

***

### config?

> `optional` **config**: `Config`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:79](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L79)

The wagmi config object, required for the retry functionality.

***

### customization?

> `optional` **customization**: [`TrackingTxModalCustomization`](../type-aliases/TrackingTxModalCustomization.md)\<`TR`, `T`\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:73](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L73)

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

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:69](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L69)

A function to close the modal.

#### Parameters

##### txKey?

`string`

#### Returns

`void`

***

### onOpenWalletInfo()

> **onOpenWalletInfo**: () => `void`

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:71](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L71)

A function to open the main wallet info modal.

#### Returns

`void`

***

### transactionsPool

> **transactionsPool**: `TransactionPool`\<`TR`, `T`\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:75](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L75)
