[**@tuwa/web3-txs-tracking-repo**](../../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../../README.md) / [transactions-tracking-ui/src/providers](../README.md) / TransactionsWidgetProps

# TransactionsWidgetProps\<TR, T\>

> **TransactionsWidgetProps**\<`TR`, `T`\> = `object` & `Pick`\<`IInitializeTxTrackingStore`\<`TR`, `T`\>, `"closeTxTrackedModal"`\> & `ToastContainerProps` & `Pick`\<[`TrackingTxModalProps`](../../interfaces/TrackingTxModalProps.md)\<`TR`, `T`\>, `"handleTransaction"` \| `"actions"` \| `"config"` \| `"appChains"` \| `"transactionsPool"` \| `"initialTx"`\>

Defined in: [packages/transactions-tracking-ui/src/providers/TransactionsWidget.tsx:48](https://github.com/TuwaIO/web3-transactions-tracking/blob/b7157ec97601bac11089c33347f8d589c043b005/packages/transactions-tracking-ui/src/providers/TransactionsWidget.tsx#L48)

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
