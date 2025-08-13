[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# ToastTransactionCustomization\<TR, T\>

> **ToastTransactionCustomization**\<`TR`, `T`\> = `object`

Defined in: [packages/transactions-tracking-ui/src/components/ToastTransaction.tsx:32](https://github.com/TuwaIO/web3-transactions-tracking/blob/3081a57d5574d8647dc433129ed2c38de6defd83/packages/transactions-tracking-ui/src/components/ToastTransaction.tsx#L32)

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

Defined in: [packages/transactions-tracking-ui/src/components/ToastTransaction.tsx:33](https://github.com/TuwaIO/web3-transactions-tracking/blob/3081a57d5574d8647dc433129ed2c38de6defd83/packages/transactions-tracking-ui/src/components/ToastTransaction.tsx#L33)

#### cancelButton()?

> `optional` **cancelButton**: (`props`) => `ReactNode`

Override the default "Cancel" button.

##### Parameters

###### props

`CustomActionButtonProps`

##### Returns

`ReactNode`

#### speedUpButton()?

> `optional` **speedUpButton**: (`props`) => `ReactNode`

Override the default "Speed Up" button.

##### Parameters

###### props

`CustomActionButtonProps`

##### Returns

`ReactNode`

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

`CustomActionButtonProps`

##### Returns

`ReactNode`
