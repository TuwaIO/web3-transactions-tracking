'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useInitializeTransactionsPool } from '@tuwa/evm-transactions-tracking/dist';
import { createViemClient } from '@tuwa/evm-transactions-tracking/dist';
import { TransactionsWidget } from '@tuwa/transactions-tracking-ui/dist/providers/TransactionsWidget';
import { GetAccountReturnType, watchAccount } from '@wagmi/core';
import { useEffect, useState } from 'react';
import { Client } from 'viem';
import { readContract } from 'viem/actions';
import { sepolia } from 'viem/chains';

import { CounterAbi } from '@/abis/CounterAbi';
import { appChains, config } from '@/configs/wagmiConfig';
import { useTxTrackingStore } from '@/hooks/txTrackingHooks';
import { TxAction, txActions } from '@/transactions/actions';
import { TxType } from '@/transactions/onSucceedCallbacks';

export const COUNTER_ADDRESS = '0xAe7f46914De82028eCB7E2bF97Feb3D3dDCc2BAB';

export const TransactionsBlock = () => {
  const handleTransaction = useTxTrackingStore((state) => state.handleTransaction);
  const transactionsPool = useTxTrackingStore((state) => state.transactionsPool);
  const trackedTransaction = useTxTrackingStore((state) => state.trackedTransaction);
  const closeTxTrackedModal = useTxTrackingStore((state) => state.closeTxTrackedModal);
  const initializeTransactionsPool = useTxTrackingStore((store) => store.initializeTransactionsPool);

  const [currentCount, setCurrentCount] = useState(0);
  const [account, setAccount] = useState<GetAccountReturnType | undefined>(undefined);

  watchAccount(config, {
    onChange(account) {
      setAccount(account);
    },
  });

  useEffect(() => {
    readContract(createViemClient(sepolia.id, appChains) as Client, {
      abi: CounterAbi,
      address: COUNTER_ADDRESS,
      functionName: 'getCurrentNumber',
    }).then((count) => setCurrentCount(Number(count)));
  }, []);

  useInitializeTransactionsPool(initializeTransactionsPool);

  const handleIncrement = async () => {
    await handleTransaction({
      config,
      actionFunction: txActions.increment,
      params: {
        type: TxType.increment,
        desiredChainID: sepolia.id,
        actionKey: TxAction.increment,
        title: ['Incrementing', 'Incremented', 'Error when increment', 'Increment tx replaced'],
        description: [
          `Value after incrementing ${currentCount + 1}`,
          `Successes. Current value is ${currentCount + 1}`,
          'Something went wrong when increment.',
          'Transaction replaced. Please take a look details in your wallet.',
        ],
        payload: {
          value: currentCount,
        },
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
        title: ['Incrementing', 'Incremented', 'Error when increment', 'Increment tx replaced'],
        description: [
          `Value after incrementing ${currentCount + 1}`,
          `Successes. Current value is ${currentCount + 1}`,
          'Something went wrong when increment.',
          'Transaction replaced. Please take a look details in your wallet.',
        ],
        payload: {
          value: currentCount,
        },
        withTrackedModal: true,
      },
    });
  };

  return (
    <div>
      <div>
        <ConnectButton />

        <div className="mt-4">Current count: {currentCount}</div>

        <div>
          <button type="button" onClick={handleIncrement}>
            Increment TX
          </button>

          <button type="button" onClick={handleIncrementGelato}>
            Increment TX GELATO
          </button>
        </div>
      </div>

      <TransactionsWidget
        appChains={appChains}
        transactionsPool={transactionsPool}
        walletAddress={account?.address}
        trackedTransaction={trackedTransaction}
        closeTxTrackedModal={closeTxTrackedModal}
        config={config}
        handleTransaction={handleTransaction}
        actions={txActions}
      />
    </div>
  );
};
