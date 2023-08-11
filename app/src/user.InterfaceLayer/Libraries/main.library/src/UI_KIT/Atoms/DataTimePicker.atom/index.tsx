import React, { FC } from "react";

import DatePicker from "react-datepicker";

import { IDatePickerProps } from "./type";

import * as ST from "./styled";

import { IDataTimePickerPropsDefault } from "./mock";

import "react-datepicker/dist/react-datepicker.module.css";

const DataTimePicker: FC<IDatePickerProps> = ({
	onChange,
	children,
	...props
}) => {
	return (
		<ST.DatePickerWrapper>
			<DatePicker
				onChange={onChange}
				{...props}
			>
				{children}
			</DatePicker>
		</ST.DatePickerWrapper>
	);
};
DataTimePicker.defaultProps = IDataTimePickerPropsDefault;
export default DataTimePicker;
