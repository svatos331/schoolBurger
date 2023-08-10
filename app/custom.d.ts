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
	import {Component} from "react";
	class DatePicker extends Component<DatePickerProps> {}
	export default DatePicker;
}