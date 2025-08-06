import { TuwaLabels } from './types';

export const defaultLabels: TuwaLabels = {
  walletModal: {
    title: 'Wallet & Transactions',
    header: {
      notConnected: 'Wallet not connected',
      avatarAlt: 'Avatar for',
    },
    history: {
      title: 'Transactions History',
      connectWalletTitle: 'Connect Wallet',
      connectWalletMessage: 'Please connect your wallet to see your past activity.',
      noTransactionsTitle: 'No Transactions Yet',
      noTransactionsMessage: 'Once you interact with the app, your transaction history will appear here.',
    },
  },
  toast: {
    openWalletInfo: 'Open wallet info',
  },
  statuses: {
    pending: 'Pending',
    success: 'Success',
    failed: 'Failed',
    reverted: 'Reverted',
    replaced: 'Replaced',
    unknown: 'Unknown',
  },
  hashLabels: {
    gelato: 'Gelato Task ID',
    safe: 'Safe Tx Hash',
    original: 'Original Tx Hash',
    replaced: 'Replaced Tx Hash',
    default: 'Transaction Hash',
  },
  actions: {
    copy: 'Copy address',
    viewOnExplorer: 'View on explorer',
    close: 'Close',
  },
};
