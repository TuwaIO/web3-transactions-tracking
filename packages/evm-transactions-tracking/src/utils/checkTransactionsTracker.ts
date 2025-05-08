import { isGelatoTxKey } from '../trackers/gelatoTracker';
import { ActionTxKey, TransactionTracker } from '../types';

/**
 * Checks the type of transaction tracker based on the given action transaction key and wallet type.
 *
 * @param {ActionTxKey | string} actionTxKey - The action transaction key to determine the type of transaction.
 * @param {string} actionWalletType - The type of wallet associated with the action.
 *
 * @return {Object} An object containing the updated tracker type and the final transaction key.
 */
export function checkTransactionsTracker(
  actionTxKey: ActionTxKey,
  actionWalletType: string,
): { tracker: TransactionTracker; txKey: string } {
  let updatedTracker = TransactionTracker.Ethereum;
  let finalTxKey = '';

  if (isGelatoTxKey(actionTxKey)) {
    updatedTracker = TransactionTracker.Gelato;
    finalTxKey = actionTxKey.taskId;
  } else if (actionWalletType === 'safe') {
    updatedTracker = TransactionTracker.Safe;
    finalTxKey = actionTxKey;
  } else {
    finalTxKey = actionTxKey;
  }

  return {
    tracker: updatedTracker as TransactionTracker,
    txKey: finalTxKey,
  };
}
