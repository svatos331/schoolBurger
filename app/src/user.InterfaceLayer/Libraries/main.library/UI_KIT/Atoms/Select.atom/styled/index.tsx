import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/main.library/constants/colors";

export const SelectStyled = styled.select`
	display: flex;
	border: none;
	border-radius: 12px;
	height: 40px;
	min-width: 256px;
	background: white;
	padding-left: 10px;
	outline: 0;
	cursor: pointer;
	&:hover {
		color: white;
		background: ${Colors.ORANGE_DEFAULT};
	}
	&:focus {
		color: white;
		background: ${Colors.ORANGE_ACTIVE};
	}
`;
export const OptionStyled = styled.option`
	border: none;
	background: ${Colors.ORANGE_ACTIVE};
	color: white;
`;

export const SelectStyledError = styled.div`
	color: red;
`;

//todo: add fonts after add const