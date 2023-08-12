import React, { FC } from "react";
import * as ST from "./styled";

import { Tags} from "./enum";
import { IText } from "./type";
import { fonts } from "../../../constants/fonts";

export const Typography: FC<IText> = ({
	type,
	size,
	color,
	weight,
	family,
	lineHeight,
	children,
}) => {
	switch (type) {
		case Tags.h1:
			return (
				<ST.H1
					color={color?color:"#FF5CFF"}
					//size={size?size:"100px"}
					//weight={weight?weight:800}
					family={family?family:fonts.Nunito} 
					lineHeight={lineHeight?lineHeight:"120%"}
					mediaquery={["30px","36px","50px"]}
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

export default Typography;
