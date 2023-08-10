import {FC} from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {IDatePickerProps} from "./type";
import {IDataTimePickerPropsDefault} from "./const";

import * as ST from "./styled";
import React from "react";

const DataTimePicker: FC<IDatePickerProps> = ({onChange, children = null, ...props}) => {
    return (
        <ST.DatePickerWrapper>
            <DatePicker
                //@ts-ignore
                onChange={onChange}
                {...props}
            >
                {children}
            </DatePicker>
        </ST.DatePickerWrapper>
    );
}
DataTimePicker.defaultProps = IDataTimePickerPropsDefault;
export default DataTimePicker;