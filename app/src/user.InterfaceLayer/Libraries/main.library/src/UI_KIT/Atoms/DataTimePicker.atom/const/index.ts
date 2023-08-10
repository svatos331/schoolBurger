import {IDatePickerProps} from "../type";

export const IDataTimePickerPropsDefault : IDatePickerProps= {
    onChange:() => {},
    selected: new Date(),
    dateFormat:"dd:MM:yyyyг."
}