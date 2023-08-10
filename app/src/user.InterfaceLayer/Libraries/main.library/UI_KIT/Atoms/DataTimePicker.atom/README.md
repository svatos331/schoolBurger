```documentation ``` - https://reactdatepicker.com/#example-children



```example locale:```
```
import(`date-fns/locale/${navigator.language}`).then((locale) => {
    registerLocale(navigator.language, locale.default || locale);
    // Теперь можно использовать локаль в DatePicker
}).catch((error) => {
    console.error('Ошибка при загрузке локали:', error);
});
```