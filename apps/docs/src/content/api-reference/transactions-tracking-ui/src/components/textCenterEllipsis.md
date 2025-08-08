[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / textCenterEllipsis

# Function: textCenterEllipsis()

> **textCenterEllipsis**(`str`, `from`, `to`): `string`

Defined in: [packages/transactions-tracking-ui/src/utils/textCenterEllipsis.ts:20](https://github.com/TuwaIO/web3-transactions-tracking/blob/main/packages/transactions-tracking-ui/src/utils/textCenterEllipsis.ts#L20)

Truncates a string by showing a specified number of characters from the start and end,
with an ellipsis in the middle. If the string is too short to be truncated, it's returned as is.

## Parameters

### str

The string to truncate.

`undefined` | `null` | `string`

### from

`number`

The number of characters to show from the beginning of the string.

### to

`number`

The number of characters to show from the end of the string.

## Returns

`string`

The truncated string, or the original string if it's too short.

## Example

```ts
const hash = '0x1234567890abcdef1234567890abcdef';
textCenterEllipsis(hash, 6, 4); // => "0x1234...cdef"

textCenterEllipsis('short', 6, 4); // => "short"
```
