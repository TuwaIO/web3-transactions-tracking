[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# initializePollingTracker()

> **initializePollingTracker**\<`R`, `T`, `TR`\>(`params`): `Promise`\<`void`\>

Defined in: [packages/web3-transactions-tracking-core/src/utils/initializePollingTracker.ts:61](https://github.com/TuwaIO/web3-transactions-tracking/blob/f61e365332b37eac7250c41319315eecba3a08d6/packages/web3-transactions-tracking-core/src/utils/initializePollingTracker.ts#L61)

Initializes a generic polling tracker that repeatedly calls a fetcher function
to monitor the status of a transaction or any asynchronous task.

## Type Parameters

### R

`R`

The expected type of the successful API response.

### T

`T`

The type of the transaction object.

### TR

`TR`

The type of the tracker identifier.

## Parameters

### params

[`InitializePollingTracker`](../type-aliases/InitializePollingTracker.md)\<`R`, `T`, `TR`\>

The configuration object for the tracker.

## Returns

`Promise`\<`void`\>

A promise that resolves when the tracker is set up (note: polling happens asynchronously).
