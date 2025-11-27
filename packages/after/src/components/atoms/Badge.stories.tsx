import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';
import { FlexRow, FlexRowCenter } from '../../stories/utils';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const AllTypes: Story = {
  render: () => (
    <FlexRow>
      <Badge type="primary">Primary</Badge>
      <Badge type="secondary">Secondary</Badge>
      <Badge type="success">Success</Badge>
      <Badge type="danger">Danger</Badge>
      <Badge type="warning">Warning</Badge>
      <Badge type="info">Info</Badge>
    </FlexRow>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <FlexRowCenter>
      <Badge size="small">Small</Badge>
      <Badge size="medium">Medium</Badge>
      <Badge size="large">Large</Badge>
    </FlexRowCenter>
  ),
};

export const Pill: Story = {
  render: () => (
    <FlexRow>
      <Badge pill>Pill Badge</Badge>
      <Badge type="success" pill>Success Pill</Badge>
      <Badge type="danger" pill>Danger Pill</Badge>
    </FlexRow>
  ),
};

