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
		dateFormat?: string|"yyyy/MM/dd"|"dd/MM/yyyy"|"MMMM d, yyyy h:mm aa";
		locale?:string|"ru-GB"|"ru"|"en"|"en-GB"|"pt-BR"|"ru-Ru",
		children?:ReactNode | JSX.Element
		showIcon?:boolean,
		isClearable?:boolean,
		popperClassName?:string,
		placeholderText?:string,
		popperPlacement?:string,
		onCalendarClose?:() => void,
		onCalendarOpen?:() => void,
		popperModifiers?:Array<{name?:string, options?:{offset:Array<string>, rootBoundary?:string, tether?:boolean, altAxis?:boolean}}>,
		customInput?: React.FC<{value:ReactNode, onClick : () => void}>,//forwardRef
		renderCustomHeader?:(object:{
			date?:Date,
			changeYear?:(year:number) => void,
			changeMonth?:(index:number) => void,
			decreaseMonth?:(e:any|never) =>void,
			increaseMonth?:(e:any|never) =>void,
			prevMonthButtonDisabled?:boolean,
			nextMonthButtonDisabled?:boolean,
			monthDate?:Date,

		})=>JSX.Element|ReactNode,
		customHeaderCount?:number,
		showFullMonthYearPicker?:boolean,
		showTwoColumnMonthYearPicker?:boolean,
		showFourColumnMonthYearPicker?:boolean,
		showMonthDropdown?:boolean,
		useShortMonthInDropdown?:boolean,
		showMonthYearDropdown?:boolean,
		monthsShown?:number,
		showYearDropdown?:boolean,
		showPopperArrow?:boolean,
		onBlur?:(object?:{target:{value:any}}) => void,
		openToDate?:Date,
		portalId?:string|number,
		showQuarterYearPicker?:boolean,
		readOnly?:boolean,
		timeIntervals?:number,
		timeCaption?:string,
		timeFormat?:string|"HH:mm"|"HH:mm:aa",
		showTimeSelect?:boolean,
		showTimeSelectOnly?:boolean,
		showPreviousMonths?:boolean,
		minTime?:Date,
		maxTime?:Date,
		strictParsing?:boolean,
		tabIndex?:number,
		todayButton?:string | JSX.Element | ReactNode,
		showYearPicker?:boolean,
		renderDayContents?:(month:any,shortName:string, longMonth:string) => JSX.Element | ReactNode,
		showMonthYearPicker?:boolean,
		renderQuarterContent?:(quarter:any,shortQuarter:any) => JSX.Element | ReactNode,
		renderYearContent?:(year:string|number)=>JSX.Element | ReactNode,
		calendarClassName?:string,
		className?:string,
		dayClassName?:(date:Date) => string|undefined|"random",
		timeClassName?:(time:Date) => "text-error"|"text-success"|undefined|string,
		showTimeInput?:boolean,
		customTimeInput?:JSX.Element|ReactNode|React.FC<{date? : Date,value : any, onChange : (e:any) => void}>,
		selectsStart?:boolean,
		selectsEnd?:boolean,
		endDate?:Date,
		startDate?:Date,
		minDate?:Date,
		maxDate?:Date
		selectsRange?:boolean,
		inline?:boolean
		excludeDates?:Array<Date>
		selectsDisabledDaysInRange?:boolean,
		showDisabledMonthNavigation?:boolean,
		withPortal?:boolean,
		disabled?:boolean,
		disabledKeyboardNavigation?:boolean,
		showWeekNumbers?:boolean,
		excludeDateIntervals?:Array<{start:Date, end:Date}>,
		excludeTimes?:Array<Date>,
		filterDate?:(date:Date) => boolean,
		filterTime?:(date:any) => boolean,
		fixedHeight?:boolean,
		handleChangeRaw?:(value:string) => void,
		highlightDates?:Array<Date | {key:string, value:Array<Date>}>,
		includeDates?:Array<Date>,
		includeDateIntervals?:Array<{start:Date, end:Date}>,
		includeTimes?:Array<Date>,
		timeInputLabel?:string,
		yearDropdownItemNumber?:number,
		peekNextMonth?:boolean
		dropdownMode?:string|"select",
		yearItemNumber?:number,
		calendarStartDay?:number,
		required?:boolean,
		form?:string,

	}
//
	class DatePicker extends Component<DatePickerProps> {}

	export default DatePicker;
}