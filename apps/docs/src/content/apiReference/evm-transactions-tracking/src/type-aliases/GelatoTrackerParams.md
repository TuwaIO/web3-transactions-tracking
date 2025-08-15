[**@tuwaio/web3-txs-tracking-repo**](../../../README.md)

***

# GelatoTrackerParams

> **GelatoTrackerParams** = `Pick`\<`InitializePollingTracker`\<[`GelatoTaskStatusResponse`](GelatoTaskStatusResponse.md), `InitialGelatoTx`, [`TransactionTracker`](../enumerations/TransactionTracker.md)\>, `"tx"` \| `"removeTxFromPool"` \| `"onInitialize"` \| `"onSucceed"` \| `"onFailed"` \| `"onIntervalTick"` \| `"pollingInterval"` \| `"retryCount"`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts:74](https://github.com/TuwaIO/web3-transactions-tracking/blob/65f363300724bdf9b035eaffd2ca6ee39c3a7709/packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts#L74)

Defines the parameters required for the low-level `gelatoTracker` function.
