[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# GelatoTrackerParams

> **GelatoTrackerParams** = `Pick`\<`InitializePollingTracker`\<[`GelatoTaskStatusResponse`](GelatoTaskStatusResponse.md), `InitialGelatoTx`, [`TransactionTracker`](../enumerations/TransactionTracker.md)\>, `"tx"` \| `"removeTxFromPool"` \| `"onInitialize"` \| `"onSucceed"` \| `"onFailed"` \| `"onIntervalTick"` \| `"pollingInterval"` \| `"retryCount"`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts:74](https://github.com/TuwaIO/web3-transactions-tracking/blob/4213bf7834a513b30af4118488533895caa3d00a/packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts#L74)

Defines the parameters required for the low-level `gelatoTracker` function.
