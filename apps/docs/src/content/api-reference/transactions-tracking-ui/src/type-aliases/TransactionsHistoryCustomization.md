[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / TransactionsHistoryCustomization

# TransactionsHistoryCustomization\<TR, T\>

> **TransactionsHistoryCustomization**\<`TR`, `T`\> = `object`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionsHistory.tsx:18](https://github.com/TuwaIO/web3-transactions-tracking/blob/d33a798a7b6f5ea37a9cf7f32c6601e6ce651d45/packages/transactions-tracking-ui/src/components/TransactionsHistory.tsx#L18)

Defines the customization options for the TransactionsHistory component.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### classNames?

> `optional` **classNames**: `object`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionsHistory.tsx:19](https://github.com/TuwaIO/web3-transactions-tracking/blob/d33a798a7b6f5ea37a9cf7f32c6601e6ce651d45/packages/transactions-tracking-ui/src/components/TransactionsHistory.tsx#L19)

#### listWrapper?

> `optional` **listWrapper**: `string`

CSS classes for the list's wrapper `div`.

***

### components?

> `optional` **components**: `object`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionsHistory.tsx:23](https://github.com/TuwaIO/web3-transactions-tracking/blob/d33a798a7b6f5ea37a9cf7f32c6601e6ce651d45/packages/transactions-tracking-ui/src/components/TransactionsHistory.tsx#L23)

#### HistoryItem?

> `optional` **HistoryItem**: `ComponentType`\<[`TransactionHistoryItemProps`](TransactionHistoryItemProps.md)\<`TR`, `T`\>\>

A custom component to use instead of the default `TransactionHistoryItem`.
This should be a component type, not a render function.

#### placeholder()?

> `optional` **placeholder**: (`props`) => `ReactNode`

A render prop to replace the default placeholder component
(e.g., for "Connect Wallet" or "No Transactions").

##### Parameters

###### props

`CustomPlaceholderProps`

##### Returns

`ReactNode`
