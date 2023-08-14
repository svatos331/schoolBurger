import React, { ReactNode } from "react";

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
	children = "children",
	Icon = "Icon",
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
	isSuccess = "isSuccess",
	dateFormat = "dateFormat",
	timeFormat = "timeFormat",
}

export interface ICommonComponentProps {
	[CommonComponentsProps.onChange]?: () => void;
	[CommonComponentsProps.isError]?: boolean;
	[CommonComponentsProps.isLoading]?: boolean;
	[CommonComponentsProps.isSuccess]?: boolean;
	[CommonComponentsProps.onError]?: () => void;
	[CommonComponentsProps.onSubmit]?: () => void;
	[CommonComponentsProps.onClick]?: () => void;
	[CommonComponentsProps.onToggle]?: () => void;
	[CommonComponentsProps.value]?: any;
	[CommonComponentsProps.dateFormat]?: string;
	[CommonComponentsProps.timeFormat]?: string;
	[CommonComponentsProps.type]?: string;
	[CommonComponentsProps.children]?: JSX.Element | ReactNode; //TODO Проблема с выбором типа
	[CommonComponentsProps.Icon]?: JSX.Element | ReactNode;
	[CommonComponentsProps.placeholder]?: string;
	[CommonComponentsProps.disabled]?: boolean;
	[CommonComponentsProps.label]?: string;
	[CommonComponentsProps.id]?: string;
	[CommonComponentsProps.className]?: string;
	[CommonComponentsProps.style]?: React.CSSProperties;
	[CommonComponentsProps.required]?: boolean;
	[CommonComponentsProps.min]?: number;
	[CommonComponentsProps.max]?: number;
	[CommonComponentsProps.step]?: number;
	[CommonComponentsProps.options]?: Array<{ label: string; value: any }>; // Используем value для определения значения выбора
	[CommonComponentsProps.multiple]?: boolean;
	[CommonComponentsProps.rows]?: number;
	[CommonComponentsProps.cols]?: number;
	[CommonComponentsProps.maxLength]?: number;
	[CommonComponentsProps.minLength]?: number;
	[CommonComponentsProps.pattern]?: string;
	[CommonComponentsProps.autoFocus]?: boolean;
}
