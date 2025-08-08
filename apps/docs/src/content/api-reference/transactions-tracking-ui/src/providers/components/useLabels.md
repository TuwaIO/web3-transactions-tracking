[**@tuwa/web3-txs-tracking-repo**](../../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../../README.md) / [transactions-tracking-ui/src/providers](../README.md) / useLabels

# useLabels()

> **useLabels**(): [`TuwaLabels`](../../type-aliases/TuwaLabels.md)

Defined in: [packages/transactions-tracking-ui/src/providers/LabelsProvider.tsx:42](https://github.com/TuwaIO/web3-transactions-tracking/blob/21552a1c460bd6fb4d2af4641aec8b8b8280f1ea/packages/transactions-tracking-ui/src/providers/LabelsProvider.tsx#L42)

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
