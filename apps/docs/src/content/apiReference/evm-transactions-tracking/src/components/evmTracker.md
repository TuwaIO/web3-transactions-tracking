[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# evmTracker()

> **evmTracker**(`params`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:57](https://github.com/TuwaIO/web3-transactions-tracking/blob/a2b33dd12eef06eb58b1d85d26fc06937a20a7e4/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L57)

A low-level tracker for monitoring a standard EVM transaction by its hash.
It retries fetching the transaction and then waits for its receipt.

## Parameters

### params

[`EVMTrackerParams`](../type-aliases/EVMTrackerParams.md)

The configuration object for the tracker.

## Returns

`Promise`\<`void`\>

A promise that resolves when the tracking process is complete (or has terminally failed).
