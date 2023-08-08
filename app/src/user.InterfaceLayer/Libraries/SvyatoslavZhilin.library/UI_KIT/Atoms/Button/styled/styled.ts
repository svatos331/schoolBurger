import styled from "styled-components";

import ButtonsConstants from "../constants";
import ButtonEnum from "../enum";

interface Button {
	isLoading?: boolean;
}

export const Button = styled.button<Button>`
	color: #000;
	background: ${({ isLoading }) =>
		isLoading ? "black" : "red"}; // TODO: пример
	// font-family: ${FontsEnum.Nunito};
	// font-size: ${fonts.button.fontSize};
	font-style: ${ButtonsConstants[ButtonEnum.enum_1].fontStyle};
	// font-weight: ${fonts.button.fontWeight};
	// line-height: ${fonts.button.lineHeight};
	display: flex;
	padding: 11px 0;
	width: 276px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	border-radius: 12px;
	background: #f2f2f3;
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		background: #ffab08;
	}
	&:active {
		background: #f86310;
	}
	&:disabled {
		background: #f9f9f9;
		color: #acacac;
	}
`;
