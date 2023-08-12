import React, { FC, memo} from "react";
import * as ST from "./styled";

import { Tags} from "./enum";
import { IText } from "./type";
import { fonts } from "../../../constants/fonts";

export const Typography: FC<IText> = ({
	as,
	size,
	color,
	weight,
	family,
	lineHeight,
	children,
	smallMQ,
	mediumMQ,
	largeMQ,
}) => {
	switch (as) {
		case Tags.p:
			return (
				<ST.P
					//color={color?color:"#ffffff"}
					//size={size?size:"50px"}
					weight={weight?weight:800}
					family={family?family:fonts.Nunito} 
					lineHeight={lineHeight?lineHeight:"120%"}
					smallMQ="30px"
					mediumMQ="36px"
					largeMQ="50px"
					
				>
					{children}
				</ST.P>
			);
		
		default:
			return (
				<>
					<p>ErrorAtomTypography</p>;
				</>
			);
	}
};

export default memo( Typography);
