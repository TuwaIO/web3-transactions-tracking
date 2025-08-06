import { Draft, produce } from 'immer';

import { StoreSlice, Transaction, TransactionStatus } from '../types';

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

  trackedTransaction?: {
    initializedOnChain: boolean;
    isFailed: boolean;
    isSucceed: boolean;
    isReplaced: boolean;
    isProcessing: boolean;
    error: string;
    tx?: T;
    isTrackedModalOpen?: boolean;
  };

  addTxToPool: ({ tx }: { tx: T }) => void;
  updateTxParams: (fields: UpdatedParamsFields<TR>, withTracked?: boolean) => void;
  updateTxParamsForTrackedTransaction: (fields: UpdatedParamsFields<TR>) => void;
  removeTxFromPool: (txKey: string) => void;

  openTxTrackedModal: () => void;
  closeTxTrackedModal: () => void;
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
    updateTxParams: (tx, withTracked) => {
      set((state) =>
        produce(state, (draft) => {
          draft.transactionsPool[tx.txKey] = {
            ...draft.transactionsPool[tx.txKey],
            ...tx,
          };
        }),
      );
      if (withTracked) {
        get().updateTxParamsForTrackedTransaction(tx);
      }
    },
    updateTxParamsForTrackedTransaction: (tx) => {
      set((state) =>
        produce(state, (draft) => {
          draft.trackedTransaction = {
            ...draft.trackedTransaction,
            initializedOnChain: draft.trackedTransaction?.initializedOnChain || false,
            isSucceed: tx?.status === TransactionStatus.Success,
            isReplaced: tx?.status === TransactionStatus.Replaced,
            error: tx?.errorMessage ?? '',
            isFailed: !!tx.errorMessage || tx.isError || false,
            isProcessing: draft.trackedTransaction?.isProcessing || false,
            tx: draft.trackedTransaction?.tx
              ? ({
                  ...draft.trackedTransaction?.tx,
                  ...tx,
                } as Draft<T>)
              : undefined,
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

    openTxTrackedModal: () => {
      set((state) =>
        produce(state, (draft) => {
          if (draft.trackedTransaction) {
            draft.trackedTransaction = {
              ...draft.trackedTransaction,
              isTrackedModalOpen: true,
            };
          }
        }),
      );
    },
    closeTxTrackedModal: () => {
      set((state) =>
        produce(state, (draft) => {
          if (draft.trackedTransaction) {
            if (!draft.trackedTransaction.isProcessing) {
              draft.trackedTransaction = undefined;
            } else {
              draft.trackedTransaction = {
                ...draft.trackedTransaction,
                isTrackedModalOpen: false,
              };
            }
          }
        }),
      );
    },
  });
}
