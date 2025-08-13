[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# GelatoTrackerParams

> **GelatoTrackerParams** = `Pick`\<`InitializePollingTracker`\<[`GelatoTaskStatusResponse`](GelatoTaskStatusResponse.md), `InitialGelatoTx`, [`TransactionTracker`](../enumerations/TransactionTracker.md)\>, `"tx"` \| `"removeTxFromPool"` \| `"onInitialize"` \| `"onSucceed"` \| `"onFailed"` \| `"onIntervalTick"` \| `"pollingInterval"` \| `"retryCount"`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts:74](https://github.com/TuwaIO/web3-transactions-tracking/blob/1c531e3315ee04126f921b4f2611e5bf6a27395e/packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts#L74)

Defines the parameters required for the low-level `gelatoTracker` function.
