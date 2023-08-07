import { IInputProps } from "./type/index";
import { InputMask, checkType, setDateRange } from "./utils/index";
import * as ST from './styled/index'
import { memo } from "react";

const Input: React.FC<IInputProps> = (props: IInputProps) => {   
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        maxDate = 3,
        autofocus,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(InputMask(type, e.target.value));
    };

    return (
        <ST.Input 
            autoFocus={autofocus}
            value={value}
            type={checkType(type)?"text":type}
            onChange={onChangeHandler} 
            placeholder={placeholder}
            {...type === "datetime-local" && setDateRange(new Date(new Date().setDate(new Date().getDate() + maxDate)))}
            {...otherProps}
        />
    );
};

export default memo(Input);
