import { ReactDatePickerProps } from "react-datepicker";
import * as React from "react";

type onChangeA = (
	data: Date,
	event?: React.SyntheticEvent<any> | undefined
) => void;

type onChangeB = (date: [Date, Date]) => void;

// @ts-ignore
export interface IDatePickerProps extends ReactDatePickerProps {
	onChange: onChangeA | onChangeB;
	selectsRange?: boolean;
}
