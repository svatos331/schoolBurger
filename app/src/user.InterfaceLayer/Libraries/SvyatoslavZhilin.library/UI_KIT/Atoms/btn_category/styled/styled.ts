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
	display: inline-flex;
	padding: 8px 14px;
	align-items: center;
	gap: 8px;
	border-radius: 50px;
	background: #fff;
	border: 1px solid transparent;
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		border-radius: 50px;
		border: 1px solid #f86310;
	}
	&:active {
		background: #ffab08;
	}
`;

export const text = styled.div`
	margin-left: 8px;
`;

export const img = styled.div`
	display: flex;
	width: 24px;
	height: 24px;
	justify-content: center;
	align-items: center;
`;
