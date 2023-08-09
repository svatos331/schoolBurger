declare module "*.svg" {
	import React = require("react");
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>;
	const src: string;
	export default src;
}

declare module "*.module.css";


declare module 'react-datepicker' {
	import React, {Component, ReactNode} from 'react';
	interface DatePickerProps {
		selected: Date;
		onChange: (date: Date) => void;
		showTimeSelect?: boolean;
		dateFormat?: string;
		locale?:string|"en-ru",
		timeFormat?:string,
		timeIntervals?:number,
		children?:ReactNode | JSX.Element
		showIcon?:boolean,
		isClearable?:boolean,
		popperClassName?:string,
		placeholderText?:string,
		popperPlacement?:string,
		onCalendarClose?:() => void,
		onCalendarOpen?:() => void,
		popperModifiers:Array<{name?:string, options?:{offset:Array<string>, rootBoundery?:string, tether?:boolean, altAxis?:boolean}}>,
		customInput?: forwardRef<JSX.Element | ReactNode,  {value:ReactNode, onClick : () => void}>,
		renderCustomHeader
		// другие пропсы
	}
//
	class DatePicker extends Component<DatePickerProps> {}

	export default DatePicker;
}