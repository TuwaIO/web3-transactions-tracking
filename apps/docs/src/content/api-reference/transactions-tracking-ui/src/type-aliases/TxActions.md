[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TxActions

> **TxActions** = `Record`\<`string`, () => `Promise`\<`unknown`\>\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:38](https://github.com/TuwaIO/web3-transactions-tracking/blob/52081e426a0fe0411bfe24e5b138e8c5a0b34a42/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L38)

A registry of functions that can be re-executed via the 'Retry' button. The key should match `actionKey` on a transaction.
