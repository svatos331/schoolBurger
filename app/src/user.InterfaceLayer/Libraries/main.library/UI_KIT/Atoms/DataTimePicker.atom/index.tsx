import {FC} from "react";

import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';

import {IDatePickerProps} from "./type";
import {IDataTimePickerPropsDefault} from "./const";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import(`date-fns/locale/${navigator.language}`).then((locale) => {
    registerLocale(navigator.language, locale.default || locale);
    // Теперь можно использовать локаль в DatePicker
}).catch((error) => {
    console.error('Ошибка при загрузке локали:', error);
});

const DataTimePicker :FC<IDatePickerProps> = ({children = null, dateFormat, selected, onChange,...props}) => {
    return (
        <DatePicker onChange={onChange} {...props}/>
    );
}
DataTimePicker.defaultProps = IDataTimePickerPropsDefault;
export default DataTimePicker;