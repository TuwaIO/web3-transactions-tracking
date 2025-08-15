# @tuwaio/web3-transactions-tracking-core

This package provides the core, headless engine for the TUWA Web3 transaction tracking suite. It manages the state of all tracked transactions, handling the full lifecycle from submission (pending) to finality (success, failed, reverted) and complex scenarios like dropped or replaced transactions.

Designed to be the foundational layer, this package exposes a powerful Zustand-based store, utility functions, and all necessary TypeScript types, allowing you to build custom UI components or integrate transaction tracking logic into any JavaScript/TypeScript application.

## Installation

Install the package with your favorite package manager:

**npm**

```bash
npm install @tuwaio/web3-transactions-tracking-core
```

**yarn**

```bash
yarn add @tuwaio/web3-transactions-tracking-core
```

**pnpm**

```bash
pnpm add @tuwaio/web3-transactions-tracking-core
```

**bun**

```bash
bun add @tuwaio/web3-transactions-tracking-core
```

## Key Features

* **Real-Time State Management:** A centralized Zustand store serves as the single source of truth for all transaction states.
* **Full Lifecycle Tracking:** Monitors transactions from `pending` through to `success`, `failed`, `reverted`, or `replaced` states.
* **Framework-Agnostic:** Contains pure TypeScript logic, making it compatible with React, Vue, Svelte, or any other framework.
* **TypeScript First:** Provides strong types for transactions, statuses, and store state, ensuring developer confidence.
* **Selectors for Derived State:** Includes helper selectors to easily compute derived data, such as explorer links.

## Copyright

2025 TUWA

## License

[Apache License 2.0](./LICENSE)