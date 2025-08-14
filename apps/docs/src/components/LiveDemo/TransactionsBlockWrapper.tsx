'use client';

import { useInitializeTransactionsPool } from '@tuwa/evm-transactions-tracking';
import { createViemClient } from '@tuwa/evm-transactions-tracking';
import { TxActionButton } from '@tuwa/transactions-tracking-ui';
import { TransactionsWidget } from '@tuwa/transactions-tracking-ui/dist/providers';
import { Config } from '@wagmi/core';
import { ReactNode, useEffect, useState } from 'react';
import { Client } from 'viem';
import { readContract } from 'viem/actions';
import { sepolia } from 'viem/chains';
import { useAccount } from 'wagmi';

import { CounterAbi } from '@/abis/CounterAbi';
import { appChains } from '@/configs/wagmiConfig';
import { COUNTER_ADDRESS } from '@/constants';
import { useTxTrackingStore } from '@/hooks/txTrackingHooks';
import { TxAction, txActions } from '@/transactions/actions';
import { TxType } from '@/transactions/onSucceedCallbacks';

export const TransactionsBlockWrapper = ({ connectButton, config }: { connectButton: ReactNode; config: Config }) => {
  const handleTransaction = useTxTrackingStore((state) => state.handleTransaction);
  const transactionsPool = useTxTrackingStore((state) => state.transactionsPool);
  const closeTxTrackedModal = useTxTrackingStore((state) => state.closeTxTrackedModal);
  const initializeTransactionsPool = useTxTrackingStore((state) => state.initializeTransactionsPool);
  const getLastTxKey = useTxTrackingStore((state) => state.getLastTxKey);
  const initialTx = useTxTrackingStore((state) => state.initialTx);

  const [currentCount, setCurrentCount] = useState(0);
  const { address, chain } = useAccount();

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const count = await readContract(createViemClient(sepolia.id, appChains) as Client, {
          abi: CounterAbi,
          address: COUNTER_ADDRESS,
          functionName: 'getCurrentNumber',
        });
        setCurrentCount(Number(count));
      } catch (error) {
        console.error("Failed to fetch contract's current number:", error);
      }
    };
    fetchCount();
  }, [transactionsPool]); // Re-fetch when pool changes to show updated state

  useInitializeTransactionsPool(initializeTransactionsPool);

  const handleIncrement = async () => {
    await handleTransaction({
      config,
      actionFunction: async () => await txActions.increment({ config }),
      params: {
        type: TxType.increment,
        desiredChainID: sepolia.id,
        actionKey: TxAction.increment,
        title: ['Incrementing', 'Incremented', 'Increment Failed', 'Increment Replaced'],
        description: [
          `The new value will be ${currentCount + 1}`,
          `Success! The new value is ${currentCount + 1}`,
          'Something went wrong while incrementing.',
          'Transaction was replaced. Please check your wallet.',
        ],
        payload: { value: currentCount },
        withTrackedModal: true,
      },
    });
  };

  const handleIncrementGelato = async () => {
    await handleTransaction({
      config,
      actionFunction: txActions.incrementGelato,
      params: {
        type: TxType.increment,
        desiredChainID: sepolia.id,
        actionKey: TxAction.incrementGelato,
        title: ['Incrementing via Gelato', 'Incremented via Gelato', 'Gelato Increment Failed', 'Increment Replaced'],
        description: [
          `The new value will be ${currentCount + 1}`,
          `Success! The new value is ${currentCount + 1}`,
          'Something went wrong while incrementing via Gelato.',
          'Transaction was replaced. Please check your wallet.',
        ],
        payload: { value: currentCount },
        withTrackedModal: true,
      },
    });
  };

  return (
    <div className="my-6 rounded-xl border border-[var(--tuwa-border-secondary)] bg-[var(--tuwa-bg-secondary)]">
      <div className="flex justify-end p-4">{connectButton}</div>

      <div className="p-4 pt-0 sm:p-6 sm:pt-0">
        <div className="mb-6 rounded-lg bg-[var(--tuwa-bg-primary)] p-4 text-center">
          <p className="text-sm font-medium text-[var(--tuwa-text-secondary)]">Current Count</p>
          <p className="mt-1 text-4xl font-bold tracking-tight text-[var(--tuwa-text-primary)]">{currentCount}</p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <TxActionButton
            className="w-full sm:w-auto"
            action={handleIncrement}
            transactionsPool={transactionsPool}
            getLastTxKey={getLastTxKey}
            disabled={!address}
          >
            Increment Transaction
          </TxActionButton>
          <TxActionButton
            className="w-full sm:w-auto"
            action={handleIncrementGelato}
            transactionsPool={transactionsPool}
            getLastTxKey={getLastTxKey}
            disabled={!address}
          >
            Increment via Gelato
          </TxActionButton>
        </div>
      </div>

      <TransactionsWidget
        appChains={appChains}
        transactionsPool={transactionsPool}
        initialTx={initialTx}
        closeTxTrackedModal={closeTxTrackedModal}
        config={config}
        handleTransaction={handleTransaction}
        chain={chain}
        walletAddress={address}
        actions={txActions}
      />
    </div>
  );
};
