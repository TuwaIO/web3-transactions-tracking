import { StoreApi, useStore } from 'zustand';

type ExtractState<S> = S extends { getState: () => infer X } ? X : never;

/**
 * Function that creates a bounded use store with a given store and selector. (zustand: https://zustand.docs.pmnd.rs/guides/typescript#bounded-usestore-hook-for-vanilla-stores)
 *
 * @template S - The type of store
 * @param {S} store - The store to use for state management.
 * @returns {Function} If no selector is provided, returns the whole state of the store. If a selector is provided, returns the selected state based on the selector function.
 */
export const createBoundedUseStore = ((store) => (selector) => useStore(store, selector)) as <
  S extends StoreApi<unknown>,
>(
  store: S,
) => {
  (): ExtractState<S>;
  <T>(selector: (state: ExtractState<S>) => T): T;
};
