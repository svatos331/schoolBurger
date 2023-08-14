import styled from "styled-components";
import ButtonEnum from "../enum";
import Colors from "../../../../constants/colors";
import commonButtonFonts from "../constants/commonButton/fonts";
import { commonButtonStyles } from "../constants/commonButton/styles";
import { slideBackground } from "../constants/commonButton/animation/slide";
interface Button {
	isLoading?: boolean;
}

export const ButtonOrder = styled.button<Button>`
	${commonButtonStyles}
	${slideBackground};
	border-radius: 12px;
	padding: 12px 14px;
	background: ${Colors.ORANGE_DEFAULT};
	color: ${Colors.WHITE};
	font-size: ${commonButtonFonts[ButtonEnum.enum_orderButton].fontSize};
	font-style: ${commonButtonFonts[ButtonEnum.enum_orderButton].fontStyle};
	font-weight: ${commonButtonFonts[ButtonEnum.enum_orderButton].fontWeight};
	line-height: ${commonButtonFonts[ButtonEnum.enum_orderButton].lineHeight};
`;

export const ButtonCart = styled.button<Button>`
	${commonButtonStyles}
	${slideBackground};
	padding: 12px 14px;
	border-radius: 12px;
	color: ${Colors.BLACK};
	background: ${Colors.WHITE_DEFAULT};
	font-size: ${commonButtonFonts[ButtonEnum.enum_cartButton].fontSize};
	font-style: ${commonButtonFonts[ButtonEnum.enum_cartButton].fontStyle};
	font-weight: ${commonButtonFonts[ButtonEnum.enum_cartButton].fontWeight};
	line-height: ${commonButtonFonts[ButtonEnum.enum_cartButton].lineHeight};
	&:hover,
	active {
		color: ${Colors.WHITE};
	}
`;

export const ButtonCategory = styled.button<Button>`
	${commonButtonStyles}
	padding: 8px 14px;
	border-radius: 50px;
	border: 1px solid transparent;
	background: ${Colors.WHITE};
	color: ${Colors.BLACK};
	font-size: ${commonButtonFonts[ButtonEnum.enum_categoryButton].fontSize};
	font-style: ${commonButtonFonts[ButtonEnum.enum_categoryButton].fontStyle};
	font-weight: ${commonButtonFonts[ButtonEnum.enum_categoryButton].fontWeight};
	line-height: ${commonButtonFonts[ButtonEnum.enum_categoryButton].lineHeight};
	&:hover {
		border: 1px solid ${Colors.ORANGE_HOVER};
	}
	&:active {
		background: ${Colors.ORANGE_HOVER};
	}
`;

export const ButtonSocial = styled.button<Button>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	width: 36px;
	height: 36px;
	background: none;
	border: none;
	margin: 0;
	padding: 0;
	svg {
		transition: all 0.8s ease;
		cursor: pointer;
		fill: ${Colors.ORANGE_ACTIVE};
		&:hover {
			fill: ${Colors.ORANGE_HOVER};
		}
	}
`;

export const Button = styled.div<Button>`
	${commonButtonStyles}
	background:#d53e07;
	color: ${Colors.WHITE};
`;
