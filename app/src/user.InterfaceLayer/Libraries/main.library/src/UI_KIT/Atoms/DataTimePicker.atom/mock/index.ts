import { IDatePickerProps } from "../type";
import { CommonComponentsProps } from "../../../../constants/commonComponentProps";

export const IDataTimePickerPropsDefault: IDatePickerProps = {
	[CommonComponentsProps.onChange]: () => {},
	selected: new Date(),
	onInputClick: () => {},
	onChangeRaw: (e: React.FocusEvent<HTMLInputElement, Element>) => {},
	[CommonComponentsProps.dateFormat]: "dd:MM:yyyyг.",
};
