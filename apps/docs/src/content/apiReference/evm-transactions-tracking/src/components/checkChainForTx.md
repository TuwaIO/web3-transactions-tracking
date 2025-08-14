[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# checkChainForTx()

> **checkChainForTx**(`chainId`, `config`): `Promise`\<`void`\>

Defined in: [packages/evm-transactions-tracking/src/utils/checkChainForTx.ts:18](https://github.com/TuwaIO/web3-transactions-tracking/blob/29463b139f3cc0ab8a7212190f71db95208ba6cc/packages/evm-transactions-tracking/src/utils/checkChainForTx.ts#L18)

Checks if the user's wallet is connected to the specified chain. If not, it prompts
the user to switch to the correct chain and waits for the operation to complete.

## Parameters

### chainId

`number`

The ID of the desired blockchain network.

### config

`Config`

The wagmi configuration object.

## Returns

`Promise`\<`void`\>

A promise that resolves when the wallet is on the correct chain,
or rejects if the user cancels the switch or an error occurs.

## Throws

Throws an error if the user rejects the chain switch or if the switch fails.
