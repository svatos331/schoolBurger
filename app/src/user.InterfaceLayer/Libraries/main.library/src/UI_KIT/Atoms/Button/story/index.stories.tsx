import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "../index";
import ButtonEnum from "../enum";

const meta = {
	title: "Example/MyWidget",
	component: Button,
	tags: ["button"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OrderButton: Story = {
	args: {
		type: ButtonEnum.enum_orderButton,
		children: "Оформить заказ",
	},
};
export const CartButton: Story = {
	args: {
		type: ButtonEnum.enum_cartButton,
		children: "Добавить",
	},
};

export const CategoryButton: Story = {
	args: {
		type: ButtonEnum.enum_categoryButton,
		children: "Закуски",
	},
};
