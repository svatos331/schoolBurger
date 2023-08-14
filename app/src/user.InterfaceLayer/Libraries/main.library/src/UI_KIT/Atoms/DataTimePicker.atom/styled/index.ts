import styled from "styled-components";
import Colors from "../../../../constants/colors";
import BreakPoints from "../../../../constants/breakPoints";
import FontsEnum from "../../../../constants/fonts";

export const DatePickerWrapper = styled.div`
	.dayDatePicker,
	.timeDatePicker,
	.datePickerClazz,
	.calendarDatePicker {
		font-family: ${FontsEnum.Nunito} sans-serif !important;
		font-size: 16px;
		& div {
			font-family: ${FontsEnum.Nunito} sans-serif !important;
		}
	}
	& > div {
	}
`;
