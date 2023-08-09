import {FC} from "react";

import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';

import {IDatePickerProps} from "./type";
import {IDataTimePickerPropsDefault} from "./const";
//@ts-ignore
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import(`date-fns/locale/${navigator.language}`).then((locale) => {
    registerLocale(navigator.language, locale.default || locale);
    // Теперь можно использовать локаль в DatePicker
}).catch((error) => {
    console.error('Ошибка при загрузке локали:', error);
});

const DataTimePicker :FC<IDatePickerProps> = ({children = null, locale="ru",dateFormat = "dd.MM.yyyy", selected, onChange,...props}) => {

    return (
        <DatePicker dateFormat={dateFormat} locale={locale} onChange={onChange} selected={selected}  {...props}/>
    );
}
DataTimePicker.defaultProps = IDataTimePickerPropsDefault;
export default DataTimePicker;