import { css } from "styled-components";
import Colors from "../../../../../../../constants/colors";

export const slideBackground = css`
	position: relative;
	overflow: hidden;
	z-index: 1;
	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -2;
	}
	&::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0%;
		height: 100%;
		background: ${Colors.ORANGE_HOVER};
		transition: all 0.3s;
		z-index: -1;
	}
	&:hover {
		&::before {
			width: 100%;
		}
	}
`;
