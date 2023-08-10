```documentation ``` - https://reactdatepicker.com/#example-children
```применить локаль ```
```
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

<DatePicker
  locale="es"
/>
//вместо es - en или другую, главное - зарегестрировать локаль, все доступные локали - 
date-fns/locale/es
```
```пример```
```
import(`date-fns/locale/${navigator.language}`).then((locale) => {
    registerLocale(navigator.language, locale.default || locale);
    // Теперь можно использовать локаль в DatePicker
}).catch((error) => {
    console.error('Ошибка при загрузке локали:', error);
});
```
