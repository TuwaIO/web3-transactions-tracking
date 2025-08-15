[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# gnosisSafeLinksHelper

> `const` **gnosisSafeLinksHelper**: `Record`\<`number`, `string`\>

Defined in: [packages/evm-transactions-tracking/src/utils/safeConstants.ts:25](https://github.com/TuwaIO/web3-transactions-tracking/blob/c12e1012b38a49f4546c719dd8dfd1a6bb4dbd9d/packages/evm-transactions-tracking/src/utils/safeConstants.ts#L25)

A mapping of chain IDs to their corresponding Safe web application URL prefixes.
Used by selectors like `selectTxExplorerLink` to build correct links for Safe transactions.
The prefixes (e.g., 'eth:', 'gor:') are part of the Safe URL scheme.
