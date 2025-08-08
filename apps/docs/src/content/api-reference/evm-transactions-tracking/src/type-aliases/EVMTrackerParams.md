[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [evm-transactions-tracking/src](../README.md) / EVMTrackerParams

# EVMTrackerParams

> **EVMTrackerParams** = `object`

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:27](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L27)

Defines the parameters for the low-level EVM transaction tracker.

## Properties

### chains

> **chains**: `Chain`[]

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:31](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L31)

An array of `viem` chain objects supported by the application.

***

### onFailed()

> **onFailed**: (`error?`) => `void`

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:37](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L37)

Callback executed if an error occurs during tracking or if the transaction fails.

#### Parameters

##### error?

`unknown`

#### Returns

`void`

***

### onFinished()

> **onFinished**: (`localTx`, `receipt`, `client`) => `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:33](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L33)

Callback executed when the transaction is successfully mined and included in a block.

#### Parameters

##### localTx

`GetTransactionReturnType`

##### receipt

`TransactionReceipt`

##### client

`Client`

#### Returns

`Promise`\<`void`\>

***

### onInitialize()?

> `optional` **onInitialize**: () => `void`

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:39](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L39)

Optional callback executed once when the tracker starts.

#### Returns

`void`

***

### onReplaced()

> **onReplaced**: (`replacement`) => `void`

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:35](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L35)

Callback executed when the transaction is replaced (e.g., sped up or cancelled).

#### Parameters

##### replacement

`ReplacementReturnType`

#### Returns

`void`

***

### retryCount?

> `optional` **retryCount**: `number`

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:41](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L41)

The number of times to retry fetching the transaction if it's not found initially. Defaults to 10.

***

### retryTimeout?

> `optional` **retryTimeout**: `number`

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:43](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L43)

The delay (in milliseconds) between retry attempts. Defaults to 3000ms.

***

### tx

> **tx**: `Pick`\<`Transaction`\<[`TransactionTracker`](../enumerations/TransactionTracker.md)\>, `"chainId"` \| `"txKey"`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:29](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L29)

The transaction object to track, requiring at least `chainId` and `txKey` (the transaction hash).

***

### waitForTransactionReceiptParams?

> `optional` **waitForTransactionReceiptParams**: `WaitForTransactionReceiptParameters`

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:45](https://github.com/TuwaIO/web3-transactions-tracking/blob/eb74fc944a51985cd6d7afc611dcca5bad5c8dfd/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L45)

Optional parameters to pass to viem's `waitForTransactionReceipt` function.
