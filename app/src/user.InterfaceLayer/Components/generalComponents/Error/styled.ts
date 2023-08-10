import styled from "styled-components";

import Colors from "../../../constants/colors";

export const Error = styled.div``;

export const ErrText = styled.div`
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	gap: 16px;
	display: flex;
	color: ${Colors.BLACK};
`;

export const Btns = styled.div`
	display: flex;
`;

export const Btn = styled.div`
	margin: 0 10px;
	border: 1px solid ${Colors.BLACK};
	padding: 10px;
`;
