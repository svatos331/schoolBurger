import React, { FC, memo, useMemo } from "react";

import DatePicker from "react-datepicker";

import { IDatePickerProps } from "./type";

import * as ST from "./styled";

import { IDataTimePickerPropsDefault } from "./mock";

import "react-datepicker/dist/react-datepicker.module.css";

const DataTimePicker: FC<IDatePickerProps> = ({
	onChange,
	children,
	isLoading,
	isError,
	...props
}) => {
	const shouldBeRender = useMemo(
		() => !(isLoading || isError),
		[isLoading, isError]
	);

	return (
		<ST.DatePickerWrapper data-testid="time-date-picker">
			{shouldBeRender ? (
				<DatePicker
					onChange={onChange}
					{...props}
				>
					{children}
				</DatePicker>
			) : null}
		</ST.DatePickerWrapper>
	);
};
DataTimePicker.defaultProps = IDataTimePickerPropsDefault;

export default memo(DataTimePicker);
