[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TransactionStatus

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:24](https://github.com/TuwaIO/web3-transactions-tracking/blob/c41f5708079d0be5a252ccc504a3465e6f5aafc4/packages/web3-transactions-tracking-core/src/types.ts#L24)

Represents the final statuses of a transaction.

## Enumeration Members

### Failed

> **Failed**: `"Failed"`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:26](https://github.com/TuwaIO/web3-transactions-tracking/blob/c41f5708079d0be5a252ccc504a3465e6f5aafc4/packages/web3-transactions-tracking-core/src/types.ts#L26)

Indicates that the transaction failed to execute.

***

### Replaced

> **Replaced**: `"Replaced"`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:30](https://github.com/TuwaIO/web3-transactions-tracking/blob/c41f5708079d0be5a252ccc504a3465e6f5aafc4/packages/web3-transactions-tracking-core/src/types.ts#L30)

Indicates that the transaction was replaced by another one (e.g., speed-up).

***

### Success

> **Success**: `"Success"`

Defined in: [packages/web3-transactions-tracking-core/src/types.ts:28](https://github.com/TuwaIO/web3-transactions-tracking/blob/c41f5708079d0be5a252ccc504a3465e6f5aafc4/packages/web3-transactions-tracking-core/src/types.ts#L28)

Indicates that the transaction was successfully mined and executed.
