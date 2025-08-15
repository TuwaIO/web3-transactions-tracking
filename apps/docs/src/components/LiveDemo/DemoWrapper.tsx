'use client';

import React from 'react';

import { ConnectKitTransactionsBlock } from '@/components/LiveDemo/ConnectKitTransactionsBlock';

export function DemoWrapper() {
  return (
    <div className="mt-6">
      <div>
        <h3 className="mb-4 text-xl font-semibold text-[var(--tuwa-text-primary)]">
          Choose your preferred wallet connector:
        </h3>
        <ConnectKitTransactionsBlock />
      </div>
    </div>
  );
}
