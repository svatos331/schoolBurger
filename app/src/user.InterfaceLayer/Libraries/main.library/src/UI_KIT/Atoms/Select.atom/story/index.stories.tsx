import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import Select from "../index";

const meta = {
  title: 'Example/Select',
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
    valueArray: [
      { id: 1, name: "Красивенько" },
      { id: 2, name: "Очень Красивенько" },
      { id: 3, name: "КРАСИВО" },
      { id: 4, name: "ОЧЕНЬ" },
    ],
    setValue: () => {}
  },
};
