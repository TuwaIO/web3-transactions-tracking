'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { createViemClient } from '@tuwa/evm-transactions-tracking/dist/utils/createViemClient';
import { useInitializeTransactionsPool } from '@tuwa/evm-transactions-tracking/src/hooks/useInitializeTransactionsPool';
import { TransactionsWidget } from '@tuwa/transactions-tracking-ui/src/providers/TransactionsWidget';
import { GetAccountReturnType, watchAccount } from '@wagmi/core';
import { useEffect, useState } from 'react';
import { Client } from 'viem';
import { readContract } from 'viem/actions';
import { sepolia } from 'viem/chains';

import { CounterAbi } from '@/abis/CounterAbi';
import { appChains, config } from '@/configs/wagmiConfig';
import { useTxTrackingStore } from '@/hooks/txTrackingHooks';
import { increment } from '@/transactions/actions/increment';
import { TxType } from '@/transactions/onSucceedCallbacks';

export const COUNTER_ADDRESS = '0xAe7f46914De82028eCB7E2bF97Feb3D3dDCc2BAB';

export const TransactionsBlock = () => {
  const handleTransaction = useTxTrackingStore((state) => state.handleTransaction);
  const transactionsPool = useTxTrackingStore((state) => state.transactionsPool);

  const initializeTransactionsPool = useTxTrackingStore((store) => store.initializeTransactionsPool);
  useInitializeTransactionsPool(initializeTransactionsPool);

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

  const handleIncrement = async () => {
    await handleTransaction({
      config,
      actionFunction: () => increment({ wagmiConfig: config }),
      params: {
        type: TxType.increment,
        desiredChainID: sepolia.id,
        payload: {
          value: currentCount,
        },
      },
    });
  };

  return (
    <div>
      <div>
        <ConnectButton />

        <div className="mt-4">Current count: {currentCount}</div>

        <div className="m-4">
          <button
            className="py-2.5 px-6 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            type="button"
            onClick={handleIncrement}
          >
            Execute increment TX
          </button>
        </div>
      </div>

      <TransactionsWidget appChains={appChains} transactionsPool={transactionsPool} walletAddress={account?.address} />
    </div>
  );
};
