[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# safeTracker()

> **safeTracker**(`params`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/safeTracker.ts:136](https://github.com/TuwaIO/web3-transactions-tracking/blob/3081a57d5574d8647dc433129ed2c38de6defd83/packages/evm-transactions-tracking/src/trackers/safeTracker.ts#L136)

A low-level tracker for monitoring Safe multisig transactions.
It wraps the generic polling tracker with the Safe-specific fetcher logic.

## Parameters

### params

[`SafeTrackerParams`](../type-aliases/SafeTrackerParams.md)

## Returns

`Promise`\<`void`\>
