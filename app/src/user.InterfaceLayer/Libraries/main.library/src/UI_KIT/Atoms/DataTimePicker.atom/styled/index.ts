import styled, { css, keyframes } from "styled-components";
import Colors from "../../../../constants/colors";
import LocalColors from "../const/colors";
import BreakPoints from "../../../../constants/breakPoints";
import FontsEnum from "../../../../constants/fonts";
const colorChange = keyframes`
  from {
	  background-color: ${Colors.ORANGE_HOVER};

  }
  to {
	  background-color: ${Colors.ORANGE_ACTIVE};
	  color: ${Colors.WHITE} !important;
  }
`;
export const DatePickerWrapper = styled.div<{
	$disabled?: boolean;
	$animation?: boolean;
}>`
	color: ${Colors.BLACK};
	font-family: ${FontsEnum.Nunito}, serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 100%;

	.react-datepicker-wrapper {
		input {
			display: flex;
			padding: 5% 0;
			align-items: center;
			justify-content: center;
			text-align: center;
			border-radius: 12px;
			background-color: ${Colors.WHITE_DEFAULT};
			border: 0;
			color: ${Colors.BLACK};
			font-family: ${FontsEnum.Nunito}, serif;
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 100%;
			${({ $disabled }) =>
				$disabled
					? css`
							background-color: ${Colors.BUTTON_DISABLED_BG};
							color: ${Colors.GRAY};
					  `
					: css`
							background-color: ${Colors.WHITE_DEFAULT};
							border: 0;
							color: ${Colors.BLACK};

							&:hover {
								background-color: ${Colors.ORANGE_HOVER};
								color: ${Colors.WHITE};
								transition: background-color 0.1s ease;
							}
					  `}
			${({ $animation, $disabled }) =>
				$animation &&
				!$disabled &&
				css`
					animation: ${colorChange} 0.4s linear forwards;
				`};
			@media (max-width: ${BreakPoints.SMALL_MOBILE}px) {
				padding: 5% 0;
			}
		}
	}

	.dayDatePicker,
	.timeDatePicker,
	.datePickerClazz,
	.calendarDatePicker {
		font-family: ${FontsEnum.Nunito} sans-serif !important;

		& div {
			font-family: ${FontsEnum.Nunito} sans-serif !important;
		}
	}

	@charset "UTF-8";

	.react-datepicker__year-read-view--down-arrow,
	.react-datepicker__month-read-view--down-arrow,
	.react-datepicker__month-year-read-view--down-arrow,
	.react-datepicker__navigation-icon::before {
		border-color: ${Colors.ORANGE_ACTIVE};
		border-style: solid;
		border-width: 3px 3px 0 0;
		content: "";
		display: block;
		height: 9px;
		position: absolute;
		top: 6px;
		width: 9px;
	}

	.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
	.react-datepicker-popper[data-placement^="bottom"]
		.react-datepicker__triangle {
		margin-left: -4px;
		position: absolute;
		width: 0;
	}

	.react-datepicker-popper[data-placement^="top"]
		.react-datepicker__triangle::before
	.react-datepicker-popper[data-placement^="bottom"]
		.react-datepicker__triangle::before
	.react-datepicker-popper[data-placement^="top"]
		.react-datepicker__triangle::after
	.react-datepicker-popper[data-placement^="bottom"]
		.react-datepicker__triangle::after {
		box-sizing: content-box;
		position: absolute;
		border: 8px solid transparent;
		height: 0;
		width: 1px;
		content: "";
		z-index: -1;
		border-width: 8px;
		left: -8px;
	}

	.react-datepicker-popper[data-placement^="top"]
		.react-datepicker__triangle::before,
	.react-datepicker-popper[data-placement^="bottom"]
		.react-datepicker__triangle::before {
		border-bottom-color: ${Colors.ORANGE_ACTIVE};
	}

	.react-datepicker-popper[data-placement^="bottom"]
		.react-datepicker__triangle {
		top: 0;
		margin-top: -8px;
	}

	.react-datepicker-popper[data-placement^="bottom"]
		.react-datepicker__triangle::before,
	.react-datepicker-popper[data-placement^="bottom"]
		.react-datepicker__triangle::after {
		border-top: none;
		border-bottom-color: ${Colors.ORANGE_ACTIVE};
	}

	.react-datepicker-popper[data-placement^="bottom"]
		.react-datepicker__triangle::after {
		top: 0;
	}

	.react-datepicker-popper[data-placement^="bottom"]
		.react-datepicker__triangle::before {
		top: -1px;
		border-bottom-color: ${Colors.ORANGE_HOVER};
	}

	.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle {
		bottom: 0;
		margin-bottom: -8px;
	}

	.react-datepicker-popper[data-placement^="top"]
		.react-datepicker__triangle::before,
	.react-datepicker-popper[data-placement^="top"]
		.react-datepicker__triangle::after {
		border-bottom: none;
		border-top-color: ${Colors.ORANGE_HOVER};
	}

	.react-datepicker-popper[data-placement^="top"]
		.react-datepicker__triangle::after {
		bottom: 0;
	}

	.react-datepicker-popper[data-placement^="top"]
		.react-datepicker__triangle::before {
		bottom: -1px;
		border-top-color: ${Colors.ORANGE_ACTIVE};
	}

	.react-datepicker-wrapper {
		display: inline-block;
		padding: 0;
		border: 0;
	}

	.react-datepicker {
		font-family: ${FontsEnum.Nunito} arial, sans-serif;
		font-size: 0.8rem;
		background-color: ${Colors.WHITE};
		color: ${Colors.BLACK};
		border: 1px solid ${Colors.ORANGE_ACTIVE};
		border-radius: 0.3rem;
		display: inline-block;
		position: relative;
	}

	.react-datepicker--time-only .react-datepicker__triangle {
		left: 35px;
	}

	.react-datepicker--time-only .react-datepicker__time-container {
		border-left: 0;
	}

	.react-datepicker--time-only .react-datepicker__time,
	.react-datepicker--time-only .react-datepicker__time-box {
		border-bottom-left-radius: 0.3rem;
		border-bottom-right-radius: 0.3rem;
	}

	.react-datepicker__triangle {
		position: absolute;
		left: 50px;
	}

	.react-datepicker-popper {
		z-index: 1;
	}

	.react-datepicker-popper[data-placement^="bottom"] {
		padding-top: 10px;
	}

	.react-datepicker-popper[data-placement="bottom-end"]
		.react-datepicker__triangle,
	.react-datepicker-popper[data-placement="top-end"]
		.react-datepicker__triangle {
		left: auto;
		right: 50px;
	}

	.react-datepicker-popper[data-placement^="top"] {
		padding-bottom: 10px;
	}

	.react-datepicker-popper[data-placement^="right"] {
		padding-left: 8px;
	}

	.react-datepicker-popper[data-placement^="right"]
		.react-datepicker__triangle {
		left: auto;
		right: 42px;
	}

	.react-datepicker-popper[data-placement^="left"] {
		padding-right: 8px;
	}

	.react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
		left: 42px;
		right: auto;
	}
	.react-datepicker__header--time {
		padding-bottom: 8px;
		padding-left: 5px;
		padding-right: 5px;
	}

	.react-datepicker__header--time:not(.react-datepicker__header--time--only) {
		border-top-left-radius: 0;
	}

	.react-datepicker__header:not(.react-datepicker__header--has-time-select) {
		border-top-right-radius: 0.3rem;
	}

	.react-datepicker__year-dropdown-container--select,
	.react-datepicker__month-dropdown-container--select,
	.react-datepicker__month-year-dropdown-container--select,
	.react-datepicker__year-dropdown-container--scroll,
	.react-datepicker__month-dropdown-container--scroll,
	.react-datepicker__month-year-dropdown-container--scroll {
		display: inline-block;
		margin: 0 15px;
	}

	.react-datepicker__current-month,
	.react-datepicker-time__header,
	.react-datepicker-year-header {
		margin-top: 0;
		color: ${Colors.BLACK};
		font-weight: bold;
		font-size: 0.944rem;
	}

	.react-datepicker-time__header {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.react-datepicker__navigation {
		align-items: center;
		background: none;
		display: flex;
		justify-content: center;
		text-align: center;
		cursor: pointer;
		position: absolute;
		top: 2px;
		padding: 0;
		border: none;
		z-index: 1;
		height: 32px;
		width: 32px;
		text-indent: -999em;
		overflow: hidden;
	}

	.react-datepicker__navigation--previous {
		left: 2px;
	}

	.react-datepicker__navigation--next {
		right: 2px;
	}

	.react-datepicker__navigation--next--with-time:not(
			.react-datepicker__navigation--next--with-today-button
		) {
		right: 85px;
	}

	.react-datepicker__navigation--years {
		position: relative;
		top: 0;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.react-datepicker__navigation--years-previous {
		top: 4px;
	}

	.react-datepicker__navigation--years-upcoming {
		top: -4px;
	}

	.react-datepicker__navigation:hover *::before {
		border-color: ${Colors.ORANGE_HOVER};
	}

	.react-datepicker__navigation-icon {
		position: relative;
		top: -1px;
		font-size: 20px;
		width: 0;
	}

	.react-datepicker__navigation-icon--next {
		left: -2px;
	}

	.react-datepicker__navigation-icon--next::before {
		transform: rotate(45deg);
		left: -7px;
	}

	.react-datepicker__navigation-icon--previous {
		right: -2px;
	}

	.react-datepicker__navigation-icon--previous::before {
		transform: rotate(225deg);
		right: -7px;
	}

	.react-datepicker__month-container {
		float: left;
	}

	.react-datepicker__year {
		margin: 0.4rem;
		text-align: center;
	}

	.react-datepicker__year-wrapper {
		display: flex;
		flex-wrap: wrap;
		max-width: 180px;
	}

	.react-datepicker__year .react-datepicker__year-text {
		display: inline-block;
		width: 4rem;
		margin: 2px;
	}

	.react-datepicker__month {
		margin: 0.4rem;
		text-align: center;
	}

	.react-datepicker__month .react-datepicker__month-text,
	.react-datepicker__month .react-datepicker__quarter-text {
		display: inline-block;
		width: 4rem;
		margin: 2px;
	}

	.react-datepicker__input-time-container {
		clear: both;
		width: 100%;
		float: left;
		margin: 5px 0 10px 15px;
		text-align: left;
	}

	.react-datepicker__input-time-container .react-datepicker-time__caption {
		display: inline-block;
	}

	.react-datepicker__input-time-container
		.react-datepicker-time__input-container {
		display: inline-block;
	}

	.react-datepicker__input-time-container
		.react-datepicker-time__input-container
		.react-datepicker-time__input {
		display: inline-block;
		margin-left: 10px;
	}

	.react-datepicker__input-time-container
		.react-datepicker-time__input-container
		.react-datepicker-time__input
		input {
		width: auto;
	}

	.react-datepicker__input-time-container
		.react-datepicker-time__input-container
		.react-datepicker-time__input
		input[type="time"]::-webkit-inner-spin-button,
	.react-datepicker__input-time-container
		.react-datepicker-time__input-container
		.react-datepicker-time__input
		input[type="time"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.react-datepicker__input-time-container
		.react-datepicker-time__input-container
		.react-datepicker-time__input
		input[type="time"] {
		-moz-appearance: textfield;
	}

	.react-datepicker__input-time-container
		.react-datepicker-time__input-container
		.react-datepicker-time__delimiter {
		margin-left: 5px;
		display: inline-block;
	}

	.react-datepicker__time-container {
		float: right;
		border-left: 1px solid ${Colors.GRAY};
		width: 85px;
	}

	.react-datepicker__time-container--with-today-button {
		display: inline;
		border: 1px solid ${Colors.GRAY};
		border-radius: 0.3rem;
		position: absolute;
		right: -87px;
		top: 0;
	}

	.react-datepicker__time-container .react-datepicker__time {
		position: relative;
		background: ${Colors.WHITE};
		border-bottom-right-radius: 0.3rem;
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box {
		width: 85px;
		overflow-x: hidden;
		margin: 0 auto;
		text-align: center;
		border-bottom-right-radius: 0.3rem;
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box
		ul.react-datepicker__time-list {
		list-style: none;
		margin: 0;
		height: calc(195px + (1.7rem / 2));
		overflow-y: scroll;
		padding-right: 0;
		padding-left: 0;
		width: 100%;
		box-sizing: content-box;
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box
		ul.react-datepicker__time-list
		li.react-datepicker__time-list-item {
		height: 30px;
		padding: 5px 10px;
		white-space: nowrap;
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box
		ul.react-datepicker__time-list
		li.react-datepicker__time-list-item:hover {
		cursor: pointer;
		background-color: ${Colors.ORANGE_HOVER};
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box
		ul.react-datepicker__time-list
		li.react-datepicker__time-list-item--selected {
		background-color: ${Colors.ORANGE_HOVER};
		color: ${Colors.ORANGE_HOVER};
		font-weight: bold;
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box
		ul.react-datepicker__time-list
		li.react-datepicker__time-list-item--selected:hover {
		background-color: ${Colors.ORANGE_HOVER};
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box
		ul.react-datepicker__time-list
		li.react-datepicker__time-list-item--disabled {
		color: ${Colors.GRAY};
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box
		ul.react-datepicker__time-list
		li.react-datepicker__time-list-item--disabled:hover {
		cursor: default;
		background-color: transparent;
	}

	.react-datepicker__week-number {
		color: ${Colors.GRAY};
		display: inline-block;
		width: 1.7rem;
		line-height: 1.7rem;
		text-align: center;
		margin: 0.166rem;
	}

	.react-datepicker__week-number.react-datepicker__week-number--clickable {
		cursor: pointer;
	}

	.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
		border-radius: 0.3rem;
		background-color: ${Colors.GRAY};
	}

	.react-datepicker__day-names,
	.react-datepicker__week {
		white-space: nowrap;
	}

	.react-datepicker__day-names {
		margin-bottom: -8px;
	}

	.react-datepicker__day-name,
	.react-datepicker__day,
	.react-datepicker__time-name {
		color: ${Colors.BLACK};
		display: inline-block;
		width: 1.7rem;
		line-height: 1.7rem;
		text-align: center;
		margin: 0.166rem;
	}

	.react-datepicker__day,
	.react-datepicker__month-text,
	.react-datepicker__quarter-text,
	.react-datepicker__year-text {
		cursor: pointer;
	}

	.react-datepicker__day:hover,
	.react-datepicker__month-text:hover,
	.react-datepicker__quarter-text:hover,
	.react-datepicker__year-text:hover {
		border-radius: 0.3rem;
		background-color: ${Colors.GRAY};
	}

	.react-datepicker__day--today,
	.react-datepicker__month-text--today,
	.react-datepicker__quarter-text--today,
	.react-datepicker__year-text--today {
		font-weight: bold;
	}

	.react-datepicker__day--highlighted,
	.react-datepicker__month-text--highlighted,
	.react-datepicker__quarter-text--highlighted,
	.react-datepicker__year-text--highlighted {
		border-radius: 0.3rem;
		color: ${Colors.WHITE};
	}

	.react-datepicker__day--highlighted:hover,
	.react-datepicker__month-text--highlighted:hover,
	.react-datepicker__quarter-text--highlighted:hover,
	.react-datepicker__year-text--highlighted:hover {
		background-color: ${Colors.ORANGE_DEFAULT};
	}

	.react-datepicker__day--selected,
	.react-datepicker__day--in-selecting-range,
	.react-datepicker__day--in-range,
	.react-datepicker__month-text--selected,
	.react-datepicker__month-text--in-selecting-range,
	.react-datepicker__month-text--in-range,
	.react-datepicker__quarter-text--selected,
	.react-datepicker__quarter-text--in-selecting-range,
	.react-datepicker__quarter-text--in-range,
	.react-datepicker__year-text--selected,
	.react-datepicker__year-text--in-selecting-range,
	.react-datepicker__year-text--in-range {
		border-radius: 0.3rem;
		background-color: ${Colors.ORANGE_HOVER};
		color: ${Colors.WHITE};
	}

	.react-datepicker__day--selected:hover,
	.react-datepicker__day--in-selecting-range:hover,
	.react-datepicker__day--in-range:hover,
	.react-datepicker__month-text--selected:hover,
	.react-datepicker__month-text--in-selecting-range:hover,
	.react-datepicker__month-text--in-range:hover,
	.react-datepicker__quarter-text--selected:hover,
	.react-datepicker__quarter-text--in-selecting-range:hover,
	.react-datepicker__quarter-text--in-range:hover,
	.react-datepicker__year-text--selected:hover,
	.react-datepicker__year-text--in-selecting-range:hover,
	.react-datepicker__year-text--in-range:hover {
		background-color: ${Colors.ORANGE_DEFAULT};
	}

	.react-datepicker__day--keyboard-selected,
	.react-datepicker__month-text--keyboard-selected,
	.react-datepicker__quarter-text--keyboard-selected,
	.react-datepicker__year-text--keyboard-selected {
		border-radius: 0.3rem;
		background-color: ${Colors.ORANGE_HOVER};
		color: rgb(0, 0, 0);
	}

	.react-datepicker__day--keyboard-selected:hover,
	.react-datepicker__month-text--keyboard-selected:hover,
	.react-datepicker__quarter-text--keyboard-selected:hover,
	.react-datepicker__year-text--keyboard-selected:hover {
		background-color: ${Colors.ORANGE_DEFAULT};
	}

	.react-datepicker__day--in-selecting-range:not(
			.react-datepicker__day--in-range,
			.react-datepicker__month-text--in-range,
			.react-datepicker__quarter-text--in-range,
			.react-datepicker__year-text--in-range
		),
	.react-datepicker__month-text--in-selecting-range:not(
			.react-datepicker__day--in-range,
			.react-datepicker__month-text--in-range,
			.react-datepicker__quarter-text--in-range,
			.react-datepicker__year-text--in-range
		),
	.react-datepicker__quarter-text--in-selecting-range:not(
			.react-datepicker__day--in-range,
			.react-datepicker__month-text--in-range,
			.react-datepicker__quarter-text--in-range,
			.react-datepicker__year-text--in-range
		),
	.react-datepicker__year-text--in-selecting-range:not(
			.react-datepicker__day--in-range,
			.react-datepicker__month-text--in-range,
			.react-datepicker__quarter-text--in-range,
			.react-datepicker__year-text--in-range
		) {
		background-color: ${Colors.ORANGE_DEFAULT};
	}

	.react-datepicker__month--selecting-range
		.react-datepicker__day--in-range:not(
			.react-datepicker__day--in-selecting-range,
			.react-datepicker__month-text--in-selecting-range,
			.react-datepicker__quarter-text--in-selecting-range,
			.react-datepicker__year-text--in-selecting-range
		),
	.react-datepicker__year--selecting-range
		.react-datepicker__day--in-range:not(
			.react-datepicker__day--in-selecting-range,
			.react-datepicker__month-text--in-selecting-range,
			.react-datepicker__quarter-text--in-selecting-range,
			.react-datepicker__year-text--in-selecting-range
		),
	.react-datepicker__month--selecting-range
		.react-datepicker__month-text--in-range:not(
			.react-datepicker__day--in-selecting-range,
			.react-datepicker__month-text--in-selecting-range,
			.react-datepicker__quarter-text--in-selecting-range,
			.react-datepicker__year-text--in-selecting-range
		),
	.react-datepicker__year--selecting-range
		.react-datepicker__month-text--in-range:not(
			.react-datepicker__day--in-selecting-range,
			.react-datepicker__month-text--in-selecting-range,
			.react-datepicker__quarter-text--in-selecting-range,
			.react-datepicker__year-text--in-selecting-range
		),
	.react-datepicker__month--selecting-range
		.react-datepicker__quarter-text--in-range:not(
			.react-datepicker__day--in-selecting-range,
			.react-datepicker__month-text--in-selecting-range,
			.react-datepicker__quarter-text--in-selecting-range,
			.react-datepicker__year-text--in-selecting-range
		),
	.react-datepicker__year--selecting-range
		.react-datepicker__quarter-text--in-range:not(
			.react-datepicker__day--in-selecting-range,
			.react-datepicker__month-text--in-selecting-range,
			.react-datepicker__quarter-text--in-selecting-range,
			.react-datepicker__year-text--in-selecting-range
		),
	.react-datepicker__month--selecting-range
		.react-datepicker__year-text--in-range:not(
			.react-datepicker__day--in-selecting-range,
			.react-datepicker__month-text--in-selecting-range,
			.react-datepicker__quarter-text--in-selecting-range,
			.react-datepicker__year-text--in-selecting-range
		),
	.react-datepicker__year--selecting-range
		.react-datepicker__year-text--in-range:not(
			.react-datepicker__day--in-selecting-range,
			.react-datepicker__month-text--in-selecting-range,
			.react-datepicker__quarter-text--in-selecting-range,
			.react-datepicker__year-text--in-selecting-range
		) {
		background-color: ${Colors.ORANGE_DEFAULT};
		color: ${Colors.BLACK};
	}

	.react-datepicker__day--disabled,
	.react-datepicker__month-text--disabled,
	.react-datepicker__quarter-text--disabled,
	.react-datepicker__year-text--disabled {
		cursor: default;
		color: ${Colors.WHITE};
	}

	.react-datepicker__day--disabled:hover,
	.react-datepicker__month-text--disabled:hover,
	.react-datepicker__quarter-text--disabled:hover,
	.react-datepicker__year-text--disabled:hover {
		background-color: transparent;
	}

	.react-datepicker__input-container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		flex-shrink: 0;
		width: 100%;
	}

	.react-datepicker__input-container .react-datepicker__calendar-icon {
		position: absolute;
		padding: 0.5rem;
	}

	.react-datepicker__view-calendar-icon input {
		padding: 6px 10px 5px 25px;
	}

	.react-datepicker__year-read-view,
	.react-datepicker__month-read-view,
	.react-datepicker__month-year-read-view {
		border: 1px solid transparent;
		border-radius: 0.3rem;
		position: relative;
	}

	.react-datepicker__year-read-view:hover,
	.react-datepicker__month-read-view:hover,
	.react-datepicker__month-year-read-view:hover {
		cursor: pointer;
	}

	.react-datepicker__year-read-view:hover
		.react-datepicker__year-read-view--down-arrow,
	.react-datepicker__year-read-view:hover
		.react-datepicker__month-read-view--down-arrow,
	.react-datepicker__month-read-view:hover
		.react-datepicker__year-read-view--down-arrow,
	.react-datepicker__month-read-view:hover
		.react-datepicker__month-read-view--down-arrow,
	.react-datepicker__month-year-read-view:hover
		.react-datepicker__year-read-view--down-arrow,
	.react-datepicker__month-year-read-view:hover
		.react-datepicker__month-read-view--down-arrow {
		border-top-color: ${Colors.GRAY}; //6
	}

	.react-datepicker__year-read-view--down-arrow,
	.react-datepicker__month-read-view--down-arrow,
	.react-datepicker__month-year-read-view--down-arrow {
		transform: rotate(135deg);
		right: -16px;
		top: 0;
	}

	.react-datepicker__year-dropdown,
	.react-datepicker__month-dropdown,
	.react-datepicker__month-year-dropdown {
		position: absolute;
		width: 50%;
		left: 25%;
		top: 30px;
		z-index: 1;
		text-align: center;
		border-radius: 0.3rem;
		border: 1px solid ${Colors.GRAY}; //5
	}

	.react-datepicker__year-dropdown:hover,
	.react-datepicker__month-dropdown:hover,
	.react-datepicker__month-year-dropdown:hover {
		cursor: pointer;
	}

	.react-datepicker__year-dropdown--scrollable,
	.react-datepicker__month-dropdown--scrollable,
	.react-datepicker__month-year-dropdown--scrollable {
		height: 150px;
		overflow-y: scroll;
	}

	.react-datepicker__year-option,
	.react-datepicker__month-option,
	.react-datepicker__month-year-option {
		line-height: 20px;
		width: 100%;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.react-datepicker__year-option:first-of-type,
	.react-datepicker__month-option:first-of-type,
	.react-datepicker__month-year-option:first-of-type {
		border-top-left-radius: 0.3rem;
		border-top-right-radius: 0.3rem;
	}

	.react-datepicker__year-option:last-of-type,
	.react-datepicker__month-option:last-of-type,
	.react-datepicker__month-year-option:last-of-type {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		border-bottom-left-radius: 0.3rem;
		border-bottom-right-radius: 0.3rem;
	}

	.react-datepicker__year-option:hover,
	.react-datepicker__month-option:hover,
	.react-datepicker__month-year-option:hover {
		background-color: ${Colors.GRAY};
	}

	.react-datepicker__year-option:hover
		.react-datepicker__navigation--years-upcoming,
	.react-datepicker__month-option:hover
		.react-datepicker__navigation--years-upcoming,
	.react-datepicker__month-year-option:hover
		.react-datepicker__navigation--years-upcoming {
		border-bottom-color: ${Colors.ORANGE_ACTIVE};
	}

	.react-datepicker__year-option:hover
		.react-datepicker__navigation--years-previous,
	.react-datepicker__month-option:hover
		.react-datepicker__navigation--years-previous,
	.react-datepicker__month-year-option:hover
		.react-datepicker__navigation--years-previous {
		border-top-color: ${Colors.GRAY}; //gray_6
	}

	.react-datepicker__year-option--selected,
	.react-datepicker__month-option--selected,
	.react-datepicker__month-year-option--selected {
		position: absolute;
		left: 15px;
	}

	.react-datepicker__close-icon {
		cursor: pointer;
		background-color: ${Colors.TRANSPARENT};
		border: 0;
		outline: 0;
		padding: 0 6px 0 0;
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		display: table-cell;
		vertical-align: middle;
	}

	.react-datepicker__close-icon::after {
		cursor: pointer;
		background-color: ${Colors.ORANGE_ACTIVE};
		color: ${Colors.GRAY};
		border-radius: 50%;
		height: 16px;
		width: 16px;
		padding: 2px;
		font-size: 12px;
		line-height: 1;
		text-align: center;
		display: table-cell;
		vertical-align: middle;
		content: "×";
	}

	.react-datepicker__today-button {
		background: ${Colors.WHITE};
		border-top: 1px solid ${Colors.ORANGE_ACTIVE};
		cursor: pointer;
		text-align: center;
		font-weight: bold;
		padding: 5px 0;
		clear: left;
	}

	.react-datepicker__portal {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: ${LocalColors.BLACK_ALPHA};
		left: 0;
		top: 0;
		justify-content: center;
		align-items: center;
		display: flex;
		z-index: 2147483647;
	}

	.react-datepicker__portal .react-datepicker__day-name,
	.react-datepicker__portal .react-datepicker__day,
	.react-datepicker__portal .react-datepicker__time-name {
		width: 3rem;
		line-height: 3rem;
	}

	@media (max-width: 400px), (max-height: 550px) {
		.react-datepicker__portal .react-datepicker__day-name,
		.react-datepicker__portal .react-datepicker__day,
		.react-datepicker__portal .react-datepicker__time-name {
			width: 2rem;
			line-height: 2rem;
		}
	}

	.react-datepicker__portal .react-datepicker__current-month,
	.react-datepicker__portal .react-datepicker-time__header {
		font-size: 1.44rem;
	}

	.react-datepicker__children-container {
		width: 13.8rem;
		margin: 0.4rem;
		padding-right: 0.2rem;
		padding-left: 0.2rem;
		height: auto;
	}

	.react-datepicker__aria-live {
		position: absolute;
		clip-path: circle(0);
		border: 0;
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		width: 1px;
		white-space: nowrap;
	}

	.react-datepicker__calendar-icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.125em;
	}
	.react-datepicker__header {
		text-align: center;
		background-color: ${Colors.WHITE}
		border-bottom: 1px solid ${Colors.ORANGE_ACTIVE} !important;
		border-bottom: 1px solid ${Colors.ORANGE_ACTIVE};
		border-top-left-radius: 0.3rem;
		padding: 8px 0;
		position: relative;
	}
`;
