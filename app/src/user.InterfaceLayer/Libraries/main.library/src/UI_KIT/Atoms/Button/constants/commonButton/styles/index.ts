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
	transition: all 0.3s ease;
	font-family: ${FontsEnum.Nunito};
	&:disabled {
		background: ${Colors.BUTTON_DISABLED_BG};
		color: ${Colors.BUTTON_DISABLED_TEXT};
	}
`;
