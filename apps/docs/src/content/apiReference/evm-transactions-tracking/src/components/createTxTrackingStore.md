[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# createTxTrackingStore()

> **createTxTrackingStore**\<`T`\>(`__namedParameters`): `Write`\<`StoreApi`\<`ITxTrackingStore`\<[`TransactionTracker`](../enumerations/TransactionTracker.md), `T`, `Config`, [`ActionTxKey`](../type-aliases/ActionTxKey.md)\>\>, `StorePersist`\<`ITxTrackingStore`\<[`TransactionTracker`](../enumerations/TransactionTracker.md), `T`, `Config`, [`ActionTxKey`](../type-aliases/ActionTxKey.md)\>, `ITxTrackingStore`\<[`TransactionTracker`](../enumerations/TransactionTracker.md), `T`, `Config`, [`ActionTxKey`](../type-aliases/ActionTxKey.md)\>\>\>

Defined in: [packages/evm-transactions-tracking/src/store/txTrackingStore.ts:31](https://github.com/TuwaIO/web3-transactions-tracking/blob/b63ee874e01b037e0ee503214c6cfe4d0ac7491c/packages/evm-transactions-tracking/src/store/txTrackingStore.ts#L31)

Creates and configures the main Zustand store for transaction tracking.
This store is persistent (uses localStorage by default) and includes all actions
for handling the full lifecycle of EVM transactions.

## Type Parameters

### T

`T` *extends* `Transaction`\<[`TransactionTracker`](../enumerations/TransactionTracker.md)\>

A union type representing all possible transaction shapes for the application.

## Parameters

### \_\_namedParameters

`object` & `PersistOptions`\<`ITxTrackingStore`\<[`TransactionTracker`](../enumerations/TransactionTracker.md), `T`, `Config`, [`ActionTxKey`](../type-aliases/ActionTxKey.md)\>, `ITxTrackingStore`\<[`TransactionTracker`](../enumerations/TransactionTracker.md), `T`, `Config`, [`ActionTxKey`](../type-aliases/ActionTxKey.md)\>\>

## Returns

`Write`\<`StoreApi`\<`ITxTrackingStore`\<[`TransactionTracker`](../enumerations/TransactionTracker.md), `T`, `Config`, [`ActionTxKey`](../type-aliases/ActionTxKey.md)\>\>, `StorePersist`\<`ITxTrackingStore`\<[`TransactionTracker`](../enumerations/TransactionTracker.md), `T`, `Config`, [`ActionTxKey`](../type-aliases/ActionTxKey.md)\>, `ITxTrackingStore`\<[`TransactionTracker`](../enumerations/TransactionTracker.md), `T`, `Config`, [`ActionTxKey`](../type-aliases/ActionTxKey.md)\>\>\>

A vanilla Zustand store instance.
