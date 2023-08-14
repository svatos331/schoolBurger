# Input
## Описания атома
Компонент необходим для ввода пользователем каких-либо данных
## Пропсы
-    className?: string;
-    maxlength?: string;
-    type: HTMLInputTypeAttribute,
-    placeholder?: string,
-    value: string;
-    disabled?: boolean;
-    required?: boolean;
-    maxDate?: number;
-    readonly?: boolean;
-    autofocus?: boolean;
-    onChange: (value: string) => void
## Маски
- изменена логика ввода "number": убраны все лишние символы (е, +, -), а также добавлено ограничение на первый символ, который не должен быть нулевым
- добавлен тип "textOnly", который может обрабатывать только символы английского и русского алфавитов в разных регистрах
- изменен формат номера телефона в типе "tel":  7[8]8888888888
- добавлено ограничение на временной отрезок в тип "datetime-local"
## Тесты
- Сторибук
- Юнит


