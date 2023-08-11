import React from "react";
import { ReactDatePickerProps } from "react-datepicker";

type onChangeDateEvent = (
	date: Date,
	event?: React.SyntheticEvent<any> | undefined
) => void;

type onChangeIntervalEvent = (date: [Date, Date]) => void;

// @ts-ignore
export interface IDatePickerProps extends ReactDatePickerProps {
	onChange: onChangeDateEvent | onChangeIntervalEvent;
	selectsRange?: boolean;
}
