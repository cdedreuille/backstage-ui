import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import { Stack, ThemeProvider } from '@mui/system';
import { createTheme } from '../../../.storybook/create-theme';
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
    children: 'Button',
  },
};

export const Sizes: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button {...args} size="small" />
      <Button {...args} size="medium" />
    </Stack>
  ),
};

const customTheme = createTheme({
  components: {
    Button: {
      backgroundColor: 'blue',
      textColor: 'white',
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
