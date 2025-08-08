[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# fetchTxFromGelatoAPI()

> **fetchTxFromGelatoAPI**(`params`): `Promise`\<`Response`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts:111](https://github.com/TuwaIO/web3-transactions-tracking/blob/52081e426a0fe0411bfe24e5b138e8c5a0b34a42/packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts#L111)

The fetcher function passed to `initializePollingTracker` to get the status of a Gelato task.

## Parameters

### params

`object` & `Pick`\<[`GelatoTrackerParams`](../type-aliases/GelatoTrackerParams.md), `"tx"` \| `"onSucceed"` \| `"onFailed"` \| `"onIntervalTick"`\>

The parameters for fetching the transaction status.

## Returns

`Promise`\<`Response`\>

The raw response from the fetch call.
