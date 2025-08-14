[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# gelatoTracker()

> **gelatoTracker**(`params`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts:157](https://github.com/TuwaIO/web3-transactions-tracking/blob/b5153949c59e82f6ac101c4b51be3e5161d4301e/packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts#L157)

A low-level tracker for monitoring Gelato transactions. It wraps the generic polling
tracker with the Gelato-specific fetcher logic.

## Parameters

### params

[`GelatoTrackerParams`](../type-aliases/GelatoTrackerParams.md)

The configuration object for the tracker.

## Returns

`Promise`\<`void`\>
