# @tuwa/transactions-tracking-ui

This package provides a suite of beautiful, pre-styled React components designed to work seamlessly with the TUWA Web3 transaction tracking ecosystem. Built with **Tailwind CSS** and **`react-toastify`**, these components offer a plug-and-play solution for providing users with real-time feedback on their transaction status.

Simply wrap your application with our provider, and you'll get instant, informative toast notifications for all tracked user transactions.

*(A GIF demonstrating the toast notifications and modal window would look great here)*

## Installation

Install the package with your favorite package manager:

**npm**

```bash
npm install @tuwa/transactions-tracking-ui
```

**yarn**

```bash
yarn add @tuwa/transactions-tracking-ui
```

**pnpm**

```bash
pnpm add @tuwa/transactions-tracking-ui
```

**bun**

```bash
bun add @tuwa/transactions-tracking-ui
```

### Peer Dependencies

This package requires you to have the following packages installed in your project:

* `react`
* `react-dom`
* `tailwindcss`
* `react-toastify`

You must also have `@tuwa/web3-transactions-tracking-core` and `@tuwa/evm-transactions-tracking` installed and configured.

## Key Components

* **`TransactionsWidget`**: The main component that wraps your application. It orchestrates the tracking logic from the core packages and provides the context for all UI components.
* **`ToastTransaction`**: The default component rendered inside `react-toastify` notifications, displaying transaction details, status, and actions.
* **`WalletInfoModal`**: A modal window that displays detailed information about a wallet, including its address, ENS name, and transaction history.

## Getting Started

To get started, wrap your root application component with the `TransactionsWidget`.

```jsx
// In your _app.tsx or main layout file

import { TransactionsWidget } from '@tuwa/transactions-tracking-ui'; // Corrected import
import { txTrackingStore } from '@tuwa/web3-transactions-tracking-core';
import { mainnet, polygon } from 'viem/chains';
import { useAccount } from 'wagmi';

// Assume you have initialized the EVM tracker elsewhere in your app

function MyApp({ Component, pageProps }) {
  // Get the live data from your store and wallet connection
  const transactionsPool = txTrackingStore((state) => state.transactionsPool); // Using your version
  const { address } = useAccount();

  return (
    <TransactionsWidget
      transactionsPool={transactionsPool}
      walletAddress={address}
      appChains={[mainnet, polygon]}
    >
      {/* Your application goes here */}
      <Component {...pageProps} />
    </TransactionsWidget>
  );
}

export default MyApp;
```

Once the widget is in place, it will automatically listen for transaction updates from the core store and display notifications.

## Customization

For maximum flexibility, the `TransactionsWidget` accepts a `renderToast` prop. This allows you to completely replace the default notification component with your own custom React component to perfectly match your dApp's branding.

```jsx
const MyCustomToast = ({ tx }) => <div>Custom view for {tx.txKey}</div>;

<TransactionsWidget
  // ...other props
  renderToast={(props) => <MyCustomToast {...props} />}
>
  <YourApp />
</TransactionsWidget>
```

## Copyright

2025 TUWA

## License

[Apache License 2.0](https://www.google.com/search?q=./LICENSE)