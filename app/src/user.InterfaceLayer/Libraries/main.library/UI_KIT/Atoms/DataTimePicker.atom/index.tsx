import {FC} from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {IDatePickerProps} from "./type";
import {IDataTimePickerPropsDefault} from "./const";

const DataTimePicker :FC<IDatePickerProps> = ({children, dateFormat, selected, onChange,...props}) => {
    return (
        <DatePicker
            locale="ru-Ru"
            dateFormat={dateFormat}
            selected={selected}
            onChange={onChange}
            {...props}
         >{children?children:null}</DatePicker>
    );
}
DataTimePicker.defaultProps = IDataTimePickerPropsDefault;
export default DataTimePicker;