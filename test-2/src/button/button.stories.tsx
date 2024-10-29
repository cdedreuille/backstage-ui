import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '../../.storybook/create-theme';

const meta = {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
  },
  args: {
    size: 'medium',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary button',
    variant: 'secondary',
  },
};

export const Sizes: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button {...args} size="small" />
      <Button {...args} size="medium" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

const customTheme = createTheme({
  components: {
    Button: {
      primaryBackgroundColor: 'blue',
      primaryBorderColor: 'blue',
      primaryTextColor: 'white',
      primaryBorderRadius: '8px',
    },
  },
});

export const CustomTheme: Story = {
  args: {
    children: 'Custom Button',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={customTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
