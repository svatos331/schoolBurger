import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import Select from "../index";

const meta = {
  title: 'Example/MyWidget',
  component: Select,
  tags: ['Atoms'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {
  args: {
    name: 'string',
    valueArray: ['1','2'],
    setValue: () => {}
  },
};

export const Second: Story = {
  args: {
    name: 'string2',
    valueArray: ['1','2'],
    setValue: () => {}
  },
  };

  export const Third: Story = {
    args: {
      name: 'string3',
      valueArray: ['1','2'],
      setValue: () => {}
    },
  };
