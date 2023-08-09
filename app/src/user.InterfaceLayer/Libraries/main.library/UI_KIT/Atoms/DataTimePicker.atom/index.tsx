import {FC, useState} from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DataTimePicker :FC = () => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    return (
        <DatePicker
            selected={startDate}
            onChange={(date:Date) => setStartDate(date)}
         />
    );
}
export default DataTimePicker;