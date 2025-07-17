import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CustomSelect from './CustomSelect';

const meta: Meta<typeof CustomSelect> = {
  title: 'Components/CustomSelect',
  component: CustomSelect,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CustomSelect>;

const options = ['Option 1', 'Option 2', 'Option 3'];

export const Default: Story = {
  render: function DefaultRender() {
    const [value, setValue] = useState(options[0]);
    return (
      <div className="w-[300px]">
        <CustomSelect value={value} onChange={setValue} options={options} />
      </div>
    );
  },
};
