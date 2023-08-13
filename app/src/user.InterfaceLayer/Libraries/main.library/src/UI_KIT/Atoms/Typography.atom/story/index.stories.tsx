import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import Typography from "../index";
import { Tags } from "../enum";

const meta = {
  title: 'Example/Typography',
  component: Typography,
  tags: ['Typography'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const h1: Story = {
  args: {
    as: Tags.h1,
    children: "H1"
  },
  
};

export const h2: Story = {
  args: {
    as: Tags.h2,
    children: "H2"
  },
  
};

export const h3: Story = {
  args: {
    as: Tags.h3,
    children: "H3"
  },
  
};
