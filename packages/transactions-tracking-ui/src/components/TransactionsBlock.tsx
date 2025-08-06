// JUST for test remove after package finished

'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { createViemClient } from '@tuwa/evm-transactions-tracking/dist';
import { Client } from 'viem';
import { readContract } from 'viem/actions';
import { sepolia } from 'viem/chains';

import { CounterAbi } from '../abis/CounterAbi';
import { appChains, config } from '../configs/wagmiConfig';
import { COUNTER_ADDRESS } from '../constants';
import { useTxTrackingStore } from '../hooks/txTrackingHooks';
import { TxAction, txActions } from '../transactions/actions';
import { TxType } from '../transactions/onSucceedCallbacks';
import { TxActionButton } from './TxActionButton';

export const TransactionsBlock = () => {
  const handleTransaction = useTxTrackingStore((state) => state.handleTransaction);
  const trackedTransaction = useTxTrackingStore((state) => state.trackedTransaction);
  const getLastTxKey = useTxTrackingStore((state) => state.getLastTxKey);

  const handleIncrement = async () => {
    const currentCount = Number(
      await readContract(createViemClient(sepolia.id, appChains) as Client, {
        abi: CounterAbi,
        address: COUNTER_ADDRESS,
        functionName: 'getCurrentNumber',
      }),
    );

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
    const currentCount = Number(
      await readContract(createViemClient(sepolia.id, appChains) as Client, {
        abi: CounterAbi,
        address: COUNTER_ADDRESS,
        functionName: 'getCurrentNumber',
      }),
    );

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
      <ConnectButton />

      <div>
        <h2>Transactions</h2>

        <TxActionButton action={handleIncrement} trackedTransaction={trackedTransaction} getLastTxKey={getLastTxKey}>
          Increment TX
        </TxActionButton>
        <TxActionButton
          action={handleIncrementGelato}
          trackedTransaction={trackedTransaction}
          getLastTxKey={getLastTxKey}
        >
          Increment TX GELATO
        </TxActionButton>
      </div>
    </div>
  );
};
