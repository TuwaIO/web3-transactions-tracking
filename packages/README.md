# Packages

This directory contains the source code for all the individual, publishable npm packages that make up the TUWA Web3 Transaction Tracking Suite.

These packages are managed as part of a PNPM workspace and are designed to be used as dependencies in other projects.

## Core Packages

* **`./web3-transactions-tracking-core`**
    The framework-agnostic core package containing the Zustand store, types, and foundational logic.

* **`./evm-transactions-tracking`**
    The EVM implementation layer. Includes specialized trackers for on-chain, Gelato, and Safe transactions.

* **`./transactions-tracking-ui`**
    A library of pre-styled React components (toasts, modals, etc.) for a beautiful user experience out-of-the-box.
