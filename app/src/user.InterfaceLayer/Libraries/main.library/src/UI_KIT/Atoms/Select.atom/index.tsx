import React, { useEffect, useRef, useState } from "react";
import { FC, useMemo } from "react";
import * as ST from "./styled";
import { ISelectObjectProps } from "./type";

const Select: FC<ISelectObjectProps> = ({ valueArray, setValue }) => {
	const [currentValue, setCurrentValue] = useState(valueArray[0].name);
	const [activeBoolean, setActiveBoolean] = useState(false);
	const [activeCurrentValue, setActiveCurrentValue] = useState(false);
	const [firstUpdate, setFirstUpdate] = useState(false)
	const animationTimer = 1000;

	useEffect(() => {
		if (firstUpdate) {
			if (!activeCurrentValue) {
				setActiveCurrentValue(true);
				setTimeout(() => {
					setActiveCurrentValue(false);
				}, animationTimer);
			}
		}
		setFirstUpdate(true);
	}, [currentValue]);

	const ErrorTest = useMemo(
		() => valueArray.length !== 0 && process.env.NODE_ENV === "development",
		[]
	);

	const options = useMemo(() => {
		return valueArray?.map((e, index) => {
			return (
				<ST.OptionStyled
					key={index}
					onClick={() => {
						setValue({id: e.id, name: e.name})
						setCurrentValue(e.name);
					}}
				>
					{e.name}
				</ST.OptionStyled>
			);
		});
	}, [valueArray]);

	return (
		<>
			{!ErrorTest ? (
				<>
					<ST.SelectStyledError>
						Error: no value in Select props
					</ST.SelectStyledError>
					{console.error("Error: no value in Select props S")}
				</>
			) : (
				<ST.SelectWrap>
					<ST.SelectStyled
						$animation={activeCurrentValue}
						$timer={animationTimer}
						onClick={() => {
							setActiveBoolean(activeBoolean === true ? false : true);
						}}
					>
						{currentValue}
					</ST.SelectStyled>
					<ST.OptionsWrap
						onMouseLeave={() => setActiveBoolean(false)}
						$active={activeBoolean}
						$optionsCount={valueArray.length}
					>
						{options}
					</ST.OptionsWrap>
				</ST.SelectWrap>
			)}
		</>
	);
};

export default Select;
