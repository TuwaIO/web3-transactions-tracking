[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TransactionTracker

Defined in: [packages/evm-transactions-tracking/src/types.ts:13](https://github.com/TuwaIO/web3-transactions-tracking/blob/a5b6681b81f2ac2ebab5a209571fc0fd463f436b/packages/evm-transactions-tracking/src/types.ts#L13)

Enum representing the different tracking strategies available for EVM transactions.

## Enumeration Members

### Ethereum

> **Ethereum**: `"ethereum"`

Defined in: [packages/evm-transactions-tracking/src/types.ts:15](https://github.com/TuwaIO/web3-transactions-tracking/blob/a5b6681b81f2ac2ebab5a209571fc0fd463f436b/packages/evm-transactions-tracking/src/types.ts#L15)

For standard on-chain EVM transactions tracked by their hash.

***

### Gelato

> **Gelato**: `"gelato"`

Defined in: [packages/evm-transactions-tracking/src/types.ts:19](https://github.com/TuwaIO/web3-transactions-tracking/blob/a5b6681b81f2ac2ebab5a209571fc0fd463f436b/packages/evm-transactions-tracking/src/types.ts#L19)

For meta-transactions relayed through the Gelato Network.

***

### Safe

> **Safe**: `"safe"`

Defined in: [packages/evm-transactions-tracking/src/types.ts:17](https://github.com/TuwaIO/web3-transactions-tracking/blob/a5b6681b81f2ac2ebab5a209571fc0fd463f436b/packages/evm-transactions-tracking/src/types.ts#L17)

For multi-signature transactions managed by a Safe contract.
