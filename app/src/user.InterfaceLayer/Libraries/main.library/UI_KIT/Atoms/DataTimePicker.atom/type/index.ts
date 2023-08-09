import {ReactNode} from "react";

export interface IDatePickerProps {
    selected: Date,
    onChange: (date: Date) => void,
    showTimeSelect?: boolean,
    dateFormat?: string,
    locale?:string|"en-ru",
    timeFormat:string,
    timeIntervals:number,
    children?:ReactNode | JSX.Element

}