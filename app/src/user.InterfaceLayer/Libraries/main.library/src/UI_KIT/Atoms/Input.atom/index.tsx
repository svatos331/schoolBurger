import React, { useCallback } from "react";
import { IInputProps, inputTypeEnum } from "./type/index";
import { InputMask, checkType, setDateRange } from "./utils/index";
import * as ST from "./styled/index";
import { InputPropsDefaultDate, dataTestId } from "./const";

const Input: React.FC<IInputProps> = (props: IInputProps) => {
	const {
		className,
		value,
		onChange,
		type,
		placeholder,
		max,
		isError,
		isLoading,
		autoFocus,
		...otherProps
	} = props;

	const onChangeHandler = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			onChange?.(InputMask(type, e.target.value));
		},
		[onChange, type]
	);

	if (isError) {
		return <ST.Error>Произошла ошибка</ST.Error>;
	}

	return (
		<>
			{isLoading ? (
				<ST.Skeleton />
			) : (
				<ST.InputStyle
					data-testid={dataTestId}
					autoFocus={autoFocus}
					value={value}
					type={checkType(type) ? inputTypeEnum.TEXT : type}
					onChange={onChangeHandler}
					placeholder={placeholder}
					{...(type === inputTypeEnum.DATE &&
						setDateRange(max || InputPropsDefaultDate))}
					{...otherProps}
				/>
			)}
		</>
	);
};

export default Input;
