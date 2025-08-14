[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TxActions

> **TxActions** = `Record`\<`string`, () => `Promise`\<`unknown`\>\>

Defined in: [packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx:43](https://github.com/TuwaIO/web3-transactions-tracking/blob/2268c81697cf1615c35dcbaf3ea349b793946511/packages/transactions-tracking-ui/src/components/TrackingTxModal/TrackingTxModal.tsx#L43)

A registry of functions that can be re-executed via the 'Retry' button. The key should match `actionKey` on a transaction.
