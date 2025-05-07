'use client';

import { useEffect } from 'react';

export function InitializeTransactionsPoolProvider({
  initializeTransactionsPool,
}: {
  initializeTransactionsPool: () => Promise<void>;
}) {
  useEffect(() => {
    initializeTransactionsPool();
  }, []);

  return null;
}
