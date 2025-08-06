import { config } from '../../configs/wagmiConfig';
import { increment } from './increment';
import { incrementGelato } from './incrementGelato';

export const txActions = {
  increment: () => increment({ wagmiConfig: config }),
  incrementGelato: () => incrementGelato(),
};

export type TxActionKey = keyof typeof txActions;

export const TxAction = Object.keys(txActions).reduce(
  (acc, key) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    acc[key as TxActionKey] = key as TxActionKey;
    return acc;
  },
  {} as { [K in TxActionKey]: K },
);
