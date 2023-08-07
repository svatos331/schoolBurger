import { HTMLInputTypeAttribute } from "react";

export const likeTxtType = ["number", "text", "tel","textOnly"];

export interface IInputProps {
    className?: string;
    maxlength?: string;
    type: HTMLInputTypeAttribute,
    placeholder?: string,
    value: string;
    disabled?: boolean;
    required?: boolean;
    maxDate?: number;
    readonly?: boolean;
    autofocus?: boolean;
    onChange: (value: string) => void
}