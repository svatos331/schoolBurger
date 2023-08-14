import styled from "styled-components";
import Colors from "../../../../constants/colors";
import load from "./animations/load";

export const InputStyle = styled.input`
	outline: none;
	display: flex;
	width: 100%;
	color: ${Colors.BLACK};
	font-size: 18px;
	height: 40px;
	padding: 12px;
	gap: 10px;
	border-radius: 12px;
	border: 2px solid ${Colors.WHITE_DEFAULT};
	background: ${Colors.WHITE};
	cursor: pointer;

	&:active,
	&:focus,
	&:hover {
		border: 2px solid ${Colors.ORANGE_ACTIVE};
	}

	@media (max-width: 768px) {
		border-radius: 8px;
		font-size: 16px;
		height: 30px;
		padding: 12px;
		border: 1px solid ${Colors.WHITE_DEFAULT};
		&:active,
		&:focus,
		&:hover {
			border: 1px solid ${Colors.ORANGE_HOVER};
		}
	}
	&::-webkit-calendar-picker-indicator {
		display: none;
	}

	@media (max-width: 426px) {
		font-size: 12px;
		border: 1px solid ${Colors.WHITE_DEFAULT};
		height: 20px;
		padding: 8px;
	}
`;

export const Error = styled.div`
	color: ${Colors.ORANGE_ACTIVE};
	font-size: 25px;
`;

export const Skeleton = styled.div`
	width: 100%;
	padding: 12px;
	border-radius: 12px;
	height: 40px;
	position: relative;
	box-shadow: 0 2px 10px 0 ${Colors.GRAY};
	overflow: hidden;

	&::before {
		content: "";
		display: block;
		position: absolute;
		left: -150px;
		top: 0;
		height: 100%;
		width: 80%;
		background: linear-gradient(
			to right,
			transparent 0%,
			${Colors.ORANGE_DEFAULT} 50%,
			transparent 100%
		);
		animation: ${load} 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
	}
`;
