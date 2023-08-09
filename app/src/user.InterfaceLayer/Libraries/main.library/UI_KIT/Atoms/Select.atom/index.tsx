import { FC, useMemo } from "react";
import * as ST from "./styled";
import { ISelectObjectProps } from "./type";

const Select: FC<ISelectObjectProps> = ({ name, valueArray, setValue }) => {
	const ErrorTest = useMemo(
		() => valueArray.length !== 0 && process.env.NODE_ENV === "development",
		[]
	);
	const options = useMemo(() => {
		return valueArray?.map((e, index) => {
			return (
				<ST.OptionStyled
					key={index}
					value={e}
				>
					{e}
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
				<ST.SelectStyled
					onChange={(e) => {
						setValue(e.target.value);
						e.target.blur();
					}}
					name={name}
				>
					{options}
				</ST.SelectStyled>
			)}
		</>
	);
};

export default Select;
