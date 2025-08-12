[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# useInitializeTransactionsPool()

> **useInitializeTransactionsPool**(`initializeTransactionsPool`, `customErrorHandler?`): `void`

Defined in: [packages/evm-transactions-tracking/src/hooks/useInitializeTransactionsPool.tsx:34](https://github.com/TuwaIO/web3-transactions-tracking/blob/eaf021b82894acf37ea9a64502e1f9dcaf67a571/packages/evm-transactions-tracking/src/hooks/useInitializeTransactionsPool.tsx#L34)

A React hook that triggers the initialization of the transaction pool when the component mounts.
This ensures that any pending transactions from a previous session are picked up and tracked again.

## Parameters

### initializeTransactionsPool

() => `Promise`\<`void`\>

The `initializeTransactionsPool` function from the Zustand store.

### customErrorHandler?

(`error`) => `void`

An optional custom function to handle errors during initialization. Defaults to console.error.

## Returns

`void`
