[**@tuwaio/web3-txs-tracking-repo**](../../../README.md)

***

# fetchTxFromSafeAPI()

> **fetchTxFromSafeAPI**(`__namedParameters`): `Promise`\<`Response`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/safeTracker.ts:70](https://github.com/TuwaIO/web3-transactions-tracking/blob/8756609a5523c78e41057cc5e1684ed645ee913e/packages/evm-transactions-tracking/src/trackers/safeTracker.ts#L70)

The fetcher function passed to `initializePollingTracker` to get the status of a Safe transaction.

## Parameters

### \_\_namedParameters

`object` & `Pick`\<[`SafeTrackerParams`](../type-aliases/SafeTrackerParams.md), `"tx"` \| `"onSucceed"` \| `"onFailed"` \| `"onIntervalTick"` \| `"onReplaced"`\>

## Returns

`Promise`\<`Response`\>

The raw response from the fetch call.
