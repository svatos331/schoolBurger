import styled, { css } from "styled-components";
import Colors from "../../../../constants/colors";
import  FontsEnum  from "../../../../constants/fonts";
import { IOptionsWrap, ISelectStyled } from "../type";

const font = `
	font-family: ${FontsEnum.Nunito};
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 100%;
`;

const flex = `	
display: flex;
justify-content: center;
align-items: center;`;

const border = `	
border: none;
border-radius: 12px;`;

const heightWidth = `	
height: 40px;	
min-width: 256px;
width: 100%;`;

const optionsMarginBottom = `5px`;

export const SelectWrap = styled.div`
	position: relative;
	width: 300px;
`;

export const OptionsWrap = styled.div<IOptionsWrap>`
	position: absolute;
	width: 100%;
	backdrop-filter: blur(2px);
	overflow: hidden;
	height: calc(
		100% * ${(props) => props.$optionsCount} + ${optionsMarginBottom} *
			${(props) => props.$optionsCount}
	);
	transition: height 0.5s ease 0s;
	${border}
	${(props) => (props.$active ? `` : `height: 0px;`)}
`;

export const SelectStyled = styled.button<ISelectStyled>`
	position: relative;
	${flex}
	${border}
	overflow: hidden;
	${heightWidth}
	margin-bottom: 10px;
	cursor: pointer;
	background: ${Colors.TRANSPARENT};
	${font}

	&:hover {
		color: ${Colors.WHITE_DEFAULT};
		transition: color 0.5s;
	}
	&::after {
		position: absolute;
		content: "";
		z-index: -1;
		width: 0%;

		${(props) =>
			props.$animation
				? `
				width: 1300%;
				transition: width ${props.$timer}ms ease 0s;
				  `
				: `width: 0%;`}
		height: 100%;
		background: radial-gradient(
			circle,
			${Colors.TRANSPARENT} 8%,
			${Colors.ORANGE_ACTIVE} 8%,
			${Colors.ORANGE_ACTIVE} 65%,
			${Colors.ORANGE_HOVER} 89%,
			${Colors.TRANSPARENT} 100%
		);
	}

	&:before {
		position: absolute;
		content: "";
		z-index: -1;
		top: -200%;
		width: 100%;
		height: 300%;
		background: linear-gradient(
			0deg,
			${Colors.WHITE_DEFAULT} 0%,
			${Colors.WHITE_DEFAULT} 33%,
			${Colors.ORANGE_ACTIVE} 33%,
			${Colors.ORANGE_ACTIVE} 66%,
			${Colors.ORANGE_HOVER} 66%,
			${Colors.ORANGE_HOVER} 100%
		);
		transition: top 0.5s ease 0s;
	}
	&:hover::before {
		top: 0;
	}
`;

export const OptionStyled = styled.div`
	${flex}
	${border}
	${heightWidth}
	margin-bottom: ${optionsMarginBottom};
	background: ${Colors.ORANGE_ACTIVE};
	color: ${Colors.WHITE_DEFAULT};
	cursor: pointer;
	${font}
	&:hover {
		background: ${Colors.ORANGE_HOVER};
	}
`;

export const SelectStyledError = styled.div`
	color: red;
`;
