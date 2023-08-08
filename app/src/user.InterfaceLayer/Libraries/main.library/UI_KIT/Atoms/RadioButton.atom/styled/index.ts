import styled from "styled-components";

import Colors from "../../../../constants/colors/index";

export const Item = styled.div`
	display: flex;
	//align-items: stretch;
	height: 14px;
	width: 14px;
	margin-bottom: 2px;
`;

export const RadioLabel = styled.label``;

export const RadioButton = styled.input`
	&:checked,
	&:not(:checked) {
		position: absolute;
		left: -9999px;
	}

	&:checked + ${RadioLabel}, &:not(:checked) + ${RadioLabel} {
		position: relative;
		cursor: pointer;
	}
	&:checked + ${RadioLabel}:before, &:not(:checked) + ${RadioLabel}:before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 12px;
		height: 12px;
		border: 1px solid ${Colors.GREY};
		background-color: ${Colors.WHITE};
		border-radius: 100%;
	}
	&:hover + ${RadioLabel}:before {
		border-color: #ffab08;
	}
	&:active + ${RadioLabel}:before {
		border-color: #ff7020;
	}
	&:disabled + ${RadioLabel}:before {
		border: 1px solid ${Colors.GREY};
		background-color: ${Colors.GREY};
	}
	&:checked + ${RadioLabel}:after, &:not(:checked) + ${RadioLabel}:after {
		content: "";
		position: absolute;
		left: 3px;
		top: 3px;
		width: 6px;
		height: 6px;
		border-radius: 100%;
		background-color: ${Colors.BLACK};
	}
	&:checked + ${RadioLabel}:after {
		opacity: 1;
	}
	&:not(:checked) + ${RadioLabel}:after, &:disabled + ${RadioLabel}:after {
		opacity: 0;
	}
`;
