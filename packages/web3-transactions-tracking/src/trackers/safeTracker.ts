// import dayjs from 'dayjs';
//
// import { ITxTrackingStore } from '../store/txTrackingStore';
import { ActionTxKey } from '../types';

export type SafeTx = {
  safeTxHash: string;
};

export function isSafeTxKey(txKey: ActionTxKey): txKey is SafeTx {
  return (txKey as SafeTx).safeTxHash !== undefined;
}

// type SafeTxStatusResponse = {
//   transactionHash: string;
//   safeTxHash: string;
//   isExecuted: boolean;
//   isSuccessful: boolean | null;
//   executionDate: string | null;
//   submissionDate: string | null;
//   modified: string;
//   nonce: number;
// };

// type SafeTxSameNonceResponse = {
//   count: number;
//   countUniqueNonce: number;
//   results: SafeTxStatusResponse[];
// };
//
// type SafeTrackerParams<T extends Transaction> = Omit<TrackerParams<T>, 'chains' | 'onFailed'> & {
//   onSucceed: (safeResponse: SafeTxStatusResponse) => void;
//   onFailed: (safeResponse: SafeTxStatusResponse) => void;
//   onIntervalTick?: (safeResponse: SafeTxStatusResponse) => void;
//   removeTxFromPool?: (txKey: string) => void;
// };

// export async function safeTracker<T extends Transaction>({
//   onInitialize,
//   onSucceed,
//   onFailed,
//   onIntervalTick,
//   removeTxFromPool,
//   tx,
// }: SafeTrackerParams<T>) {
//   if (onInitialize) {
//     onInitialize();
//   }
//
//   let pollingInterval: number | undefined = undefined;
//   const isPending = tx.pending;
//   if (!isPending) {
//     return;
//   }
//   clearInterval(pollingInterval);
//
//   const clearWatch = (withoutRemoving?: boolean) => {
//     clearInterval(pollingInterval);
//     if (removeTxFromPool && !withoutRemoving) {
//       removeTxFromPool(tx.txKey);
//     }
//   };
//
//   let retryCount = 10;
//   pollingInterval = window.setInterval(async () => {
//     if (retryCount > 0) {
//       const response = await fetchTxFromGelatoAPI<T>({
//         taskId: tx.txKey,
//         onSucceed,
//         onFailed,
//         onIntervalTick,
//         clearWatch,
//       });
//       if (!response.ok) {
//         retryCount--;
//       }
//     } else {
//       clearWatch();
//       return;
//     }
//   }, 5000);
// }

