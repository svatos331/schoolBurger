import React, { FC, useMemo } from "react";

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
				<DatePicker
					onChange={onChange}
					{...props}
				>
					{children}
				</DatePicker>
			) : null,
		[isLoading, isError]
	);
	return <ST.DatePickerWrapper>{view}</ST.DatePickerWrapper>;
};
DataTimePicker.defaultProps = IDataTimePickerPropsDefault;
export default DataTimePicker;
