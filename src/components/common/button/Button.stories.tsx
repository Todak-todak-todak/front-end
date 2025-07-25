import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    text: '확인',
    variant: 'primary-full',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary-full', 'primary-half', 'gray-half'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryFull: Story = {
  args: {
    text: '다음',
    variant: 'primary-full',
  },
};

export const PrimaryHalf: Story = {
  args: {
    text: '다음으로',
    variant: 'primary-half',
  },
};

export const GrayHalf: Story = {
  args: {
    text: '이전으로',
    variant: 'gray-half',
  },
};

export const Disabled: Story = {
  args: {
    text: '다음',
    variant: 'primary-full',
    disabled: true,
  },
};
