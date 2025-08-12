[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TxActions

> **TxActions** = `Record`\<`string`, () => `Promise`\<`unknown`\>\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:38](https://github.com/TuwaIO/web3-transactions-tracking/blob/4a237b00ed848de7f49da6090247382e0e9beb07/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L38)

A registry of functions that can be re-executed via the 'Retry' button. The key should match `actionKey` on a transaction.
