[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# initializeTxTrackingStore()

> **initializeTxTrackingStore**\<`TR`, `T`\>(`options`): [`StoreSlice`](../type-aliases/StoreSlice.md)\<[`IInitializeTxTrackingStore`](../type-aliases/IInitializeTxTrackingStore.md)\<`TR`, `T`\>\>

Defined in: [packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts:76](https://github.com/TuwaIO/web3-transactions-tracking/blob/27cafae30bccefa7ba3ea936ed9bfbdaf84605d5/packages/web3-transactions-tracking-core/src/store/initializeTxTrackingStore.ts#L76)

Creates a Zustand store slice containing the core logic for transaction tracking.
This function is a slice creator and is meant to be used within `createStore` from Zustand.

## Type Parameters

### TR

`TR`

### T

`T` *extends* [`Transaction`](../type-aliases/Transaction.md)\<`TR`\>

## Parameters

### options

Configuration options for the store slice.

#### onSucceedCallbacks?

(`tx`) => `void` \| `Promise`\<`void`\>

An optional async callback to run when a transaction succeeds.

## Returns

[`StoreSlice`](../type-aliases/StoreSlice.md)\<[`IInitializeTxTrackingStore`](../type-aliases/IInitializeTxTrackingStore.md)\<`TR`, `T`\>\>

A Zustand store slice.
