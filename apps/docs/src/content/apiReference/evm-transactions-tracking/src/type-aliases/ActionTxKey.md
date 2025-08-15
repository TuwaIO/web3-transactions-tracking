[**@tuwaio/web3-txs-tracking-repo**](../../../README.md)

***

# ActionTxKey

> **ActionTxKey** = `Hex` \| [`GelatoTxKey`](GelatoTxKey.md)

Defined in: [packages/evm-transactions-tracking/src/types.ts:28](https://github.com/TuwaIO/web3-transactions-tracking/blob/8756609a5523c78e41057cc5e1684ed645ee913e/packages/evm-transactions-tracking/src/types.ts#L28)

Represents the unique identifier returned by an action function after a transaction is submitted.
This key is used to determine which tracker should monitor the transaction.
It can be a standard transaction hash or a structured key from a relay service like Gelato.
