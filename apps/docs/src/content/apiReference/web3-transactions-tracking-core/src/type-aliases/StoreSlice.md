[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# StoreSlice()\<T, E\>

> **StoreSlice**\<`T`, `E`\> = (`set`, `get`) => `T`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:16](https://github.com/TuwaIO/web3-transactions-tracking/blob/9d5a6a77e31cc19732f906ad17380ab6b5619e56/packages/web3-transactions-tracking-core/src/types.ts#L16)

A utility type for creating modular Zustand store slices.

## Type Parameters

### T

`T` *extends* `object`

The state slice type.

### E

`E` *extends* `object` = `T`

The full store state type, defaults to T.

## Parameters

### set

`StoreApi`\<`E` *extends* `T` ? `E` : `E` & `T`\>\[`"setState"`\]

### get

`StoreApi`\<`E` *extends* `T` ? `E` : `E` & `T`\>\[`"getState"`\]

## Returns

`T`
