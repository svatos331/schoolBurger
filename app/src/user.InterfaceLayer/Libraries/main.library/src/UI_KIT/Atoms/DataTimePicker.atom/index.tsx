import React, { FC, memo, useMemo } from "react";

import DatePicker from "react-datepicker";

import { IDatePickerProps } from "./type";

import * as ST from "./styled";
//@ts-ignore
import style from "./styled/styled.module.css"; ////TODO: не работает почему-то declare в custom.d.ts - возможно нужен плагин для tsconfig

import { IDataTimePickerPropsDefault } from "./mock";

import "react-datepicker/dist/react-datepicker.module.css";

const DataTimePicker: FC<IDatePickerProps> = (
	props = IDataTimePickerPropsDefault
) => {
	const { isLoading, isError, children } = props;

	const shouldBeRender = useMemo(
		() => !(isLoading || isError),
		[isLoading, isError]
	);
	const {
		calendarClassName,
		timeClassName,
		dayClassName,
		className,
		clearButtonClassName,
		popperClassName,
		monthClassName,
		weekDayClassName,
		wrapperClassName,
	} = style;
	const classes = useMemo(() => {
		return {
			wrapperClassName,
			className,
			clearButtonClassName,
			popperClassName,
			calendarClassName: calendarClassName,
			dayClassName: () => dayClassName,
			timeClassName: () => timeClassName,
			monthClassName: () => monthClassName,
			weekDayClassName: () => weekDayClassName,
		};
	}, [
		calendarClassName,
		timeClassName,
		dayClassName,
		className,
		clearButtonClassName,
		popperClassName,
		monthClassName,
		weekDayClassName,
		wrapperClassName,
	]);
	return (
		<ST.DatePickerWrapper data-testid="time-date-picker">
			{shouldBeRender ? (
				<DatePicker
					{...props}
					{...classes}
				>
					{children}
				</DatePicker>
			) : null}
		</ST.DatePickerWrapper>
	);
};
DataTimePicker.defaultProps = IDataTimePickerPropsDefault;

export default memo(DataTimePicker);
