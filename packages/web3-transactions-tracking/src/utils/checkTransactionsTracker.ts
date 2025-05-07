import { isGelatoTxKey } from '../trackers/gelatoTracker';
import { isSafeTxKey } from '../trackers/safeTracker';
import { ActionTxKey, TransactionTracker } from '../types';

export function checkTransactionsTracker(actionTxKey: ActionTxKey, actionWalletType: string) {
  let updatedTracker = TransactionTracker.Ethereum;
  let finalTxKey = '';

  if (isGelatoTxKey(actionTxKey)) {
    updatedTracker = TransactionTracker.Gelato;
    finalTxKey = actionTxKey.taskId;
  } else if (actionWalletType === 'safe' || isSafeTxKey(actionTxKey)) {
    updatedTracker = TransactionTracker.Safe;
    finalTxKey = isSafeTxKey(actionTxKey) ? actionTxKey.safeTxHash : actionTxKey;
  } else {
    finalTxKey = actionTxKey;
  }

  return {
    tracker: updatedTracker as TransactionTracker,
    txKey: finalTxKey,
  };
}
