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
	argTypes: {
		type: {
			options: InputTypeEnum,
			control: {type: 'select'}
		},
	},
	parameters: {
		layout: "centered",
	},
} as Meta<typeof TestInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputVariant: Story = {
	args: {
		type: InputTypeEnum.TEXT_ONLY,
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
