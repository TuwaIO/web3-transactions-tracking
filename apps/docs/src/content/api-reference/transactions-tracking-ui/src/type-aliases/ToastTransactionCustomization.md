[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / ToastTransactionCustomization

# ToastTransactionCustomization\<TR, T\>

> **ToastTransactionCustomization**\<`TR`, `T`\> = `object`

Defined in: [packages/transactions-tracking-ui/src/components/ToastTransaction.tsx:29](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/transactions-tracking-ui/src/components/ToastTransaction.tsx#L29)

Defines the structure for the `customization` prop, allowing users to override
default sub-components with their own implementations.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### components?

> `optional` **components**: `object`

Defined in: [packages/transactions-tracking-ui/src/components/ToastTransaction.tsx:30](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/transactions-tracking-ui/src/components/ToastTransaction.tsx#L30)

#### statusAwareText()?

> `optional` **statusAwareText**: (`props`) => `ReactNode`

Override the default title/description component.

##### Parameters

###### props

`CustomStatusAwareTextProps`

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

#### transactionKey()?

> `optional` **transactionKey**: (`props`) => `ReactNode`

Override the default component for displaying transaction keys/hashes.

##### Parameters

###### props

`CustomTransactionKeyProps`\<`TR`, `T`\>

##### Returns

`ReactNode`

#### walletInfoButton()?

> `optional` **walletInfoButton**: (`props`) => `ReactNode`

Override the default "Open wallet info" button.

##### Parameters

###### props

`CustomWalletInfoButtonProps`

##### Returns

`ReactNode`
