import React, { FC } from "react";

import * as ST from "./styled/index";
import RadioBtnType from "./type";

const RadioButton: FC<RadioBtnType> = ({
	onChange,
	isCheck,
	value,
	name,
	...other
}) => {
	return (
		<ST.Item>
			<ST.RadioButton
				type={"radio"}
				name={name}
				checked={isCheck}
				value={value}
				onChange={onChange}
				id={value.toString()}
				{...other}
			/>
			<ST.RadioLabel htmlFor={value.toString()}></ST.RadioLabel>
		</ST.Item>
	);
};

export default RadioButton;
