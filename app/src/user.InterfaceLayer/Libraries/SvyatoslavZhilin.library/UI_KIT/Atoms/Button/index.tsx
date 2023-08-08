import React, { FC } from "react";

import * as ST from "./styled/styled";
import ButtonType from "./type";
import ButtonEnum from "./enum";
import ButtonsMock from "./mock";

const Button: FC<ButtonType> = ({
	children = ButtonsMock.children,
	type = ButtonsMock.type,
	isLoading,
}) => {
	switch (type) {
		case ButtonEnum.enum_1: {
			return <ST.Button isLoading={isLoading}>{children}</ST.Button>;
		}
		//TODO: и так далее
		default: {
			return <ST.Button>Ошибка</ST.Button>;
		}
	}
};

export default Button;
