export type TuwaLabels = {
  walletModal: {
    title: string;
    header: {
      notConnected: string;
      avatarAlt: string;
    };
    history: {
      title: string;
      connectWalletTitle: string;
      connectWalletMessage: string;
      noTransactionsTitle: string;
      noTransactionsMessage: string;
    };
  };
  toast: {
    openWalletInfo: string;
  };
  statuses: {
    pending: string;
    success: string;
    failed: string;
    reverted: string;
    replaced: string;
    unknown: string;
  };
  hashLabels: {
    gelato: string;
    safe: string;
    original: string;
    replaced: string;
    default: string;
  };
  actions: {
    copy: string;
    viewOnExplorer: string;
    close: string;
  };
};
