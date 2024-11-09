import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './box';

const meta = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    display: {
      control: 'select',
      options: ['flex', 'inline-flex', 'block', 'inline-block', 'none'],
    },
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    p: {
      control: 'number',
    },
    px: {
      control: 'number',
    },
    py: {
      control: 'number',
    },
    pt: {
      control: 'number',
    },
    pr: {
      control: 'number',
    },
    pb: {
      control: 'number',
    },
    pl: {
      control: 'number',
    },
    m: {
      control: 'number',
    },
    mx: {
      control: 'number',
    },
    my: {
      control: 'number',
    },
    mt: {
      control: 'number',
    },
    mr: {
      control: 'number',
    },
    mb: {
      control: 'number',
    },
    ml: {
      control: 'number',
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
    as: {
      control: 'select',
      options: ['div', 'span', 'button', 'a'],
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary button',
  },
};
