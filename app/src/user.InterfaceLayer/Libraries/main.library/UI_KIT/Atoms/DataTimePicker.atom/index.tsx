import {FC} from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {IDatePickerProps} from "./type";
import {IDataTimePickerPropsDefault} from "./const";

const DataTimePicker :FC<IDatePickerProps> = ({children = null, dateFormat, selected, onChange,...props}) => {
    return (
        <DatePicker onChange={onChange}/>
    );
}
DataTimePicker.defaultProps = IDataTimePickerPropsDefault;
export default DataTimePicker;