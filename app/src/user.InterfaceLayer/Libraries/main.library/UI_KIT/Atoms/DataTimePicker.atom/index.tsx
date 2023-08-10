import {FC} from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {IDatePickerProps} from "./type";
import {IDataTimePickerPropsDefault} from "./const";

import * as ST from "./styled";
const DataTimePicker :FC<IDatePickerProps> = ({locale,children = null, dateFormat, selected, onChange,...props}) => {
    return (
        <DatePicker onChange={onChange} {...props} dateFormat = {dateFormat} selected={selected}>{children}</DatePicker>
    );
}
DataTimePicker.defaultProps = IDataTimePickerPropsDefault;
export default DataTimePicker;