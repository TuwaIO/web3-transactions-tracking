[**@tuwaio/web3-txs-tracking-repo**](../../../README.md)

***

# getActiveWalletAndClient()

> **getActiveWalletAndClient**(`config`): `object`

Defined in: [packages/evm-transactions-tracking/src/utils/getActiveWalletAndClient.ts:16](https://github.com/TuwaIO/web3-transactions-tracking/blob/e8fc17df1e7aa9c38ef9c156281f0501e50bc7fd/packages/evm-transactions-tracking/src/utils/getActiveWalletAndClient.ts#L16)

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
