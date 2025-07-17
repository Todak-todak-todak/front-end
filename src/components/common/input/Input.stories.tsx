import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: '내용을 입력하세요',
  },
};

export const Filled: Story = {
  args: {
    placeholder: '기본값 있음',
    defaultValue: 'Hello, world!',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: '입력 비활성화',
    disabled: true,
  },
};

export const WithCustomClass: Story = {
  args: {
    placeholder: '커스텀 스타일',
    className: 'border-red-500',
  },
};