// export async function safeTrackerForStore<T extends Transaction>({
//   tx,
//   transactionsPool,
//   updateTxParams,
//   onSucceedCallbacks,
//   removeTxFromPool,
// }: Pick<GelatoTrackerParams<T>, 'tx' | 'removeTxFromPool'> &
//   Pick<ITxTrackingStore<T>, 'transactionsPool' | 'updateTxParams' | 'onSucceedCallbacks'>) {
//   return await gelatoTracker<T>({
//     tx,
//     removeTxFromPool,
//     onSucceed: async (gelatoResponse) => {
//       updateTxParams({
//         txKey: tx.txKey,
//         status: TransactionStatus.Success,
//         pending: false,
//         hash: gelatoResponse.task.transactionHash,
//         finishedTimestamp: gelatoResponse.task.executionDate
//           ? dayjs(gelatoResponse.task.executionDate).unix()
//           : undefined,
//       });
//       const updatedTX = transactionsPool[tx.txKey];
//       onSucceedCallbacks(updatedTX);
//     },
//     onIntervalTick: async (gelatoResponse) => {
//       const pending = isGelatoTxPending(gelatoResponse.task.taskState);
//       const status =
//         gelatoResponse.task.taskState === 'ExecSuccess'
//           ? TransactionStatus.Success
//           : pending
//             ? undefined
//             : TransactionStatus.Reverted;
//
//       updateTxParams(
//         {
//           status,
//           pending,
//           txKey: tx.txKey,
//           hash: gelatoResponse.task.transactionHash,
//           finishedTimestamp: gelatoResponse.task.executionDate
//             ? dayjs(gelatoResponse.task.executionDate).unix()
//             : undefined,
//           errorMessage:
//             gelatoResponse.task.taskState > GelatoTaskState.WaitingForConfirmation
//               ? gelatoResponse.task.lastCheckMessage
//               : undefined,
//           isError: !pending && status !== TransactionStatus.Success,
//         },
//         true,
//       );
//     },
//     onFailed: (gelatoResponse) => {
//       updateTxParams({
//         txKey: tx.txKey,
//         status: TransactionStatus.Failed,
//         pending: false,
//         isError: true,
//         hash: gelatoResponse.task.transactionHash,
//         errorMessage: gelatoResponse.task.lastCheckMessage,
//         finishedTimestamp: gelatoResponse.task.executionDate
//           ? dayjs(gelatoResponse.task.executionDate).unix()
//           : undefined,
//       });
//     },
//   });
// }
//
// export class SafeAdapter<T extends BaseTx> implements AdapterInterface<T> {
//   startTxTracking = async (tx: PoolTx<T>) => {
//     if (isEthPoolTx(tx)) {
//       const isPending = tx.pending;
//       if (!isPending) {
//         return;
//       }
//
//       this.stopPollingSafeTXStatus(tx.hash);
//
//       let retryCount = 10;
//       const newGnosisInterval = setInterval(async () => {
//         if (retryCount > 0) {
//           const response = await this.fetchSafeTxStatus(tx.hash);
//           if (!response.ok) {
//             retryCount--;
//           }
//         } else {
//           this.stopPollingSafeTXStatus(tx.hash);
//           this.get().removeTXFromPool(tx.hash);
//           return;
//         }
//       }, 5000);
//
//       this.transactionsIntervalsMap[tx.hash] = Number(newGnosisInterval);
//     }
//   };
//
//   private fetchSafeTxStatus = async (txKey: string) => {
//     const tx = this.get().transactionsPool[txKey];
//     const response = await fetch(`${SafeTransactionServiceUrls[tx.chainId]}/multisig-transactions/${txKey}/`);
//
//     if (response.ok) {
//       const safeStatus = (await response.json()) as SafeTxStatusResponse;
//
//       if (!!safeStatus.nonce || safeStatus.nonce === 0) {
//         const allTxWithSameNonceResponse = await fetch(
//           `${SafeTransactionServiceUrls[tx.chainId]}/safes/${
//             this.get().activeWallet?.address
//           }/multisig-transactions/?nonce=${safeStatus.nonce}`,
//         );
//
//         if (allTxWithSameNonceResponse.ok) {
//           const sameNonceResponse = (await allTxWithSameNonceResponse.json()) as SafeTxSameNonceResponse;
//
//           const isPending = !safeStatus.isExecuted && sameNonceResponse.count <= 1;
//
//           // check if more than a day passed and tx wasn't executed still, remove the transaction from the pool
//           const gnosisStatusModified = dayjs(safeStatus.modified);
//           const currentTime = dayjs();
//           const daysPassed = currentTime.diff(gnosisStatusModified, 'day');
//           if (daysPassed >= 1 && isPending) {
//             this.stopPollingSafeTXStatus(txKey);
//             this.get().removeTXFromPool(txKey);
//             return response;
//           }
//
//           if (sameNonceResponse.count > 1) {
//             const replacedHash = sameNonceResponse.results.filter(
//               (safeTx) => safeTx.safeTxHash !== safeStatus.safeTxHash,
//             )[0].safeTxHash;
//
//             if (isHex(replacedHash)) {
//               this.updateSafeTxStatus(txKey, safeStatus, replacedHash);
//               this.stopPollingSafeTXStatus(txKey);
//               return response;
//             }
//           }
//
//           this.updateSafeTxStatus(txKey, safeStatus);
//
//           if (!isPending) {
//             this.stopPollingSafeTXStatus(txKey);
//             this.get().txStatusChangedCallback(tx);
//           }
//         }
//       }
//     }
//
//     return response;
//   };
//
//   private updateSafeTxStatus = (txKey: string, statusResponse: SafeTxStatusResponse, replacedHash?: Hex) => {
//     this.set((state) =>
//       produce(state, (draft) => {
//         let status = undefined;
//         if (statusResponse.isExecuted || !!replacedHash) {
//           if (statusResponse.isSuccessful) {
//             status = TransactionStatus.Success;
//           } else if (replacedHash) {
//             status = TransactionStatus.Replaced;
//           } else {
//             status = TransactionStatus.Reverted;
//           }
//         }
//
//         const pending = !statusResponse.isExecuted && !replacedHash;
//
//         if (isEthPoolTx(draft.transactionsPool[txKey])) {
//           draft.transactionsPool[txKey] = {
//             ...draft.transactionsPool[txKey],
//             pending,
//             status,
//             nonce: statusResponse.nonce,
//             replacedTxHash: replacedHash,
//             isError: !pending && status !== TransactionStatus.Success && status !== TransactionStatus.Replaced,
//           };
//         }
//       }),
//     );
//   };
// }
