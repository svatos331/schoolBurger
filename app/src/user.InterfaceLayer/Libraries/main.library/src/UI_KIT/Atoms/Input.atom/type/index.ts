import { type } from "os";
import {
	CommonComponentsProps,
	ICommonComponentProps,
} from "../../../../constants/commonComponentProps";

export enum inputTypeEnum {
	NUMBER = "number",
	TEXT = "text",
	CVV = "cvv",
	CARD_DATE = "cardDate",
	CARD = "card",
	DATE = "datetime-local",
	TEXT_ONLY = "textOnly",
	TEL = "tel",
	EMAIL = "email",
	PASSWORD = "password",
}

export enum likeTxtTypeEnum {
	number = "number",
	text = "text",
	tel = "tel",
	textOnly = "textOnly",
	card = "card",
	cvv = "cvv",
	cardDate = "cardDate",
}

type extendsCommonType = Pick<
	ICommonComponentProps,
	| CommonComponentsProps.className
	| CommonComponentsProps.maxLength
	| CommonComponentsProps.isError
	| CommonComponentsProps.isLoading
	| CommonComponentsProps.max
	| CommonComponentsProps.placeholder
	| CommonComponentsProps.autoFocus
	| CommonComponentsProps.required
	| CommonComponentsProps.disabled
>;

type requiredProps = Pick<ICommonComponentProps, CommonComponentsProps.value>;

export interface IInputProps
	extends extendsCommonType,
		Required<requiredProps> {
	readonly?: boolean;
	type: inputTypeEnum;
	onChange: (val: string) => void;
}

export interface testProps {
	type: inputTypeEnum;
	isError?: boolean;
	isLoading?: boolean;
}
