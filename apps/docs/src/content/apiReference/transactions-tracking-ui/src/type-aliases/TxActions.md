[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TxActions

> **TxActions** = `Record`\<`string`, () => `Promise`\<`unknown`\>\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:43](https://github.com/TuwaIO/web3-transactions-tracking/blob/ea59d6d2af883c1abd152bc759b34f842aad6dd3/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L43)

A registry of functions that can be re-executed via the 'Retry' button. The key should match `actionKey` on a transaction.
