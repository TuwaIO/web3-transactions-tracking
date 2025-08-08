[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [web3-transactions-tracking-core/src](../README.md) / Transaction

# Transaction\<T\>

> **Transaction**\<`T`\> = `object`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:37](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L37)

Represents a transaction object being tracked by the system.

## Type Parameters

### T

`T`

The type of the tracker associated with the transaction (e.g., 'evm', 'gelato').

## Properties

### actionKey?

> `optional` **actionKey**: `string`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:43](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L43)

A key identifying the retry logic for this transaction from the actions registry.

***

### chainId

> **chainId**: `number`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:47](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L47)

The ID of the blockchain network.

***

### description?

> `optional` **description**: `string` \| \[`string`, `string`, `string`, `string`\]

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:71](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L71)

A description for the transaction, with the same structure as the title.

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:75](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L75)

An error message if the transaction failed.

***

### finishedTimestamp?

> `optional` **finishedTimestamp**: `number`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:65](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L65)

The timestamp (in seconds) when the transaction was finalized on-chain.

***

### from

> **from**: `string`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:49](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L49)

The sender's address.

***

### hash?

> `optional` **hash**: `string`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:55](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L55)

The on-chain transaction hash (optional, becomes available after submission).

***

### isError?

> `optional` **isError**: `boolean`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:79](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L79)

A flag indicating if has error status.

***

### isTrackedModalOpen?

> `optional` **isTrackedModalOpen**: `boolean`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:77](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L77)

A flag indicating if the detailed tracking modal should be open for this transaction. For UI purposes.

***

### localTimestamp

> **localTimestamp**: `number`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:63](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L63)

The local timestamp (in seconds) when the transaction was initiated by the user.

***

### nonce?

> `optional` **nonce**: `number`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:53](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L53)

The transaction nonce (optional).

***

### payload?

> `optional` **payload**: `object`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:73](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L73)

Any additional data associated with the transaction.

***

### pending

> **pending**: `boolean`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:61](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L61)

Indicates if the transaction is still pending confirmation.

***

### replacedTxHash?

> `optional` **replacedTxHash**: `string`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:57](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L57)

The hash of a transaction that this one replaced (e.g., for speed-up).

***

### status?

> `optional` **status**: [`TransactionStatus`](../enumerations/TransactionStatus.md)

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:59](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L59)

The final status of the transaction.

***

### title?

> `optional` **title**: `string` \| \[`string`, `string`, `string`, `string`\]

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:69](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L69)

A title for the transaction, can be a single string or an array for different states [pending, success, error, replaced].

***

### to?

> `optional` **to**: `string`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:51](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L51)

The recipient's address (optional).

***

### tracker

> **tracker**: `T`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:39](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L39)

The specific tracker responsible for monitoring this transaction (e.g., 'evm', 'safe', 'gelato').

***

### txKey

> **txKey**: `string`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:41](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L41)

The unique key for this transaction, used as an identifier throughout the system (e.g., transaction hash, gelato task id).

***

### type

> **type**: `string`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:45](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L45)

The type or category of the transaction (e.g., 'increment', 'approve').

***

### walletType

> **walletType**: `string`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:67](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/web3-transactions-tracking-core/src/types.ts#L67)

The type of wallet used for the transaction.
