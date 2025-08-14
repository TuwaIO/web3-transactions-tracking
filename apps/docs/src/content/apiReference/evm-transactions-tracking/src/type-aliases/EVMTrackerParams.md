[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# EVMTrackerParams

> **EVMTrackerParams** = `object`

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:28](https://github.com/TuwaIO/web3-transactions-tracking/blob/a10c83309de467fc9c122360072c3c2a067cd4a4/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L28)

Defines the parameters for the low-level EVM transaction tracker.

## Properties

### chains

> **chains**: `Chain`[]

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:32](https://github.com/TuwaIO/web3-transactions-tracking/blob/a10c83309de467fc9c122360072c3c2a067cd4a4/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L32)

An array of `viem` chain objects supported by the application.

***

### onFailed()

> **onFailed**: (`error?`) => `void`

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:40](https://github.com/TuwaIO/web3-transactions-tracking/blob/a10c83309de467fc9c122360072c3c2a067cd4a4/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L40)

Callback executed if an error occurs during tracking or if the transaction fails.

#### Parameters

##### error?

`unknown`

#### Returns

`void`

***

### onFinished()

> **onFinished**: (`localTx`, `receipt`, `client`) => `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:36](https://github.com/TuwaIO/web3-transactions-tracking/blob/a10c83309de467fc9c122360072c3c2a067cd4a4/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L36)

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

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:42](https://github.com/TuwaIO/web3-transactions-tracking/blob/a10c83309de467fc9c122360072c3c2a067cd4a4/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L42)

Optional callback executed once when the tracker starts.

#### Returns

`void`

***

### onReplaced()

> **onReplaced**: (`replacement`) => `void`

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:38](https://github.com/TuwaIO/web3-transactions-tracking/blob/a10c83309de467fc9c122360072c3c2a067cd4a4/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L38)

Callback executed when the transaction is replaced (e.g., sped up or cancelled).

#### Parameters

##### replacement

`ReplacementReturnType`

#### Returns

`void`

***

### onTxDetailsGot()

> **onTxDetailsGot**: (`localTx`) => `void`

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:34](https://github.com/TuwaIO/web3-transactions-tracking/blob/a10c83309de467fc9c122360072c3c2a067cd4a4/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L34)

Callback executed when the getTransaction info got successfully.

#### Parameters

##### localTx

`GetTransactionReturnType`

#### Returns

`void`

***

### retryCount?

> `optional` **retryCount**: `number`

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:44](https://github.com/TuwaIO/web3-transactions-tracking/blob/a10c83309de467fc9c122360072c3c2a067cd4a4/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L44)

The number of times to retry fetching the transaction if it's not found initially. Defaults to 10.

***

### retryTimeout?

> `optional` **retryTimeout**: `number`

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:46](https://github.com/TuwaIO/web3-transactions-tracking/blob/a10c83309de467fc9c122360072c3c2a067cd4a4/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L46)

The delay (in milliseconds) between retry attempts. Defaults to 3000ms.

***

### tx

> **tx**: `Pick`\<`Transaction`\<[`TransactionTracker`](../enumerations/TransactionTracker.md)\>, `"chainId"` \| `"txKey"`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:30](https://github.com/TuwaIO/web3-transactions-tracking/blob/a10c83309de467fc9c122360072c3c2a067cd4a4/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L30)

The transaction object to track, requiring at least `chainId` and `txKey` (the transaction hash).

***

### waitForTransactionReceiptParams?

> `optional` **waitForTransactionReceiptParams**: `WaitForTransactionReceiptParameters`

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:48](https://github.com/TuwaIO/web3-transactions-tracking/blob/a10c83309de467fc9c122360072c3c2a067cd4a4/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L48)

Optional parameters to pass to viem's `waitForTransactionReceipt` function.
