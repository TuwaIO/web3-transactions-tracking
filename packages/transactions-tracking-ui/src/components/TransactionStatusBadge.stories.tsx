import type { Meta, StoryObj } from '@storybook/react-vite';
import { TransactionTracker } from '@tuwa/evm-transactions-tracking/src';
import { Transaction, TransactionStatus } from '@tuwa/web3-transactions-tracking-core';
import { zeroAddress, zeroHash } from 'viem';
import { sepolia } from 'viem/chains';

import { TransactionStatusBadge } from './TransactionStatusBadge';

// Helper to create a base mock transaction.
const createMockTx = (overrides: Partial<Transaction<unknown>>): Transaction<unknown> => ({
  tracker: TransactionTracker.Ethereum,
  txKey: zeroHash,
  type: 'increment',
  chainId: sepolia.id,
  from: zeroAddress,
  pending: false,
  localTimestamp: Date.now(),
  walletType: 'injected',
  ...overrides, // Apply specific overrides for each story
});

const meta: Meta<typeof TransactionStatusBadge> = {
  title: 'UI Components/TransactionStatusBadge',
  component: TransactionStatusBadge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  // We define controls for the properties *inside* the `tx` object
  // to make them easily editable in the Storybook UI.
  argTypes: {
    tx: {
      pending: {
        control: 'boolean',
        description: 'Controls the `tx.pending` property. Takes precedence over status.',
      },
      status: {
        control: 'select',
        // The options are based on the new STATUS_CONFIG in your component
        options: [TransactionStatus.Success, TransactionStatus.Failed, TransactionStatus.Replaced],
        description: 'Controls the `tx.status` property when `pending` is false.',
      },
      replacedTxHash: {
        control: 'text',
        description: 'Controls the replaced tx hash property when status is replaced',
      },
      isError: {
        control: 'boolean',
        description: 'Controls the `isError` property.',
      },
      errorMessage: {
        control: 'text',
        description: 'Controls the `errorMessage` property.',
      },
    },
    className: {
      control: 'text',
      description: 'Optional additional CSS classes.',
    },
  },
  // The 'render' function constructs the `tx` prop from the simplified args.
  render: (args) => {
    const mockTx = createMockTx({ ...args.tx });
    return <TransactionStatusBadge tx={mockTx} className={args.className} />;
  },
};

export default meta;

// A Story type that includes our custom args
type Story = StoryObj<typeof meta & { args: { pending: boolean; status: TransactionStatus } }>;

// Story for the "Pending" state
export const Pending: Story = {
  args: {
    tx: {
      ...createMockTx({ pending: true }),
    },
  },
};

// Story for the "Success" state
export const Success: Story = {
  args: {
    tx: {
      ...createMockTx({ pending: false, status: TransactionStatus.Success }),
    },
  },
};

// Story for the "Failed" state
export const Failed: Story = {
  args: {
    tx: {
      ...createMockTx({ pending: false, status: TransactionStatus.Failed }),
    },
  },
};

// Story for the "Replaced" state
export const Replaced: Story = {
  args: {
    tx: {
      ...createMockTx({ pending: false, status: TransactionStatus.Replaced }),
    },
  },
};
