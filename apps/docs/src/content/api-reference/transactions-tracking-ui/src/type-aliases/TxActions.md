[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / TxActions

# TxActions

> **TxActions** = `Record`\<`string`, () => `Promise`\<`unknown`\>\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:38](https://github.com/TuwaIO/web3-transactions-tracking/blob/d33a798a7b6f5ea37a9cf7f32c6601e6ce651d45/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L38)

A registry of functions that can be re-executed via the 'Retry' button. The key should match `actionKey` on a transaction.
