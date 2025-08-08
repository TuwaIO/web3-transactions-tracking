[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [web3-transactions-tracking-core/src](../README.md) / createBoundedUseStore

# createBoundedUseStore()

> `const` **createBoundedUseStore**: \<`S`\>(`store`) => \{(): `ExtractState`\<`S`\>; \<`T`\>(`selector`): `T`; \}

Defined in: [packages/web3-transactions-tracking-core/src/utils/createBoundedUseStore.ts:25](https://github.com/TuwaIO/web3-transactions-tracking/blob/d33a798a7b6f5ea37a9cf7f32c6601e6ce651d45/packages/web3-transactions-tracking-core/src/utils/createBoundedUseStore.ts#L25)

Creates a bounded `useStore` hook from a vanilla Zustand store instance.
The returned hook is fully typed and can be used with or without a selector.

## Type Parameters

### S

`S` *extends* `StoreApi`\<`unknown`\>

The type of the Zustand store (`StoreApi`).

## Parameters

### store

`S`

The vanilla Zustand store instance.

## Returns

A hook that can be called with an optional selector function.
- When called with a selector (`useBoundedStore(state => state.someValue)`), it returns the selected slice of the state.

> (): `ExtractState`\<`S`\>

### Returns

`ExtractState`\<`S`\>

> \<`T`\>(`selector`): `T`

### Type Parameters

#### T

`T`

### Parameters

#### selector

(`state`) => `T`

### Returns

`T`
