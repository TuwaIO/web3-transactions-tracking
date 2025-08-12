[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# evmTracker()

> **evmTracker**(`params`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:55](https://github.com/TuwaIO/web3-transactions-tracking/blob/eaf021b82894acf37ea9a64502e1f9dcaf67a571/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L55)

A low-level tracker for monitoring a standard EVM transaction by its hash.
It retries fetching the transaction and then waits for its receipt.

## Parameters

### params

[`EVMTrackerParams`](../type-aliases/EVMTrackerParams.md)

The configuration object for the tracker.

## Returns

`Promise`\<`void`\>

A promise that resolves when the tracking process is complete (or has terminally failed).
