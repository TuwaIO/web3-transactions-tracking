[**@tuwa/web3-txs-tracking-repo**](../../../../README.md)

***

# TransactionsWidgetProps\<TR, T\>

> **TransactionsWidgetProps**\<`TR`, `T`\> = `object` & `Pick`\<`IInitializeTxTrackingStore`\<`TR`, `T`\>, `"closeTxTrackedModal"`\> & `ToastContainerProps` & `Pick`\<[`TrackingTxModalProps`](../../interfaces/TrackingTxModalProps.md)\<`TR`, `T`\>, `"handleTransaction"` \| `"actions"` \| `"config"` \| `"appChains"` \| `"transactionsPool"` \| `"initialTx"`\>

Defined in: [packages/transactions-tracking-ui/src/providers/TransactionsWidget.tsx:36](https://github.com/TuwaIO/web3-transactions-tracking/blob/f8d699df89c32cb5de5ecc3bf5431b3c080f2660/packages/transactions-tracking-ui/src/providers/TransactionsWidget.tsx#L36)

## Type declaration

### chain?

> `optional` **chain**: `Chain`

### customization?

> `optional` **customization**: `object`

A single object to pass down deep customization options to all child components.

#### customization.toast?

> `optional` **toast**: [`ToastTransactionCustomization`](../../type-aliases/ToastTransactionCustomization.md)\<`TR`, `T`\>

#### customization.trackingTxModal?

> `optional` **trackingTxModal**: [`TrackingTxModalCustomization`](../../type-aliases/TrackingTxModalCustomization.md)\<`TR`, `T`\>

#### customization.walletInfoModal?

> `optional` **walletInfoModal**: [`WalletInfoModalCustomization`](../../type-aliases/WalletInfoModalCustomization.md)\<`TR`, `T`\>

### features?

> `optional` **features**: `object`

An object to enable or disable major UI features. All are enabled by default.

#### features.toasts?

> `optional` **toasts**: `boolean`

#### features.trackingTxModal?

> `optional` **trackingTxModal**: `boolean`

#### features.walletInfoModal?

> `optional` **walletInfoModal**: `boolean`

### labels?

> `optional` **labels**: `Partial`\<[`TuwaLabels`](../../type-aliases/TuwaLabels.md)\>

A partial object of labels to override the default English text.

### walletAddress?

> `optional` **walletAddress**: `string`

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>
