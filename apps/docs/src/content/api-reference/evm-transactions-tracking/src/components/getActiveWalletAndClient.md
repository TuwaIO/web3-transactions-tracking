[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

[@tuwa/web3-txs-tracking-repo](../../../README.md) / [evm-transactions-tracking/src](../README.md) / getActiveWalletAndClient

# getActiveWalletAndClient()

> **getActiveWalletAndClient**(`config`): `object`

Defined in: [packages/evm-transactions-tracking/src/utils/getActiveWalletAndClient.ts:16](https://github.com/TuwaIO/web3-transactions-tracking/blob/2043cd5621e576c11710316754b2017a7b544567/packages/evm-transactions-tracking/src/utils/getActiveWalletAndClient.ts#L16)

Retrieves the active wallet account and the viem Wallet Client from the wagmi config.
It ensures that a wallet is connected by throwing an error if it's not.

## Parameters

### config

`Config`

The wagmi configuration object.

## Returns

`object`

An object containing the connected account details and the viem Wallet Client.

### activeWallet

> **activeWallet**: `GetAccountReturnType`

### walletClient

> **walletClient**: `GetClientReturnType`

## Throws

Throws an error with the message "Wallet not connected" if no wallet is connected or the client is unavailable.
