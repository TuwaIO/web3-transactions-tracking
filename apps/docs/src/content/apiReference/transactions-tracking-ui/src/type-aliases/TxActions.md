[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TxActions

> **TxActions** = `Record`\<`string`, (`config?`) => `Promise`\<`unknown`\>\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:43](https://github.com/TuwaIO/web3-transactions-tracking/blob/4213bf7834a513b30af4118488533895caa3d00a/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L43)

A registry of functions that can be re-executed via the 'Retry' button. The key should match `actionKey` on a transaction.
