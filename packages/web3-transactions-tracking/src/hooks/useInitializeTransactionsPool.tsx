'use client';

import { useEffect } from 'react';

/**
 * Function to load transactions by initializing transactions pool and handling errors.
 *
 * @param {Function} initializeTransactionsPool - A function that initializes transactions pool
 * @param {Function} errorHandler - A function that handles errors
 * @returns {Promise<void>}
 */
const loadTransactions = async (
  initializeTransactionsPool: () => Promise<void>,
  errorHandler: (error: Error) => void,
): Promise<void> => {
  try {
    await initializeTransactionsPool();
  } catch (error) {
    errorHandler(error as Error);
  }
};

/**
 * Executes the given function to initialize transactions pool and sets up error handling.
 * @param {Function} initializeTransactionsPool - Function that initializes transactions pool
 */
export const useInitializeTransactionsPool = (initializeTransactionsPool: () => Promise<void>) => {
  const handleError = (error: Error) => {
    console.error(error);
  };
  useEffect(() => {
    loadTransactions(initializeTransactionsPool, handleError);
  }, [initializeTransactionsPool]);
};
