[**@tuwaio/web3-txs-tracking-repo**](../../../README.md)

***

# SafeTrackerParams

> **SafeTrackerParams** = `Pick`\<`InitializePollingTracker`\<[`SafeTxStatusResponse`](SafeTxStatusResponse.md), `InitialSafeTx`, [`TransactionTracker`](../enumerations/TransactionTracker.md)\>, `"tx"` \| `"removeTxFromPool"` \| `"onInitialize"` \| `"onSucceed"` \| `"onFailed"` \| `"onReplaced"` \| `"onIntervalTick"` \| `"pollingInterval"` \| `"retryCount"`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/safeTracker.ts:53](https://github.com/TuwaIO/web3-transactions-tracking/blob/65f363300724bdf9b035eaffd2ca6ee39c3a7709/packages/evm-transactions-tracking/src/trackers/safeTracker.ts#L53)

Defines the parameters for the low-level `safeTracker` function.
