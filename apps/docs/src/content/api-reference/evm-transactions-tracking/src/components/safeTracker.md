[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# safeTracker()

> **safeTracker**(`params`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/safeTracker.ts:136](https://github.com/TuwaIO/web3-transactions-tracking/blob/4a237b00ed848de7f49da6090247382e0e9beb07/packages/evm-transactions-tracking/src/trackers/safeTracker.ts#L136)

A low-level tracker for monitoring Safe multisig transactions.
It wraps the generic polling tracker with the Safe-specific fetcher logic.

## Parameters

### params

[`SafeTrackerParams`](../type-aliases/SafeTrackerParams.md)

## Returns

`Promise`\<`void`\>
