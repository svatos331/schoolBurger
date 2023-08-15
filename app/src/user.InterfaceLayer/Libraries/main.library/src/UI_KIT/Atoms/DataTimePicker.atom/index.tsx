import React, { FC, memo, useCallback, useMemo, useState } from "react";

import DatePicker from "react-datepicker";

import { IDatePickerProps } from "./type";

import * as ST from "./styled";

import { IDataTimePickerPropsDefault } from "./mock";

const DataTimePicker: FC<IDatePickerProps> = ({
	isLoading,
	isError,
	children,
	disabledInput,
	onChangeRaw,
	inline,
	...props
}) => {
	const shouldBeRender = useMemo(
		() => !(isLoading || isError),
		[isLoading, isError]
	);
	const [animate, setAnimate] = useState(false);
	const [continueAnimation, setContinueAnimation] = useState(false);

	const animation = useMemo(
		() => animate && continueAnimation,
		[animate, continueAnimation]
	);

	const handleDivClick = useCallback(() => {
		setAnimate(true);
		setContinueAnimation(true);
		setTimeout(() => {
			setContinueAnimation(false);
		}, 500);
	}, [animate, continueAnimation]);

	return (
		<ST.DatePickerWrapper
			$animation={animation}
			$disabled={disabledInput}
			data-testid="time-date-picker"
		>
			{shouldBeRender ? (
				<DatePicker
					inline={!disabledInput && inline}
					disabled={disabledInput}
					{...props}
					onChangeRaw={(e) => {
						handleDivClick();
						onChangeRaw!(e);
					}}
					onInputClick={() => {
						handleDivClick();
					}}
				>
					{children}
				</DatePicker>
			) : null}
		</ST.DatePickerWrapper>
	);
};
DataTimePicker.defaultProps = IDataTimePickerPropsDefault;

export default memo(DataTimePicker);
