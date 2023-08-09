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
		timeFormat:string,
		timeIntervals:number,
		children?:ReactNode | JSX.Element
		// другие пропсы
	}

	class DatePicker extends Component<DatePickerProps> {}

	export default DatePicker;
}