import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      defaultValue: '텍스트를 입력하세요',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력하세요',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: '비활성화됨',
    disabled: true,
  },
};

export const WithCustomClass: Story = {
  args: {
    placeholder: '커스텀 스타일',
    className: 'border-red-500',
  },
};
