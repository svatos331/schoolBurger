import {ReactDatePickerProps} from "react-datepicker";
import * as React from "react";


export interface IDatePickerProps  extends ReactDatePickerProps{
    onChange:(d:Date, event?:React.SyntheticEvent<any> | undefined) => void;

}