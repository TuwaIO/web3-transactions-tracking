[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TuwaLabels

> **TuwaLabels** = `object`

Defined in: [packages/transactions-tracking-ui/src/i18n/types.ts:9](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/i18n/types.ts#L9)

Defines the complete structure for all customizable text labels used throughout the transaction tracking UI components.

## Properties

### actions

> **actions**: `object`

Defined in: [packages/transactions-tracking-ui/src/i18n/types.ts:114](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/i18n/types.ts#L114)

Labels for common action buttons/links.

#### cancel

> **cancel**: `string`

Text for a generic "Cancel" action.

#### close

> **close**: `string`

Text for a generic "Close" action.

#### copy

> **copy**: `string`

Text for a "Copy" action (e.g., copy address or hash).

#### speedUp

> **speedUp**: `string`

Text for a generic "Speed up" action.

#### viewOnExplorer

> **viewOnExplorer**: `string`

Text for a link to view the transaction on a block explorer.

***

### hashLabels

> **hashLabels**: `object`

Defined in: [packages/transactions-tracking-ui/src/i18n/types.ts:54](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/i18n/types.ts#L54)

Labels for different types of transaction hashes/keys.

#### default

> **default**: `string`

Default label for a standard transaction hash.

#### gelato

> **gelato**: `string`

Label for a Gelato Task ID.

#### original

> **original**: `string`

Label for the original transaction hash (before replacement).

#### replaced

> **replaced**: `string`

Label for the new transaction hash that replaced the original.

#### safe

> **safe**: `string`

Label for a Safe Transaction Hash.

***

### statuses

> **statuses**: `object`

Defined in: [packages/transactions-tracking-ui/src/i18n/types.ts:39](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/i18n/types.ts#L39)

Standard labels for transaction statuses.

#### failed

> **failed**: `string`

Text for a failed transaction.

#### pending

> **pending**: `string`

Text for a pending transaction.

#### replaced

> **replaced**: `string`

Text for a replaced transaction (e.g., sped up).

#### reverted

> **reverted**: `string`

Text for a reverted transaction.

#### success

> **success**: `string`

Text for a successful transaction.

#### unknown

> **unknown**: `string`

Text for an unknown or indeterminate status.

***

### toast

> **toast**: `object`

Defined in: [packages/transactions-tracking-ui/src/i18n/types.ts:34](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/i18n/types.ts#L34)

Labels related to toast notifications.

#### openWalletInfo

> **openWalletInfo**: `string`

Text for the button/link within a toast to open the wallet modal.

***

### trackedTxButton

> **trackedTxButton**: `object`

Defined in: [packages/transactions-tracking-ui/src/i18n/types.ts:103](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/i18n/types.ts#L103)

Labels for the main transaction action button.

#### failed

> **failed**: `string`

Text shown on the button if the transaction fails to initialize.

#### loading

> **loading**: `string`

Text shown on the button while the transaction is initializing.

#### replaced

> **replaced**: `string`

Text shown on the button if the transaction replaced to initialize.

#### succeed

> **succeed**: `string`

Text shown on the button after the transaction succeeds.

***

### trackingModal

> **trackingModal**: `object`

Defined in: [packages/transactions-tracking-ui/src/i18n/types.ts:81](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/i18n/types.ts#L81)

Labels for the detailed transaction tracking modal.

#### close

> **close**: `string`

Label for the close button.

#### processing

> **processing**: `string`

Text indicating that the transaction is being processed.

#### progressIndicator

> **progressIndicator**: `object`

Labels for the step-by-step progress indicator.

##### progressIndicator.created

> **created**: `string`

Label for the "transaction created" step.

##### progressIndicator.processing

> **processing**: `string`

Label for the "processing" step.

##### progressIndicator.succeed

> **succeed**: `string`

Label for the "succeed" or final step.

#### retry

> **retry**: `string`

Label for a button to retry a transaction.

#### title

> **title**: `string`

The main title of the tracking modal.

#### walletInfo

> **walletInfo**: `string`

Label for the button to open the main wallet info modal.

***

### txError

> **txError**: `object`

Defined in: [packages/transactions-tracking-ui/src/i18n/types.ts:74](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/i18n/types.ts#L74)

Labels for the transaction error block.

#### copied

> **copied**: `string`

Confirmation text shown after copying an error message.

#### title

> **title**: `string`

The title for the error details section.

***

### txInfo

> **txInfo**: `object`

Defined in: [packages/transactions-tracking-ui/src/i18n/types.ts:67](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/i18n/types.ts#L67)

Labels for the transaction information block.

#### network

> **network**: `string`

Label for the network name.

#### started

> **started**: `string`

Label indicating when the transaction was started.

***

### walletModal

> **walletModal**: `object`

Defined in: [packages/transactions-tracking-ui/src/i18n/types.ts:11](https://github.com/TuwaIO/web3-transactions-tracking/blob/1aebbce149913a5fb7a35a60e4556bc602bd2f8e/packages/transactions-tracking-ui/src/i18n/types.ts#L11)

Labels for the main wallet information modal.

#### header

> **header**: `object`

##### header.avatarAlt

> **avatarAlt**: `string`

Alt text for the wallet's avatar image.

##### header.notConnected

> **notConnected**: `string`

Text displayed when no wallet is connected.

#### history

> **history**: `object`

##### history.connectWalletMessage

> **connectWalletMessage**: `string`

The message displayed when the user needs to connect a wallet.

##### history.connectWalletTitle

> **connectWalletTitle**: `string`

The title displayed when the user needs to connect a wallet to see history.

##### history.noTransactionsMessage

> **noTransactionsMessage**: `string`

The message displayed when there are no transactions to show.

##### history.noTransactionsTitle

> **noTransactionsTitle**: `string`

The title displayed when the connected wallet has no transaction history.

##### history.title

> **title**: `string`

The title for the transaction history section.

#### title

> **title**: `string`

The title displayed at the top of the wallet modal.
