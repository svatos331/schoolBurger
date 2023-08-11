import React, { FC } from "react";

import * as ST from "./styled/index";
import MultiControlType from "./type";
import MultiControlEnum from "./enum";

const MultiControl: FC<MultiControlType> = ({
	checked,
	disabled,
	type,
	onChange,
}) => {
	switch (type) {
		case MultiControlEnum.radio:
		case MultiControlEnum.checkbox:
			return (
				<ST.MultiControl type={type}>
					<ST.Choice
						checked={checked}
						disabled={disabled}
						type={type}
						onChange={onChange}
					/>
					<ST.Label></ST.Label>
				</ST.MultiControl>
			);
		case MultiControlEnum.switch:
			return (
				<ST.MultiControl type={type}>
					<ST.Switch
						checked={checked}
						disabled={disabled}
						type={MultiControlEnum.checkbox}
						onChange={onChange}
					/>
					<ST.Label onChange={onChange}></ST.Label>
				</ST.MultiControl>
			);
	}
};

export default MultiControl;
