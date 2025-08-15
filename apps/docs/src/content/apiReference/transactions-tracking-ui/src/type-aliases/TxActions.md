[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TxActions

> **TxActions** = `Record`\<`string`, (...`args`) => `Promise`\<`unknown`\>\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:43](https://github.com/TuwaIO/web3-transactions-tracking/blob/c41f5708079d0be5a252ccc504a3465e6f5aafc4/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L43)

A registry of functions that can be re-executed via the 'Retry' button. The key should match `actionKey` on a transaction.
