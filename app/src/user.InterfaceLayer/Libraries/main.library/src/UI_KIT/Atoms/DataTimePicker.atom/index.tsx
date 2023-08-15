import React, { FC, memo, useMemo } from "react";

import DatePicker from "react-datepicker";

import { IDatePickerProps } from "./type";

import * as ST from "./styled";

import { IDataTimePickerPropsDefault } from "./mock";

import "react-datepicker/dist/react-datepicker.module.css";
import getOrDefault from "./utils";

const DataTimePicker: FC<IDatePickerProps> = ({
	onChange,
	children,
	isLoading,
	calendarClassName,
	timeClassName,
	dayClassName,
	className,
	clearButtonClassName,
	popperClassName,
	monthClassName,
	weekDayClassName,
	wrapperClassName,
	isError,
	...props
}) => {
	const shouldBeRender = useMemo(
		() => !(isLoading || isError),
		[isLoading, isError]
	);

	return (
		<ST.DatePickerWrapper data-testid="time-date-picker">
			{shouldBeRender ? (
				<DatePicker
					{...props}
					onChange={onChange}
					dayClassName={(date: Date) =>
						"dayClassName " +
						getOrDefault<(date: Date) => string | null>(
							dayClassName,
							(date: Date) => ""
						)(date)
					}
					timeClassName={(date: Date) =>
						"timeClassName " +
						getOrDefault<(date: Date) => string | null>(
							timeClassName,
							(date: Date) => ""
						)(date)
					}
					calendarClassName={
						"calendarClassName " + getOrDefault(calendarClassName, "")
					}
					className={"className " + getOrDefault(className, "")}
				>
					{children}
				</DatePicker>
			) : null}
		</ST.DatePickerWrapper>
	);
};
DataTimePicker.defaultProps = IDataTimePickerPropsDefault;

export default memo(DataTimePicker);
