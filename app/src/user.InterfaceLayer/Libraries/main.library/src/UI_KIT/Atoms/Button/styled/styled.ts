import styled from "styled-components";
import FontsEnum from "../../../../constants/fonts";
import ButtonEnum from "../enum";
import ButtonsConstants from "../constants";
import Colors from "../../../../constants/colors";

interface Button {
	isLoading?: boolean;
}

export const ButtonOrder = styled.button<Button>`
	display: inline-flex;
	padding: 12px 14px;
	width: 100%;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	border-radius: 12px;
	background: ${Colors.ORANGE_DEFAULT};
	cursor: pointer;
	transition: all 0.5s ease;
	font-family: ${FontsEnum.Nunito};
	font-size: ${ButtonsConstants[ButtonEnum.enum_1].fontSize};
	font-style: ${ButtonsConstants[ButtonEnum.enum_1].fontStyle};
	font-weight: ${ButtonsConstants[ButtonEnum.enum_1].fontWeight};
	line-height: ${ButtonsConstants[ButtonEnum.enum_1].lineHeight};
	color: ${Colors.WHITE};
	&:hover {
		background: ${Colors.ORANGE_HOVER};
	}
	&:active {
		background: ${Colors.ORANGE_ACTIVE};
	}
	&:disabled {
		background: ${Colors.BUTTON_DISABLED_BG};
		color: ${Colors.BUTTON_DISABLED_TEXT};
	}
`;

export const ButtonCart = styled.button<Button>`
	display: inline-flex;
	padding: 12px 14px;
	width: 100%;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	border-radius: 12px;
	background: ${Colors.WHITE_DEFAULT};
	cursor: pointer;
	transition: all 0.5s ease;
	font-family: ${FontsEnum.Nunito};
	font-size: ${ButtonsConstants[ButtonEnum.enum_2].fontSize};
	font-style: ${ButtonsConstants[ButtonEnum.enum_2].fontStyle};
	font-weight: ${ButtonsConstants[ButtonEnum.enum_2].fontWeight};
	line-height: ${ButtonsConstants[ButtonEnum.enum_2].lineHeight};
	color: ${Colors.BLACK};
	&:hover {
		background: ${Colors.ORANGE_HOVER};
	}
	&:active {
		background: ${Colors.ORANGE_ACTIVE};
	}
	&:disabled {
		background: ${Colors.BUTTON_DISABLED_BG};
		color: ${Colors.BUTTON_DISABLED_TEXT};
	}
`;

export const ButtonCategory = styled.button<Button>`
	display: inline-flex;
	padding: 8px 14px;
	width: 100%;
	justify-content: center;
	align-items: center;
	gap: 8px;
	flex-shrink: 0;
	border-radius: 50px;
	background: ${Colors.WHITE};
	cursor: pointer;
	transition: all 0.5s ease;
	border: 1px solid transparent;
	color: ${Colors.BLACK};
	font-family: ${FontsEnum.Nunito};
	font-size: ${ButtonsConstants[ButtonEnum.enum_2].fontSize};
	font-style: ${ButtonsConstants[ButtonEnum.enum_2].fontStyle};
	font-weight: ${ButtonsConstants[ButtonEnum.enum_2].fontWeight};
	line-height: ${ButtonsConstants[ButtonEnum.enum_2].lineHeight};
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

export const Button = styled.button<Button>`
	color: red;
`;
