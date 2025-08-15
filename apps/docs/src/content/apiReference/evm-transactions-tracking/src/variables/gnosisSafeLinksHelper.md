[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# gnosisSafeLinksHelper

> `const` **gnosisSafeLinksHelper**: `Record`\<`number`, `string`\>

Defined in: [packages/evm-transactions-tracking/src/utils/safeConstants.ts:25](https://github.com/TuwaIO/web3-transactions-tracking/blob/770740dda3d4574741c78576c8d447a8659b112f/packages/evm-transactions-tracking/src/utils/safeConstants.ts#L25)

A mapping of chain IDs to their corresponding Safe web application URL prefixes.
Used by selectors like `selectTxExplorerLink` to build correct links for Safe transactions.
The prefixes (e.g., 'eth:', 'gor:') are part of the Safe URL scheme.
