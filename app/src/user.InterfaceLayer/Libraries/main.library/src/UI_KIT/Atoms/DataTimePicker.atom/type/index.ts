import React from "react";
import { ReactDatePickerProps } from "react-datepicker";
import {
	CommonComponentsProps,
	ICommonComponentProps,
} from "../../../../constants/commonComponentProps";

type onChangeDateEvent = (
	date: Date,
	event?: React.SyntheticEvent<any> | undefined
) => void;

type onChangeIntervalEvent = (date: [Date, Date]) => void;

// @ts-ignore
interface IDatePickerPropsLocal
	extends ReactDatePickerProps,
		ICommonComponentProps {
	[CommonComponentsProps.onChange]: onChangeDateEvent | onChangeIntervalEvent;
	selectsRange?: boolean;
	disabledInput?: boolean;
}
export type IDatePickerProps = Omit<
	IDatePickerPropsLocal,
	| "calendarClassName"
	| "timeClassName"
	| "dayClassName"
	| "className"
	| "clearButtonClassName"
	| "popperClassName"
	| "monthClassName"
	| "weekDayClassName"
	| "wrapperClassName"
	| "disabled"
>;
