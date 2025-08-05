**@tuwa/evm-transactions-tracking**

This package provides a comprehensive suite of trackers for the EVM ecosystem, all included within this single library. It is designed to be the primary engine for monitoring on-chain activity, offering specialized modules for standard transactions, meta-transaction services like Gelato, and multi-signature solutions like Safe.

By connecting to a `viem` client, you can activate the specific trackers you need to listen for on-chain events and populate a central store with real-time status updates from various sources.

## Installation

Install the package with your favorite package manager:

**npm**

```bash
npm install @tuwa/evm-transactions-tracking
```

**yarn**

```bash
yarn add @tuwa/evm-transactions-tracking
```

**pnpm**

```bash
pnpm add @tuwa/evm-transactions-tracking
```

**bun**

```bash
bun add @tuwa/evm-transactions-tracking
```

## Key Features

* **Automatic Tracker Detection:** Includes a powerful utility function to automatically identify the transaction type (standard EVM, Gelato, or Safe) based on its key. This simplifies the process of routing transactions to the correct tracking logic.
* **Multiple Specialized Trackers:** A single package contains modules for standard on-chain transactions (by hash), Gelato meta-transactions (by Task ID), and Safe multi-sig operations.
* **Unified State Integration:** All trackers are designed to seamlessly feed data into the central Zustand store from `@tuwa/web3-transactions-tracking-core`, creating a single source of truth for all user activity.
* **Flexible Usage:** Activate only the trackers you need for your specific dApp, or use the package's functions in a standalone mode for targeted, lightweight tracking tasks.
* **Extensible Architecture:** The internal design allows developers to easily add their own custom trackers for other EVM-based protocols or services.

## Copyright

2025 TUWA

## License

[Apache License 2.0](./LICENSE)