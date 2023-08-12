import React, { FC } from "react";

import * as ST from "./styled/styled";
import ButtonType from "./type";
import ButtonEnum from "./enum";
import ButtonsMock from "./mock";

const Button: FC<ButtonType> = ({
	children = ButtonsMock.children,
	Icon,
	type = ButtonsMock.type,
	isLoading,
}) => {
	switch (type) {
		case ButtonEnum.enum_1: {
			return <ST.ButtonOrder isLoading={isLoading}>{children}</ST.ButtonOrder>;
		}
		case ButtonEnum.enum_2: {
			return <ST.ButtonCart isLoading={isLoading}>{children}</ST.ButtonCart>;
		}
		case ButtonEnum.enum_3: {
			return (
				<ST.ButtonCategory isLoading={isLoading}>
					{Icon}
					{children}
				</ST.ButtonCategory>
			);
		}
		case ButtonEnum.enum_4: {
			return (
				<ST.ButtonSocial isLoading={isLoading}>{children}</ST.ButtonSocial>
			);
		}
		default: {
			return <ST.Button>Ошибка</ST.Button>;
		}
	}
};

export default Button;
