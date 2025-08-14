[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# safeTracker()

> **safeTracker**(`params`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/safeTracker.ts:136](https://github.com/TuwaIO/web3-transactions-tracking/blob/a1e18c8dd44998cdb601034c1ed713d4d7c5d2f9/packages/evm-transactions-tracking/src/trackers/safeTracker.ts#L136)

A low-level tracker for monitoring Safe multisig transactions.
It wraps the generic polling tracker with the Safe-specific fetcher logic.

## Parameters

### params

[`SafeTrackerParams`](../type-aliases/SafeTrackerParams.md)

## Returns

`Promise`\<`void`\>
