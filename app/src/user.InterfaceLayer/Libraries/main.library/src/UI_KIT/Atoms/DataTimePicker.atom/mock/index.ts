import { IDatePickerProps } from "../type";
import { CommonComponentsProps } from "../../../../constants/commonComponentProps";

export const IDataTimePickerPropsDefault: IDatePickerProps = {
	[CommonComponentsProps.onChange]: () => {},
	selected: new Date(),
	[CommonComponentsProps.dateFormat]: "dd:MM:yyyyг.",
};
