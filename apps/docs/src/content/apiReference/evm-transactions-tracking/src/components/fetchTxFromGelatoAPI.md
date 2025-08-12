[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# fetchTxFromGelatoAPI()

> **fetchTxFromGelatoAPI**(`params`): `Promise`\<`Response`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts:111](https://github.com/TuwaIO/web3-transactions-tracking/blob/9164bb13b3845660a18eb5abd8d55876b60a0d93/packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts#L111)

The fetcher function passed to `initializePollingTracker` to get the status of a Gelato task.

## Parameters

### params

`object` & `Pick`\<[`GelatoTrackerParams`](../type-aliases/GelatoTrackerParams.md), `"tx"` \| `"onSucceed"` \| `"onFailed"` \| `"onIntervalTick"`\>

The parameters for fetching the transaction status.

## Returns

`Promise`\<`Response`\>

The raw response from the fetch call.
