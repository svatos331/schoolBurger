import React, { FC } from "react";

import * as ST from "./styled/styled";
import ButtonType from "./type";
import ButtonEnum from "./enum";
import { IButtonPropsDefault } from "./mock";
import {
	categoryData,
	categoryDataProps,
	socialData,
	socialDataProps,
} from "./constants/commonButton/data";

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
				<>
					{categoryData.map((category: categoryDataProps) => (
						<ST.ButtonCategory
							key={category.id}
							isLoading={isLoading}
						>
							{category.url && (
								<ST.ButtonCategoryImage
									src={category.url}
									alt={category.name}
								/>
							)}
							{category.name}
						</ST.ButtonCategory>
					))}
				</>
			);
		}
		case ButtonEnum.enum_socialBtn: {
			return (
				<>
					{socialData.map((social: socialDataProps) => (
						<ST.ButtonSocial
							key={social.id}
							isLoading={isLoading}
							dangerouslySetInnerHTML={{ __html: social.url }}
						/>
					))}
				</>
			);
		}
		default: {
			return <ST.Button>Ошибка</ST.Button>;
		}
	}
};

Button.defaultProps = IButtonPropsDefault;
export default Button;
