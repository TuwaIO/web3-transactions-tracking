[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [evm-transactions-tracking/src](../README.md) / gnosisSafeLinksHelper

# gnosisSafeLinksHelper

> `const` **gnosisSafeLinksHelper**: `Record`\<`number`, `string`\>

Defined in: [packages/evm-transactions-tracking/src/utils/safeConstants.ts:25](https://github.com/TuwaIO/web3-transactions-tracking/blob/0ddfef8585a5b555079dba5742e10bcf23985a9e/packages/evm-transactions-tracking/src/utils/safeConstants.ts#L25)

A mapping of chain IDs to their corresponding Safe web application URL prefixes.
Used by selectors like `selectTxExplorerLink` to build correct links for Safe transactions.
The prefixes (e.g., 'eth:', 'gor:') are part of the Safe URL scheme.
