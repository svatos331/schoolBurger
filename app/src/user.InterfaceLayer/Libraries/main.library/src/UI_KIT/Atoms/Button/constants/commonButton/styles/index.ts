import { css } from "styled-components";
import FontsEnum from "../../../../../../constants/fonts";
import Colors from "../../../../../../constants/colors";

export const commonButtonStyles = css`
	display: inline-flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	gap: 10px;
	cursor: pointer;
	font-family: ${FontsEnum.Nunito};
	&:active {
		background: ${Colors.ORANGE_ACTIVE};
	}
`;
