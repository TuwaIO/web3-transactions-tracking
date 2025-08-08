[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [transactions-tracking-ui/src](../README.md) / WalletInfoModalProps

# WalletInfoModalProps\<TR, T\>

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:49](https://github.com/TuwaIO/web3-transactions-tracking/blob/21552a1c460bd6fb4d2af4641aec8b8b8280f1ea/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L49)

Defines the core props for the WalletInfoModal and its children.

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### appChains

> **appChains**: `Chain`[]

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:57](https://github.com/TuwaIO/web3-transactions-tracking/blob/21552a1c460bd6fb4d2af4641aec8b8b8280f1ea/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L57)

An array of all chains supported by the application.

***

### chain?

> `optional` **chain**: `Chain`

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:53](https://github.com/TuwaIO/web3-transactions-tracking/blob/21552a1c460bd6fb4d2af4641aec8b8b8280f1ea/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L53)

The viem `Chain` object for the currently connected network.

***

### transactionsPool

> **transactionsPool**: `TransactionPool`\<`TR`, `T`\>

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:55](https://github.com/TuwaIO/web3-transactions-tracking/blob/21552a1c460bd6fb4d2af4641aec8b8b8280f1ea/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L55)

The entire pool of transactions from the store.

***

### walletAddress?

> `optional` **walletAddress**: `` `0x${string}` ``

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:51](https://github.com/TuwaIO/web3-transactions-tracking/blob/21552a1c460bd6fb4d2af4641aec8b8b8280f1ea/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L51)

The connected wallet's address.
