import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "..";
import { TestProps } from "../type";
import { InputTypeEnum } from "../enum";

const TestInput = ({ type, ...props }: TestProps) => {
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
} as Meta<typeof TestInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextOnly: Story = {
	args: {
		type: InputTypeEnum.TEXT_ONLY,
	},
};

export const Number: Story = {
	args: {
		type: InputTypeEnum.NUMBER,
	},
};

export const Tel: Story = {
	args: {
		type: InputTypeEnum.TEL,
	},
};

export const Time: Story = {
	args: {
		type: InputTypeEnum.TIME,
	},
};

export const Text: Story = {
	args: {
		type: InputTypeEnum.TEXT,
	},
};

export const Card: Story = {
	args: {
		type: InputTypeEnum.CARD,
	},
};

export const Email: Story = {
	args: {
		type: InputTypeEnum.EMAIL,
	},
};

export const CardDate: Story = {
	args: {
		type: InputTypeEnum.CARD_DATE,
	},
};

export const CVV: Story = {
	args: {
		type: InputTypeEnum.CVV,
	},
};

export const Password: Story = {
	args: {
		type: InputTypeEnum.PASSWORD,
	},
};

export const Date: Story = {
	args: {
		type: InputTypeEnum.DATE,
	},
};

export const Error: Story = {
	args: {
		type: InputTypeEnum.DATE,
		isError: true,
	},
};

export const Loading: Story = {
	args: {
		type: InputTypeEnum.DATE,
		isLoading: true,
	},
};
