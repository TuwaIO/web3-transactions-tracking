[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / ToastTransactionProps

# ToastTransactionProps\<TR, T\>

> **ToastTransactionProps**\<`TR`, `T`\> = `object` & `Pick`\<[`WalletInfoModalProps`](../interfaces/WalletInfoModalProps.md)\<`TR`, `T`\>, `"transactionsPool"`\>

Defined in: [packages/transactions-tracking-ui/src/components/ToastTransaction.tsx:42](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/transactions-tracking-ui/src/components/ToastTransaction.tsx#L42)

## Type declaration

### appChains

> **appChains**: `Chain`[]

An array of supported chain objects.

### className?

> `optional` **className**: `string`

Optional additional CSS classes for the toast container.

### closeToast?

> `optional` **closeToast**: `ToastContentProps`\[`"closeToast"`\]

### customization?

> `optional` **customization**: [`ToastTransactionCustomization`](ToastTransactionCustomization.md)\<`TR`, `T`\>

An object to customize and override the default internal components.

### icon?

> `optional` **icon**: `ReactNode`

An optional custom icon to display instead of the default chain icon.

### openWalletInfoModal()?

> `optional` **openWalletInfoModal**: (`value`) => `void`

A function to open the main wallet info modal.

#### Parameters

##### value

`boolean`

#### Returns

`void`

### toastProps?

> `optional` **toastProps**: `ToastContainerProps`

### tx

> **tx**: `T`

The transaction object to display in the toast.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>
