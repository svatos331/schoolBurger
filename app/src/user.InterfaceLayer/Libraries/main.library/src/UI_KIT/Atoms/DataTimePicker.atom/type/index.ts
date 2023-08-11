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
export interface IDatePickerProps
	extends ReactDatePickerProps,
		ICommonComponentProps {
	[CommonComponentsProps.onChange]: onChangeDateEvent | onChangeIntervalEvent;
	selectsRange?: boolean;
}
