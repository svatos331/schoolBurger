import React from "react";

export enum CommonComponentsProps {
	isLoading = "isLoading",
	onChange = "onChange",
	isError = "isError",
	onError = "onError",
	onSubmit = "onSubmit",
	onClick = "onClick",
	onToggle = "onToggle",
	value = "value",
	type = "type",
	placeholder = "placeholder",
	disabled = "disabled",
	label = "label",
	id = "id",
	className = "className",
	style = "style",
	required = "required",
	min = "min",
	max = "max",
	step = "step",
	options = "options",
	multiple = "multiple",
	rows = "rows",
	cols = "cols",
	maxLength = "maxLength",
	minLength = "minLength",
	pattern = "pattern",
	autoFocus = "autoFocus",
}

export interface ICommonComponentProps {
	onChange?: (value: any) => void;
	isError?: boolean;
	isLoading?: boolean;
	isSuccess?: boolean;
	onError?: () => void;
	onSubmit?: () => void;
	onClick?: () => void;
	onToggle?: () => void;
	value?: any;
	dateFormat?: string;
	timeFormat?: string;
	type?: string;
	placeholder?: string;
	disabled?: boolean;
	label?: string;
	id?: string;
	className?: string;
	style?: React.CSSProperties;
	required?: boolean;
	min?: number;
	max?: number;
	step?: number;
	options?: Array<{ label: string; value: any }>; // Используем value для определения значения выбора
	multiple?: boolean;
	rows?: number;
	cols?: number;
	maxLength?: number;
	minLength?: number;
	pattern?: string;
	autoFocus?: boolean;
}
