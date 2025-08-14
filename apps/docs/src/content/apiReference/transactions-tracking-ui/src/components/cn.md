[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# cn()

> **cn**(...`inputs`): `string`

Defined in: [packages/transactions-tracking-ui/src/utils/cn.ts:25](https://github.com/TuwaIO/web3-transactions-tracking/blob/a10c83309de467fc9c122360072c3c2a067cd4a4/packages/transactions-tracking-ui/src/utils/cn.ts#L25)

A utility function to conditionally join class names together and resolve
conflicting Tailwind CSS classes.

It combines the functionality of `clsx` and `tailwind-merge`.

## Parameters

### inputs

...`ClassValue`[]

A list of class values to be combined.
This can include strings, numbers, objects, arrays, and booleans.

## Returns

`string`

The final, merged class name string.

## Example

```ts
cn('p-4', 'bg-red-500', { 'font-bold': true }); // => 'p-4 bg-red-500 font-bold'
cn('p-2', 'p-4'); // => 'p-4' (tailwind-merge resolves the conflict)
```

## See

 - https://github.com/dcastil/tailwind-merge
 - https://github.com/lukeed/clsx
