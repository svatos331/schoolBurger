import React from "react";
import { ReactDatePickerProps } from "react-datepicker";
import {
	ICommonComponentProps,
} from "../../../../constants/commonComponentProps";

type onChangeDateEvent = (
	date: Date,
	event?: React.SyntheticEvent<any> | undefined
) => void;

type onChangeIntervalEvent = (date: [Date, Date]) => void;

type  IProcessingProps = "isLoading" | "isError" | "isSuccess";
// @ts-ignore
interface IDatePickerPropsLocal
	extends ReactDatePickerProps,
		//@ts-ignore
		// todo--ругается на "isLoading" -фикситься если убрать енамы из интерфейсы ICommonProps
		Pick<ICommonComponentProps, IProcessingProps> {
	onChange: onChangeDateEvent | onChangeIntervalEvent;
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
