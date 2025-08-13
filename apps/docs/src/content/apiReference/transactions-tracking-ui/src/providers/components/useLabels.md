[**@tuwa/web3-txs-tracking-repo**](../../../../README.md)

***

# useLabels()

> **useLabels**(): [`TuwaLabels`](../../type-aliases/TuwaLabels.md)

Defined in: [packages/transactions-tracking-ui/src/providers/LabelsProvider.tsx:42](https://github.com/TuwaIO/web3-transactions-tracking/blob/a2b33dd12eef06eb58b1d85d26fc06937a20a7e4/packages/transactions-tracking-ui/src/providers/LabelsProvider.tsx#L42)

A custom hook to easily access the i18n labels from any component
within the `LabelsProvider` tree.

## Returns

[`TuwaLabels`](../../type-aliases/TuwaLabels.md)

The complete object of UI labels.

## Example

```ts
const MyComponent = () => {
const labels = useLabels();
return <h1>{labels.walletModal.title}</h1>;
}
```
