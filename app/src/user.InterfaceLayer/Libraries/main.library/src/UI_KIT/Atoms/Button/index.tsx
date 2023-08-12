import React, { FC } from "react";

import * as ST from "./styled/styled";
import ButtonType from "./type";
import ButtonEnum from "./enum";
import { IButtonPropsDefault } from "./mock";

const Button: FC<ButtonType> = ({ children, Icon, type, isLoading }) => {
	switch (type) {
		case ButtonEnum.enum_orderButton: {
			return <ST.ButtonOrder isLoading={isLoading}>{children}</ST.ButtonOrder>;
		}
		case ButtonEnum.enum_cartButton: {
			return <ST.ButtonCart isLoading={isLoading}>{children}</ST.ButtonCart>;
		}
		case ButtonEnum.enum_categoryButton: {
			return (
				<ST.ButtonCategory isLoading={isLoading}>
					{Icon}
					{children}
				</ST.ButtonCategory>
			);
		}
		case ButtonEnum.enum_socialBtn: {
			return (
				<ST.ButtonSocial isLoading={isLoading}>{children}</ST.ButtonSocial>
			);
		}
		default: {
			return <ST.Button>Ошибка</ST.Button>;
		}
	}
};

Button.defaultProps = IButtonPropsDefault;
export default Button;
