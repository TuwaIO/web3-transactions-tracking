[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# fetchTxFromGelatoAPI()

> **fetchTxFromGelatoAPI**(`params`): `Promise`\<`Response`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts:111](https://github.com/TuwaIO/web3-transactions-tracking/blob/b5153949c59e82f6ac101c4b51be3e5161d4301e/packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts#L111)

The fetcher function passed to `initializePollingTracker` to get the status of a Gelato task.

## Parameters

### params

`object` & `Pick`\<[`GelatoTrackerParams`](../type-aliases/GelatoTrackerParams.md), `"tx"` \| `"onSucceed"` \| `"onFailed"` \| `"onIntervalTick"`\>

The parameters for fetching the transaction status.

## Returns

`Promise`\<`Response`\>

The raw response from the fetch call.
