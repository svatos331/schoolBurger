import styled from "styled-components";
import { fonts } from "user.InterfaceLayer/Libraries/SvyatoslavZhilin.library/constants/fonts";

export const btn = styled.button`
	// text
	color: #000;
	font-family: ${fonts.button.fontFamily};
	font-size: ${fonts.button.fontSize};
	font-style: ${fonts.button.fontStyle};
	font-weight: ${fonts.button.fontWeight};
	line-height: ${fonts.button.lineHeight};

	// btn
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

export const a = styled.div`
	margin: 0 37.5px;
`;
