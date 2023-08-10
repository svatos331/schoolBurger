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
				weight={"800"}
				as={"p"}
				color={Colors.BLACK}
				adaptivevalues={EAdaptiveFluidFontValues.TEXT_H1_36_50_320_1440}
			>
				Только самые  <br />  
				<Typography  as={"p"}
				 color={Colors.WHITE}
				 weight={"800"}
					adaptivevalues={EAdaptiveFluidFontValues.TEXT_H1_36_50_320_1440}
				> сочные бургеры!</Typography>
			</Typography>

			<Typography
				family={EFontFamily.NUN}
				as={"h2"}
				weight={"600"}
				color={Colors.BLACK}
				adaptivevalues={EAdaptiveFluidFontValues.TEXT_P_12_16_320_1440}
			>
				
				бесплатная доставка от 599Руб
			</Typography>

			<Typography
				family={EFontFamily.NUN}
				
				as={"p"}
				color={Colors.BLACK}
				weight={"400"}
				adaptivevalues={EAdaptiveFluidFontValues.TEXT_P_12_16_320_1440}
			>
				
				Бургер. Закуски. Хот-доги...
			</Typography>
			<Typography
				family={EFontFamily.NUN}
				as={"p"}
				weight={"400"}
				adaptivevalues={EAdaptiveFluidFontValues.TEXT_P_16_24_320_1440}
			>
				Итоги
			</Typography>
			<Typography
				family={EFontFamily.NUN}
				as={"p"}
				weight={"400"}
				adaptivevalues={EAdaptiveFluidFontValues.TEXT_P_10_12_320_1440}
			>
				бесплатная оставка
			</Typography>

			<Typography
				family={EFontFamily.NUN}
				as={"p"}
				weight={"400"}
				adaptivevalues={EAdaptiveFluidFontValues.TEXT_P_18_24_320_1440}
			>
				Номер заказа \ Мы в соц сетях
			</Typography>

			<Typography
				weight={"400"}
				family={EFontFamily.NUN}
				as={"p"}
				adaptivevalues={EAdaptiveFluidFontValues.TEXT_P_18_24_320_1440}
			>
				Телефон 80910707-72
			</Typography>


		</div>
	);
};

export default Widget1;
