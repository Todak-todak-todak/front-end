import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'selectable'],
    },
    selected: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: '기본 박스입니다',
  },
};

export const Selectable_Unselected: Story = {
  args: {
    variant: 'selectable',
    selected: false,
    children: '선택되지 않은 박스',
  },
};

export const Selectable_Selected: Story = {
  args: {
    variant: 'selectable',
    selected: true,
    children: '선택된 박스',
  },
};
