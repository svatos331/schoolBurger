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
	const view = useMemo(
		() =>
			!(isLoading || isError) ? (
				//@ts-ignore
				<DatePicker
					onChange={onChange}
					{...props}
				>
					{children}
				</DatePicker>
			) : null,
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[isLoading, isError, onChange, children, ...Object.values(props)]
	);
	return (
		<ST.DatePickerWrapper data-testid="time-date-picker">
			{view}
		</ST.DatePickerWrapper>
	);
};
DataTimePicker.defaultProps = IDataTimePickerPropsDefault;

export default memo(DataTimePicker);
