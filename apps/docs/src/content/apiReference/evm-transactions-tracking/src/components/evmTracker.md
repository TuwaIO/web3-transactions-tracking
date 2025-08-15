[**@tuwaio/web3-txs-tracking-repo**](../../../README.md)

***

# evmTracker()

> **evmTracker**(`params`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/evmTracker.ts:58](https://github.com/TuwaIO/web3-transactions-tracking/blob/8756609a5523c78e41057cc5e1684ed645ee913e/packages/evm-transactions-tracking/src/trackers/evmTracker.ts#L58)

A low-level tracker for monitoring a standard EVM transaction by its hash.
It retries fetching the transaction and then waits for its receipt.

## Parameters

### params

[`EVMTrackerParams`](../type-aliases/EVMTrackerParams.md)

The configuration object for the tracker.

## Returns

`Promise`\<`void`\>

A promise that resolves when the tracking process is complete (or has terminally failed).
