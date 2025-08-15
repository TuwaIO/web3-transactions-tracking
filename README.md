# TUWA Web3 Transaction Tracking Suite

<div align="center">
  <img src="./preview/tuwa_preview.gif" alt="TUWA Preview Demo" width="100%" max-width="800px" />
</div>

Tracking the status of user transactions in a dApp is complex. Users are often left wondering if their transaction succeeded, failed, or is simply pending. The **TUWA Web3 Transaction Tracking Suite** solves this by providing a complete, end-to-end solution to monitor transactions in real-time and present beautiful, informative feedback to your users.

This monorepo contains a collection of packages that work together to provide a seamless developer experience and a polished user interface out-of-the-box.

## Key Features

* **End-to-End Solution:** A complete toolkit covering everything from a core state engine and EVM-specific logic to pre-built React UI components.
* **Comprehensive Tracking:** Natively supports standard on-chain transactions, meta-transactions via **Gelato Network**, and multi-signature operations within a **Safe**.
* **Beautiful Pre-built UI:** A suite of toast notifications and modals, styled with Tailwind CSS, to get you started in minutes.
* **Highly Customizable:** Use our UI components out-of-the-box or provide your own custom components to match your dApp's branding.
* **Developer-Friendly:** Built with TypeScript, Zustand, and a modular architecture for a clean and predictable developer experience.

## Packages

This project is a monorepo containing the following packages:

| Package                                                                                  | Description                                                                                             | Version                                                                     |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |-----------------------------------------------------------------------------|
| [`@tuwaio/web3-transactions-tracking-core`](./packages/web3-transactions-tracking-core)     | The framework-agnostic core with the Zustand store, types, and foundational logic.                     | [](https://www.npmjs.com/package/%40tuwaio/web3-transactions-tracking-core) |
| [`@tuwaio/evm-transactions-tracking`](./packages/evm-transactions-tracking)                 | The EVM implementation layer with specialized trackers for on-chain, Gelato, and Safe transactions.      | [](https://www.npmjs.com/package/%40tuwaio/evm-transactions-tracking)       |
| [`@tuwaio/transactions-tracking-ui`](./packages/transactions-tracking-ui)                   | A set of pre-styled React components (toasts, modals) for a beautiful user experience out-of-the-box. | [](https://www.npmjs.com/package/%40tuwaio/transactions-tracking-ui)        |

## Running the Docs Project

To run the documentation and example website locally:

```bash
pnpm --filter docs dev
```

## Copyright

2025 TUWA

## License

[Apache License 2.0](./LICENSE)