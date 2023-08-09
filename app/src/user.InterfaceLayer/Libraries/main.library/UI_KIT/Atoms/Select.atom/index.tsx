import { FC, ReactNode, useMemo } from "react";
import * as ST from "./styled";

interface ISelectObjectProps {
	name: string;
	valueArray: Array<string>;
}

const Select: FC<ISelectObjectProps> = ({ name, valueArray }) => {
	const ErrorTest = useMemo(
		() => valueArray.length && process.env.NODE_ENV === "production",
		[]
	);

	const options = useMemo(() => {
		return valueArray?.map((e, index) => {
			return (
				<option
					key={index}
					value={e}
				>
					{e}
				</option>
			);
		});
	}, [valueArray]);

	if (ErrorTest) {
		console.error("НЕТ МАССИВА");
        return null
	}


	return (
		<>
			{ErrorTest ? (
				<ST.SelectStyled name={name}>{options}</ST.SelectStyled>
			) : (
				<ST.SelectStyledError>
					Error: no value in Select props
				</ST.SelectStyledError>
			)}
		</>
	);
};

export default Select;
