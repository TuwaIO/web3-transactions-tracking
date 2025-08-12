[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# SafeTrackerParams

> **SafeTrackerParams** = `Pick`\<`InitializePollingTracker`\<[`SafeTxStatusResponse`](SafeTxStatusResponse.md), `InitialSafeTx`, [`TransactionTracker`](../enumerations/TransactionTracker.md)\>, `"tx"` \| `"removeTxFromPool"` \| `"onInitialize"` \| `"onSucceed"` \| `"onFailed"` \| `"onReplaced"` \| `"onIntervalTick"` \| `"pollingInterval"` \| `"retryCount"`\>

Defined in: [packages/evm-transactions-tracking/src/trackers/safeTracker.ts:53](https://github.com/TuwaIO/web3-transactions-tracking/blob/0faf1ab988a5a0ce7c9996180cb885a015a6e019/packages/evm-transactions-tracking/src/trackers/safeTracker.ts#L53)

Defines the parameters for the low-level `safeTracker` function.
