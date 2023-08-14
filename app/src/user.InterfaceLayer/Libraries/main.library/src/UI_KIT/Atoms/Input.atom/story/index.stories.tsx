import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "..";
import { inputTypeEnum, testProps } from "../type";

const TestInput = ({ type, ...props }: testProps) => {
	const [value, setValue] = useState("");

	return (
		<Input
			placeholder={type}
			value={value}
			onChange={(val: string) => setValue(val)}
			type={type}
			{...props}
		/>
	);
};

const meta = {
	title: "Atoms/Input",
	component: TestInput,
	tags: ["atom"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof TestInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextOnly: Story = {
	args: {
		type: inputTypeEnum.TEXT_ONLY,
	},
};

export const Number: Story = {
	args: {
		type: inputTypeEnum.NUMBER,
	},
};

export const Text: Story = {
	args: {
		type: inputTypeEnum.TEXT,
	},
};

export const Card: Story = {
	args: {
		type: inputTypeEnum.CARD,
	},
};

export const Email: Story = {
	args: {
		type: inputTypeEnum.EMAIL,
	},
};

export const CardDate: Story = {
	args: {
		type: inputTypeEnum.CARD_DATE,
	},
};

export const CVV: Story = {
	args: {
		type: inputTypeEnum.CVV,
	},
};

export const Password: Story = {
	args: {
		type: inputTypeEnum.PASSWORD,
	},
};

export const Date: Story = {
	args: {
		type: inputTypeEnum.DATE,
	},
};

export const Error: Story = {
	args: {
		type: inputTypeEnum.DATE,
		isError: true,
	},
};

export const Loading: Story = {
	args: {
		type: inputTypeEnum.DATE,
		isLoading: true,
	},
};
