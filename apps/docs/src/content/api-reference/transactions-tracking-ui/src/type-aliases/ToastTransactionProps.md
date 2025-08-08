[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# ToastTransactionProps\<TR, T\>

> **ToastTransactionProps**\<`TR`, `T`\> = `object` & `Pick`\<[`WalletInfoModalProps`](../interfaces/WalletInfoModalProps.md)\<`TR`, `T`\>, `"transactionsPool"`\>

Defined in: [packages/transactions-tracking-ui/src/components/ToastTransaction.tsx:42](https://github.com/TuwaIO/web3-transactions-tracking/blob/23f986a0b4a0d56019b0420cc7b526ee2c895afb/packages/transactions-tracking-ui/src/components/ToastTransaction.tsx#L42)

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
