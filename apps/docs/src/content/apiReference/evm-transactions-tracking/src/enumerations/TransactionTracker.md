[**@tuwaio/web3-txs-tracking-repo**](../../../README.md)

***

# TransactionTracker

Defined in: [packages/evm-transactions-tracking/src/types.ts:13](https://github.com/TuwaIO/web3-transactions-tracking/blob/65f363300724bdf9b035eaffd2ca6ee39c3a7709/packages/evm-transactions-tracking/src/types.ts#L13)

Enum representing the different tracking strategies available for EVM transactions.

## Enumeration Members

### Ethereum

> **Ethereum**: `"ethereum"`

Defined in: [packages/evm-transactions-tracking/src/types.ts:15](https://github.com/TuwaIO/web3-transactions-tracking/blob/65f363300724bdf9b035eaffd2ca6ee39c3a7709/packages/evm-transactions-tracking/src/types.ts#L15)

For standard on-chain EVM transactions tracked by their hash.

***

### Gelato

> **Gelato**: `"gelato"`

Defined in: [packages/evm-transactions-tracking/src/types.ts:19](https://github.com/TuwaIO/web3-transactions-tracking/blob/65f363300724bdf9b035eaffd2ca6ee39c3a7709/packages/evm-transactions-tracking/src/types.ts#L19)

For meta-transactions relayed through the Gelato Network.

***

### Safe

> **Safe**: `"safe"`

Defined in: [packages/evm-transactions-tracking/src/types.ts:17](https://github.com/TuwaIO/web3-transactions-tracking/blob/65f363300724bdf9b035eaffd2ca6ee39c3a7709/packages/evm-transactions-tracking/src/types.ts#L17)

For multi-signature transactions managed by a Safe contract.
