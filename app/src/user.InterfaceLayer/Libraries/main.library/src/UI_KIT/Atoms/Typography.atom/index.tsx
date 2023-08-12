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
		case Tags.h1:
			return (
				<ST.H1
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
				</ST.H1>
			);
		case Tags.span:
			return (
				<ST.Span
					color={color}
					size={size}
					weight={weight}
					family={"'Nunito', sans-serif"} 

				>
					{children}
				</ST.Span>
			);
		case Tags.h2:
			return (
				<>
					<ST.H2
						color={color}
						size={size}
						weight={weight}
						family={"'Nunito', sans-serif"} 
					>
						{children}
					</ST.H2>
				</>
			);
		case Tags.h3:
			return (
				<>
					<ST.H3
						color={color}
						size={size}
						weight={weight}
						family={"'Nunito', sans-serif"} 
					>
						{children}
					</ST.H3>
				</>
			);
		case Tags.p:
			return (
				<>
					<ST.P
						color={color}
						size={size}
						weight={weight}
						family={"'Nunito', sans-serif"} 
					>
						{children}
					</ST.P>
				</>
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
