[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# ActionTxKey

> **ActionTxKey** = `Hex` \| [`GelatoTxKey`](GelatoTxKey.md)

Defined in: [packages/evm-transactions-tracking/src/types.ts:28](https://github.com/TuwaIO/web3-transactions-tracking/blob/b63ee874e01b037e0ee503214c6cfe4d0ac7491c/packages/evm-transactions-tracking/src/types.ts#L28)

Represents the unique identifier returned by an action function after a transaction is submitted.
This key is used to determine which tracker should monitor the transaction.
It can be a standard transaction hash or a structured key from a relay service like Gelato.
