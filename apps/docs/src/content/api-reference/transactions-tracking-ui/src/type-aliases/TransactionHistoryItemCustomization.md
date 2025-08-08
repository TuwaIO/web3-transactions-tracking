[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TransactionHistoryItemCustomization\<TR, T\>

> **TransactionHistoryItemCustomization**\<`TR`, `T`\> = `object`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx:33](https://github.com/TuwaIO/web3-transactions-tracking/blob/23f986a0b4a0d56019b0420cc7b526ee2c895afb/packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx#L33)

Defines the structure for the `customization` prop, allowing users to override
default sub-components with their own implementations for a history item.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### components?

> `optional` **components**: `object`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx:34](https://github.com/TuwaIO/web3-transactions-tracking/blob/23f986a0b4a0d56019b0420cc7b526ee2c895afb/packages/transactions-tracking-ui/src/components/TransactionHistoryItem.tsx#L34)

#### description()?

> `optional` **description**: (`props`) => `ReactNode`

Override the default description component.

##### Parameters

###### props

`CustomStatusAwareTextProps`

##### Returns

`ReactNode`

#### icon()?

> `optional` **icon**: (`props`) => `ReactNode`

Override the default chain icon.

##### Parameters

###### props

`CustomIconProps`

##### Returns

`ReactNode`

#### statusBadge()?

> `optional` **statusBadge**: (`props`) => `ReactNode`

Override the default status badge component.

##### Parameters

###### props

`CustomStatusBadgeProps`\<`TR`, `T`\>

##### Returns

`ReactNode`

#### timestamp()?

> `optional` **timestamp**: (`props`) => `ReactNode`

Override the default timestamp component.

##### Parameters

###### props

`CustomTimestampProps`

##### Returns

`ReactNode`

#### title()?

> `optional` **title**: (`props`) => `ReactNode`

Override the default title component.

##### Parameters

###### props

`CustomStatusAwareTextProps`

##### Returns

`ReactNode`

#### transactionKey()?

> `optional` **transactionKey**: (`props`) => `ReactNode`

Override the default component for displaying transaction keys/hashes.

##### Parameters

###### props

`CustomTransactionKeyProps`\<`TR`, `T`\>

##### Returns

`ReactNode`
