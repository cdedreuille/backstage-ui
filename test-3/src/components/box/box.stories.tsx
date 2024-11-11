import type { Meta, StoryObj } from '@storybook/react';
import { box } from './box';

const meta = {
  title: 'Box',
  component: box.div,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof box.div>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <box.div padding="medium" background="blue-50">
      Basic Box
    </box.div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <box.div
      display={{ mobile: 'block', desktop: 'flex' }}
      padding={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}
      background="blue-100"
    >
      Responsive Box
    </box.div>
  ),
};

export const FlexContainer: Story = {
  render: () => (
    <box.div
      display="flex"
      flexDirection="column"
      padding="large"
      background="blue-50"
    >
      <box.div padding="medium" background="blue-100">
        Item 1
      </box.div>
      <box.div padding="medium" background="blue-200">
        Item 2
      </box.div>
      <box.div padding="medium" background="blue-100">
        Item 3
      </box.div>
    </box.div>
  ),
};

export const Nested: Story = {
  render: () => (
    <box.section padding="large" background="blue-50">
      <box.header padding="medium" background="blue-100">
        Header
      </box.header>
      <box.main
        display="flex"
        padding="medium"
        background="blue-200"
        justifyContent="space-between"
      >
        <box.aside padding="small" background="blue-100">
          Sidebar
        </box.aside>
        <box.article padding="small" background="blue-100">
          Main Content
        </box.article>
      </box.main>
      <box.footer padding="medium" background="blue-100">
        Footer
      </box.footer>
    </box.section>
  ),
};

export const Alignment: Story = {
  render: () => (
    <box.div
      display="flex"
      padding="large"
      background="blue-50"
      justifyContent="center"
      alignItems="center"
      style={{ height: '200px' }}
    >
      <box.div padding="medium" background="blue-100">
        Centered Content
      </box.div>
    </box.div>
  ),
};

// Example showing different spacing combinations
export const Spacing: Story = {
  render: () => (
    <box.div display="flex" flexDirection="column" gap="medium">
      <box.div padding="small" background="blue-50">
        Small Padding
      </box.div>
      <box.div padding="medium" background="blue-100">
        Medium Padding
      </box.div>
      <box.div padding="large" background="blue-200">
        Large Padding
      </box.div>
      <box.div paddingX="large" paddingY="small" background="blue-100">
        Mixed Padding
      </box.div>
    </box.div>
  ),
};

// Example showing different display values
export const DisplayVariants: Story = {
  render: () => (
    <box.div display="flex" flexDirection="column" gap="medium">
      <box.div padding="medium" background="blue-50" display="block">
        Display Block
      </box.div>
      <box.div padding="medium" background="blue-100" display="flex">
        Display Flex
      </box.div>
      <box.span padding="medium" background="blue-200" display="inline">
        Display Inline
      </box.span>
    </box.div>
  ),
};

export const Test: Story = {
  render: () => <box.div paddingX="large">Hello World</box.div>,
};
