[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# getActiveWalletAndClient()

> **getActiveWalletAndClient**(`config`): `object`

Defined in: [packages/evm-transactions-tracking/src/utils/getActiveWalletAndClient.ts:16](https://github.com/TuwaIO/web3-transactions-tracking/blob/06a37fe8e151c67b408e69e3e0bb027c0c35f48a/packages/evm-transactions-tracking/src/utils/getActiveWalletAndClient.ts#L16)

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
