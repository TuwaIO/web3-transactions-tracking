[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# safeTracker()

> **safeTracker**(`params`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/safeTracker.ts:136](https://github.com/TuwaIO/web3-transactions-tracking/blob/ffa5dbf79c04b57872450e9158d614053896b913/packages/evm-transactions-tracking/src/trackers/safeTracker.ts#L136)

A low-level tracker for monitoring Safe multisig transactions.
It wraps the generic polling tracker with the Safe-specific fetcher logic.

## Parameters

### params

[`SafeTrackerParams`](../type-aliases/SafeTrackerParams.md)

## Returns

`Promise`\<`void`\>
