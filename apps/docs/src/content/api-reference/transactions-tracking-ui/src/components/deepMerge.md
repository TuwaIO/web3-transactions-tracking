[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / deepMerge

# deepMerge()

> **deepMerge**\<`T`\>(`target`, `source`): `T`

Defined in: [packages/transactions-tracking-ui/src/utils/deepMerge.ts:30](https://github.com/TuwaIO/web3-transactions-tracking/blob/d33a798a7b6f5ea37a9cf7f32c6601e6ce651d45/packages/transactions-tracking-ui/src/utils/deepMerge.ts#L30)

Recursively merges the properties of a source object into a target object.
This function creates a new object and does not mutate the original target.

## Type Parameters

### T

`T` *extends* `object`

The type of the objects being merged.

## Parameters

### target

`T`

The base object.

### source

`Partial`\<`T`\>

The object with properties to merge into the target.

## Returns

`T`

A new object representing the merged result.

## Example

```ts
const defaults = { a: 1, b: { c: 2, d: 3 } };
const custom = { b: { c: 99 } };
const result = deepMerge(defaults, custom);
// result will be { a: 1, b: { c: 99, d: 3 } }
```
