# @tuwa/transactions-tracking-ui

This package provides a suite of beautiful, pre-styled React components designed to work seamlessly with the TUWA Web3 transaction tracking ecosystem. Built with **Tailwind CSS**, this library offers a plug-and-play solution for providing users with real-time feedback on their transaction status.

The suite includes automated toast notifications, a detailed wallet history modal, a real-time tracking modal for active transactions, and a smart button that handles transaction states automatically.

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

This package requires you to have the following packages installed in your project: `react`, `react-dom`, `react-toastify`, `react-modal`, `framer-motion`, `tailwindcss`, and the other `@tuwa` core packages.

## Key Features

* **Automated UI:** The main `<TransactionsWidget />` component automatically handles the display of toast notifications and modals based on the state from the core store.
* **Comprehensive Components:** Includes a `ToastTransaction` notification, a `TrackingTxModal` for in-progress transactions, and a `WalletInfoModal` with detailed history.
* **Smart Action Button:** The `<TxActionButton />` is a stateful button that shows loading, success, and error states automatically when you pass it a transaction-triggering function.
* **Theming & Dark Mode:** All components are styled with a theming system using CSS variables, with out-of-the-box support for dark mode.
* **Full Customization:** A powerful `customization` prop allows you to override styles or completely replace any component with your own implementation ("slots").
* **Localization:** All user-facing text can be easily changed or translated by passing a `labels` object.

## Getting Started

Place the `<TransactionsWidget />` component in your main application layout. It is a self-contained component and does not wrap your app.

```jsx
// In your main layout file, e.g., Providers.tsx

import { TransactionsWidget } from '@tuwa/transactions-tracking-ui';
import { useTxTrackingStore } from '../hooks/txTrackingHooks'; // Your app's hook
import { txActions } from '../transactions/actions'; // Your app's action registry
import { appChains, config } from '../configs/wagmiConfig';
import { useAccount } from 'wagmi';

export function Providers({ children }) {
  // 1. Get all necessary state and functions from your Zustand store
  const {
    transactionsPool,
    trackedTransaction,
    closeTxTrackedModal,
    handleTransaction,
  } = useTxTrackingStore((state) => ({
    transactionsPool: state.transactionsPool,
    trackedTransaction: state.trackedTransaction,
    closeTxTrackedModal: state.closeTxTrackedModal,
    handleTransaction: state.handleTransaction,
  }));
  
  const { address } = useAccount();

  return (
    <>
      {children}
      
      {/* 2. Render the widget and pass all required props */}
      <TransactionsWidget
        transactionsPool={transactionsPool}
        trackedTransaction={trackedTransaction}
        closeTxTrackedModal={closeTxTrackedModal}
        handleTransaction={handleTransaction}
        actions={txActions}
        walletAddress={address}
        appChains={appChains}
        config={config}
      />
    </>
  );
}
```

## Advanced Customization

The `<TransactionsWidget />` offers powerful customization through three main props: `features`, `labels`, and `customization`.

### `features`

Control which UI elements are enabled.

```jsx
<TransactionsWidget
  features={{
    toasts: true,         // Show toast notifications
    trackingTxModal: true, // Show the real-time tracking modal
    walletInfoModal: true, // Enable the wallet info modal
  }}
  // ... other props
/>
```

### `labels`

Provide your own text for localization or branding.

```jsx
const myLabels = {
  trackingModal: {
    title: 'Transaction in Progress',
    close: 'Done',
  },
};

<TransactionsWidget labels={myLabels} /* ... */ />
```

### `customization`

Replace default components with your own using render props ("slots").

```jsx
const myCustomizations = {
  trackingTxModal: {
    components: {
      header: ({ tx }) => <div>Tracking: {tx.title}</div>,
    },
  },
};

<TransactionsWidget customization={myCustomizations} /* ... */ />
```

## Copyright

2025 TUWA

## License

[Apache License 2.0](./LICENSE)