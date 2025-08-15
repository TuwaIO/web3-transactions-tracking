[**@tuwaio/web3-txs-tracking-repo**](../../../README.md)

***

# ToastTransactionKeyProps\<TR, T\>

Defined in: [packages/transactions-tracking-ui/src/components/TransactionKey.tsx:19](https://github.com/TuwaIO/web3-transactions-tracking/blob/8756609a5523c78e41057cc5e1684ed645ee913e/packages/transactions-tracking-ui/src/components/TransactionKey.tsx#L19)

## Extends

- `Pick`\<[`WalletInfoModalProps`](WalletInfoModalProps.md)\<`TR`, `T`\>, `"transactionsPool"`\>

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### appChains

> **appChains**: `Chain`[]

Defined in: [packages/transactions-tracking-ui/src/components/TransactionKey.tsx:24](https://github.com/TuwaIO/web3-transactions-tracking/blob/8756609a5523c78e41057cc5e1684ed645ee913e/packages/transactions-tracking-ui/src/components/TransactionKey.tsx#L24)

An array of supported chain objects, used for generating explorer links.

***

### className?

> `optional` **className**: `string`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionKey.tsx:28](https://github.com/TuwaIO/web3-transactions-tracking/blob/8756609a5523c78e41057cc5e1684ed645ee913e/packages/transactions-tracking-ui/src/components/TransactionKey.tsx#L28)

Optional additional CSS classes for the container.

***

### renderHashLink()?

> `optional` **renderHashLink**: (`props`) => `ReactNode`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionKey.tsx:33](https://github.com/TuwaIO/web3-transactions-tracking/blob/8756609a5523c78e41057cc5e1684ed645ee913e/packages/transactions-tracking-ui/src/components/TransactionKey.tsx#L33)

An optional render prop to allow for complete customization of how the hash link is rendered.
If not provided, the default `HashLink` component will be used.

#### Parameters

##### props

###### className?

`string`

###### explorerUrl?

`string`

###### hash

`string`

###### label?

`string`

###### variant?

`"default"` \| `"compact"`

#### Returns

`ReactNode`

***

### transactionsPool

> **transactionsPool**: `TransactionPool`\<`TR`, `T`\>

Defined in: [packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx:57](https://github.com/TuwaIO/web3-transactions-tracking/blob/8756609a5523c78e41057cc5e1684ed645ee913e/packages/transactions-tracking-ui/src/components/WalletInfoModal/WalletInfoModal.tsx#L57)

The entire pool of transactions from the store.

#### Inherited from

`Pick.transactionsPool`

***

### tx

> **tx**: `T`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionKey.tsx:22](https://github.com/TuwaIO/web3-transactions-tracking/blob/8756609a5523c78e41057cc5e1684ed645ee913e/packages/transactions-tracking-ui/src/components/TransactionKey.tsx#L22)

The transaction object to display identifiers for.

***

### variant?

> `optional` **variant**: `"toast"` \| `"history"`

Defined in: [packages/transactions-tracking-ui/src/components/TransactionKey.tsx:26](https://github.com/TuwaIO/web3-transactions-tracking/blob/8756609a5523c78e41057cc5e1684ed645ee913e/packages/transactions-tracking-ui/src/components/TransactionKey.tsx#L26)

The visual variant, which applies different container styles.
