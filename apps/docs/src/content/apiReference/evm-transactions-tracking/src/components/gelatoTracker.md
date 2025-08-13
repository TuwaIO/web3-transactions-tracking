[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# gelatoTracker()

> **gelatoTracker**(`params`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts:157](https://github.com/TuwaIO/web3-transactions-tracking/blob/1c531e3315ee04126f921b4f2611e5bf6a27395e/packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts#L157)

A low-level tracker for monitoring Gelato transactions. It wraps the generic polling
tracker with the Gelato-specific fetcher logic.

## Parameters

### params

[`GelatoTrackerParams`](../type-aliases/GelatoTrackerParams.md)

The configuration object for the tracker.

## Returns

`Promise`\<`void`\>
