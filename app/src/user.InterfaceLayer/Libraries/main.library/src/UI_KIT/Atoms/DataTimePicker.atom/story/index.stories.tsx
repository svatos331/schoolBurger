import React, { FC, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DataTimePicker from "../index";
import { IDatePickerProps } from "../type";

export const TestDatePicker: FC<IDatePickerProps> = ({
	children,
	...props
}) => {
	const [date, setDate] = useState(new Date());

	return (
		<DataTimePicker
			{...props}
			selected={date}
			onChange={setDate}
		>
			{children}
		</DataTimePicker>
	);
};

const meta = {
	title: "DataPickers/DataTimePicker",
	component: TestDatePicker,
	tags: ["DateTimePicker"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof TestDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Inline: Story = {
	args: {
		onChange: () => {},
		inline: true,
	},
};
export const Default: Story = {
	args: {
		onChange: () => {},
	},
};
export const Disabled: Story = {
	args: {
		onChange: () => {},
		disabledInput: true,
		inline: true,
	},
};
export const NonClosable: Story = {
	args: {
		onChange: () => {},
		shouldCloseOnSelect: false,
	},
};
