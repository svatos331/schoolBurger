import styled from "styled-components";

import Colors from "../../../../constants/colors/index";
import MultiControlEnum from "../enum";

interface MultiControlType {
	type: MultiControlEnum;
}

export const MultiControl = styled.div<MultiControlType>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 12px;
	width: ${({ type }) => (type === MultiControlEnum.switch ? "24px" : "12px")};
	position: relative;
	box-sizing: border-box;
`;
export const Label = styled.label`
	width: inherit;
	height: inherit;
	position: absolute;
	left: 0;
	top: 0;
`;
export const Choice = styled.input<MultiControlType>`
	opacity: 0;
	z-index: 1;
	cursor: pointer;
	&:checked + ${Label}:before, &:not(:checked) + ${Label}:before {
		content: "";
		width: inherit;
		height: inherit;
		position: absolute;
		left: 0;
		top: 0;
		border: 1px solid ${Colors.GREY};
		background-color: ${Colors.WHITE};
		border-radius: ${({ type }) =>
			type === MultiControlEnum.radio ? "100%" : "20%"};
		box-sizing: border-box;
	}
	&:checked + ${Label}:after {
		content: "";
		width: 50%;
		height: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: ${Colors.BLACK};
		border-radius: ${({ type }) =>
			type === MultiControlEnum.radio ? "100%" : "20%"};
	}
	&:hover + ${Label}:before {
		border-color: ${Colors.ORANGE_ACTIVE};
	}
	&:active + ${Label}:before {
		border-color: ${Colors.ORANGE_DEFAULT};
	}
	&:disabled + ${Label}:before {
		border: 1px solid ${Colors.GREY};
		background-color: ${Colors.GREY};
	}
	&:disabled {
		cursor: not-allowed;
	}
`;

export const Switch = styled.input`
	opacity: 0;
	z-index: 1;
	cursor: pointer;
	width: inherit;
	height: inherit;
	&:checked + ${Label}:before, &:not(:checked) + ${Label}:before {
		content: "";
		width: inherit;
		height: inherit;
		position: absolute;
		left: 0;
		top: 0;
		border: 1px solid ${Colors.GREY};
		background-color: ${Colors.WHITE};
		border-radius: 24px;
		box-sizing: border-box;
	}
	&:checked + ${Label}:before {
		border-color: ${Colors.ORANGE_DEFAULT};
	}
	&:not(:checked) + ${Label}:before {
		border-color: ${Colors.ORANGE_ACTIVE};
	}
	+ ${Label}:after {
		position: absolute;
		top: 50%;
		left: 50%;
	}
	&:checked + ${Label}:after, &:not(:checked) + ${Label}:after {
		content: "";
		height: 9px;
		width: 9px;
		border-radius: 100%;
	}
	&:checked + ${Label}:after {
		background-color: ${Colors.ORANGE_DEFAULT};
		transform: translate(10%, -50%);
		transition: 0.9s;
	}
	&:not(:checked) + ${Label}:after {
		transition: 0.9s;
		transform: translate(-110%, -50%);
		background-color: ${Colors.ORANGE_ACTIVE};
	}
	&:checked:hover:not(:disabled) + ${Label}:before {
		border-color: ${Colors.ORANGE_ACTIVE};
	}
	&:not(:checked):hover:not(:disabled) + ${Label}:before {
		border-color: ${Colors.ORANGE_DEFAULT};
	}
	&:checked:active:not(:disabled) + ${Label}:before {
		border-color: ${Colors.ORANGE_DEFAULT};
	}
	&:not(:checked):active:not(:disabled) + ${Label}:before {
		border-color: ${Colors.ORANGE_ACTIVE};
	}
	&:disabled + ${Label}:before {
		border-color: ${Colors.GREY};
		background-color: ${Colors.WHITE};
	}
	&:disabled + ${Label}:after {
		background-color: ${Colors.GREY};
	}
	&:disabled {
		cursor: not-allowed;
	}
`;
