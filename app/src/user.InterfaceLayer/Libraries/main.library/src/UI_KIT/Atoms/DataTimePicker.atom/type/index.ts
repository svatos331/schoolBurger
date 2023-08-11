import React from "react";
import { ReactDatePickerProps } from "react-datepicker";

type onChangeA = (
	d: Date,
	event?: React.SyntheticEvent<any> | undefined
) => void;
type onChangeB = (date: [Date, Date]) => void;

// @ts-ignore
export interface IDatePickerProps extends ReactDatePickerProps {
	onChange: onChangeA | onChangeB;
	selectsRange?: boolean;
}
