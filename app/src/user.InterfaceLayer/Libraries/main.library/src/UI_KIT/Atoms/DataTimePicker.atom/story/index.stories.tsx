import React, { FC, useState } from "react";

import type { Meta, StoryObj, Story as StoryType } from "@storybook/react";

import DataTimePicker from "../index";

import { IDatePickerProps } from "../type";

import addDays from "date-fns/addDays";

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

const DataPickerWithRangeTemplate : StoryType<IDatePickerProps>= (args) => {
	const {children} = args;

	const [startDate, setStartDate] = useState<Date>(new Date());

	const [endDate, setEndDate] = useState<Date | null>(null);

	const onChange = (dates : [Date, Date]) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};

	return <DataTimePicker
		{...args}
		selected={startDate}
		onChange={onChange}
		startDate={startDate}
		endDate={endDate}
		selectsRange
		inline
	>
		{children}
	</DataTimePicker>
}
export const DatePickerWithRangeView = DataPickerWithRangeTemplate.bind({});

DatePickerWithRangeView.args = {
	excludeDates:[addDays(new Date(), 1), addDays(new Date(), 5)]
}
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

