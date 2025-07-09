import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import EditIcon from '@assets/images/Mypage/Edit.svg?react';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: '페이지 제목',
  },
};

export const WithIcon: Story = {
  args: {
    title: '아이콘 있음',
    img: (
      <div className="w-6 h-5 text-black">
        <EditIcon />
      </div>
    ),
  },
};
