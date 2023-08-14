import {
	CommonComponentsProps,
	ICommonComponentProps,
} from "../../../../constants/commonComponentProps";
import { InputTypeEnum } from "../enum";

type ExtendsCommonType = Pick<
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

type RequiredProps = Pick<ICommonComponentProps, CommonComponentsProps.value>;

export interface IInputProps
	extends ExtendsCommonType,
		Required<RequiredProps> {
	readonly?: boolean;
	type: InputTypeEnum;
	onChange: (val: string) => void;
}

export interface TestProps {
	type: InputTypeEnum;
	isError?: boolean;
	isLoading?: boolean;
}
