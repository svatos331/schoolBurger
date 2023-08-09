import React, { FunctionComponent } from "react";
// import {Icons , Icon } from "../../UI_KIT/Atoms/Atom1.atom/icons";
import Colors from "user.InterfaceLayer/constants/colors";
import Widget1Type from "./type";
import Typography from "../../UI_KIT/Atoms/Text.atom";
import EFontFamily, {
	EAdaptiveFluidFontValues,
} from "../../constants/fontEnums";

const Widget1: FunctionComponent<Widget1Type> = ({ useGetTodoQuery }) => {
	const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

	return (
		<div>
			data from jsonplaceholder : {JSON.stringify(data)}
			<Typography
				family={EFontFamily.NUN}
				weight={"bold"}
				as={"button"}
				color={Colors.BLACK}
				adaptivevalues={EAdaptiveFluidFontValues.TEXT_20_22_900_1200}
			>
				
				ffffd
			</Typography>
		</div>
	);
};

export default Widget1;
