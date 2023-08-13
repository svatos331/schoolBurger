import React, { FC, memo } from "react";
import * as ST from "./styled";

import { Tags } from "./enum";
import { IText } from "./type";
import { fonts } from "../../../constants/fonts";

export const Typography: FC<IText> = ({
	as,
	size,
	color,
	weight,
	family,
	line_height,
	children,
	small_mq,
	medium_mq,
	large_mq,
	font_style,
}) => {
	switch (as) {
		case Tags.h1:
			return (
				<>
					<ST.H1
						color={color ? color : "#ffffff"}
						size={size}
						weight={weight ? weight : 800}
						family={family ? family : fonts.Nunito}
						line_height={line_height ? line_height : "120%"}
						small_mq={small_mq ? small_mq : "30px"}
						medium_mq={medium_mq ? medium_mq : "36px"}
						large_mq={large_mq ? large_mq : "50px"}
						font_style={font_style?font_style:"italic"}
					>
						{children}
					</ST.H1>
				</>
			);
		case Tags.p:
			return (
				<ST.P
					color={color ? color : "#ffffff"}
					size={size}
					weight={weight ? weight : 400}
					family={family ? family : fonts.Nunito}
					line_height={line_height ? line_height : "130%"}
					
					medium_mq={medium_mq ? medium_mq : "12px"}
					large_mq={large_mq ? large_mq : "16px"}
					font_style={font_style?font_style:"italic"}
				>
					{children}
				</ST.P>
			);
		case Tags.span:
			return (
				<ST.Span
					weight={weight ? weight : 800}
					family={family ? family : fonts.Nunito}
					line_height={line_height ? line_height : "120%"}
					small_mq="30px"
					medium_mq="36px"
					large_mq="50px"
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

		default:
			return (
				<>
					<p>ErrorAtomTypography</p>;
				</>
			);
	}
};

export default memo(Typography);
