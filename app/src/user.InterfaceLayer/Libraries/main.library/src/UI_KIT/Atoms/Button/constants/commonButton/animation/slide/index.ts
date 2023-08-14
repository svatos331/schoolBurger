import { css } from "styled-components";
import Colors from "../../../../../../../constants/colors";

export const slideBackground = css`
	position: relative;
	overflow: hidden;
	z-index: 1;
	&::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0%;
		height: 100%;
		background: ${Colors.ORANGE_HOVER};
		transition: all 0.5s ease;
		z-index: -1;
	}
	&:hover {
		&::before {
			width: 100%;
		}
	}
	&:active {
		&::before {
			width: 100%;
			background: ${Colors.ORANGE_ACTIVE} !important;
			z-index: -3;
		}
	}
`;
