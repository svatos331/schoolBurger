import React, { FC, useState } from "react";

import type { Meta, StoryObj, Story as StoryType } from "@storybook/react";

import DataTimePicker from "../index";

import { IDatePickerProps } from "../type";

import addDays from "date-fns/addDays";
import addMonths from "date-fns/addMonths";

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
			minDate={new Date()}
			maxDate={addMonths(new Date(), 5)}
		>
			{children}
		</DataTimePicker>
	);
};
const DataPickerWithRangeTemplate:  StoryType<IDatePickerProps> = ({
														 children,
														 ...props
													 }) => {

	const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
	const [startDate, endDate] = dateRange;

	return (
		<DataTimePicker
			{...props}
			selectsRange={true}
			startDate={startDate}
			endDate={endDate}
			onChange={(update : [Date, Date]) => {
				setDateRange(update);
			}}
			isClearable={true}
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

const DataPickerWithSelectRangeTemplate : StoryType<IDatePickerProps>= (args) => {
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
export const DatePickerWithSelectRangeView = DataPickerWithSelectRangeTemplate.bind({});
DatePickerWithSelectRangeView.args = {
	excludeDates:[addDays(new Date(), 1), addDays(new Date(), 5)],
	minDate:new Date(),
	maxDate:addMonths(new Date(), 5),
}
export const DatePickerWithRangeView = DataPickerWithRangeTemplate.bind({});
DatePickerWithRangeView.args = {

}