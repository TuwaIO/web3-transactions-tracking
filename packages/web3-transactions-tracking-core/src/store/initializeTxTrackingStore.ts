import { Draft, produce } from 'immer';

import { InitialTransaction, StoreSlice, Transaction } from '../types';

export type TransactionPool<TR, T extends Transaction<TR>> = Record<string, T>;

type UpdatedParamsFields<TR> = Pick<
  Transaction<TR>,
  | 'to'
  | 'nonce'
  | 'txKey'
  | 'pending'
  | 'isError'
  | 'hash'
  | 'status'
  | 'replacedTxHash'
  | 'errorMessage'
  | 'finishedTimestamp'
>;

export type IInitializeTxTrackingStore<TR, T extends Transaction<TR>> = {
  onSucceedCallbacks?: (tx: T) => void;

  transactionsPool: TransactionPool<TR, T>;
  lastAddedTxKey?: string;
  initialTx?: InitialTransaction;

  addTxToPool: ({ tx }: { tx: T }) => void;
  updateTxParams: (fields: UpdatedParamsFields<TR>) => void;
  removeTxFromPool: (txKey: string) => void;

  closeTxTrackedModal: (txKey?: string) => void;
  getLastTxKey: () => string | undefined;
};

export function initializeTxTrackingStore<TR, T extends Transaction<TR>>({
  onSucceedCallbacks,
}: {
  onSucceedCallbacks?(tx: unknown): Promise<void>;
}): StoreSlice<IInitializeTxTrackingStore<TR, T>> {
  return (set, get) => ({
    onSucceedCallbacks,

    transactionsPool: {},

    addTxToPool: ({ tx }) => {
      set({ lastAddedTxKey: tx.txKey });
      set((state) =>
        produce(state, (draft) => {
          if (tx.txKey) {
            draft.transactionsPool[tx.txKey] = {
              ...tx,
              pending: true,
            } as Draft<T>;
          }
        }),
      );
    },
    updateTxParams: (tx) => {
      set((state) =>
        produce(state, (draft) => {
          draft.transactionsPool[tx.txKey] = {
            ...draft.transactionsPool[tx.txKey],
            ...tx,
          };
        }),
      );
    },
    removeTxFromPool: (txKey) => {
      set((state) =>
        produce(state, (draft) => {
          delete draft.transactionsPool[txKey];
        }),
      );
    },

    closeTxTrackedModal: (txKey) => {
      if (txKey) {
        set((state) =>
          produce(state, (draft) => {
            draft.transactionsPool[txKey] = {
              ...draft.transactionsPool[txKey],
              isTackingModalOpen: false,
            };
          }),
        );
      }
      set({ initialTx: undefined });
    },
    getLastTxKey: () => {
      return get().lastAddedTxKey;
    },
  });
}
