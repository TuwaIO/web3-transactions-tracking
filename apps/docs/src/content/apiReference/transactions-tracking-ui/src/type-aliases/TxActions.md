[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TxActions

> **TxActions** = `Record`\<`string`, () => `Promise`\<`unknown`\>\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:38](https://github.com/TuwaIO/web3-transactions-tracking/blob/ef26e0214bae02134bca62097cf4b010e691f9d5/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L38)

A registry of functions that can be re-executed via the 'Retry' button. The key should match `actionKey` on a transaction.
