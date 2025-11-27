import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { FlexRow, FlexRowCenter } from '../../stories/utils';

const meta = {
  title: 'Atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <FlexRow>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
    </FlexRow>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <FlexRowCenter>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </FlexRowCenter>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
};

