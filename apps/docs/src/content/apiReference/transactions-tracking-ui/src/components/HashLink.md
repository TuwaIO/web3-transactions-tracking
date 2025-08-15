[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# HashLink()

> **HashLink**(`props`): `Element`

Defined in: [packages/transactions-tracking-ui/src/components/HashLink.tsx:23](https://github.com/TuwaIO/web3-transactions-tracking/blob/a5b6681b81f2ac2ebab5a209571fc0fd463f436b/packages/transactions-tracking-ui/src/components/HashLink.tsx#L23)

A component to display a hash string (e.g., transaction hash or address)
with an optional label, a link to a block explorer, and a copy-to-clipboard button.

## Parameters

### props

The component props.

#### className?

`string`

Additional CSS classes to apply to the container element.

#### explorerUrl?

`string`

An optional URL to a block explorer. If provided, the hash becomes a link.

#### hash

`string`

The full hash string to display and copy.

#### label?

`string`

An optional label to display before the hash (e.g., "Tx Hash").

#### variant?

`"default"` \| `"compact"` = `'default'`

The visual style of the component.

## Returns

`Element`

The rendered HashLink component.
