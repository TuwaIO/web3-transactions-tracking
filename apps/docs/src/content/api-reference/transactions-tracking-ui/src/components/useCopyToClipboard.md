[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / useCopyToClipboard

# useCopyToClipboard()

> **useCopyToClipboard**(`timeout?`): `object`

Defined in: [packages/transactions-tracking-ui/src/hooks/useCopyToClipboard.ts:30](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/transactions-tracking-ui/src/hooks/useCopyToClipboard.ts#L30)

A custom React hook that provides functionality to copy text to the clipboard.
It also manages a "copied" state with a timeout for user feedback.

## Parameters

### timeout?

`number` = `2000`

The duration in milliseconds to keep the `isCopied` state as true.

## Returns

`object`

An object containing the `isCopied` state, the `copy` function, and any potential error.

### copy()

> **copy**: (`text`) => `Promise`\<`void`\>

#### Parameters

##### text

`string`

#### Returns

`Promise`\<`void`\>

### error

> **error**: `null` \| `Error`

### isCopied

> **isCopied**: `boolean`

## Example

```ts
const MyComponent = () => {
const { isCopied, copy } = useCopyToClipboard();
const textToCopy = '0x123...';

return (
<button onClick={() => copy(textToCopy)}>
{isCopied ? 'Copied!' : 'Copy Address'}
</button>
);
}
```
