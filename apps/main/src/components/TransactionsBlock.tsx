'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { createViemClient } from '@tuwa/web3-transactions-tracking/src/helpers/createViemClient';
import { Client } from 'viem';
import { readContract } from 'viem/actions';
import { sepolia } from 'viem/chains';

import { CounterAbi } from '@/abis/CounterAbi';
import { appChains, config } from '@/configs/wagmiConfig';
import { useTxTrackingStore } from '@/hooks/txTrackingHooks';
import { incrementGelato } from '@/transactions/actions/incrementGelato';
import { TxType } from '@/transactions/onSucceedCallbacks';

export const COUNTER_ADDRESS = '0xAe7f46914De82028eCB7E2bF97Feb3D3dDCc2BAB';

export const TransactionsBlock = () => {
  const handleTransaction = useTxTrackingStore((state) => state.handleTransaction);
  const transactionsPool = useTxTrackingStore((state) => state.transactionsPool);
  const trackedTransaction = useTxTrackingStore((state) => state.trackedTransaction);

  const handleIncrement = async () => {
    await handleTransaction({
      config,
      actionFunction: () => incrementGelato(),
      params: {
        type: TxType.increment,
        desiredChainID: sepolia.id,
        payload: {
          value: Number(
            await readContract(createViemClient(sepolia.id, appChains) as Client, {
              abi: CounterAbi,
              address: COUNTER_ADDRESS,
              functionName: 'getCurrentNumber',
            }),
          ),
        },
      },
    });
  };

  console.log(trackedTransaction);

  return (
    <div>
      <ConnectButton />

      <div>
        <h2>Transactions</h2>

        <button type="button" onClick={handleIncrement}>
          Increment TX
        </button>

        {Object.values(transactionsPool).map((transaction) => (
          <div key={transaction.txKey} style={{ marginBottom: 10 }}>
            {transaction.txKey} <p>{transaction.status}</p>{' '}
          </div>
        ))}
      </div>
    </div>
  );
};
