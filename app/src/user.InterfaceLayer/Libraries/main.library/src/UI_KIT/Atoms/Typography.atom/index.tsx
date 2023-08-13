import React, { FC, memo } from "react";
import * as ST from "./styled";
import Colors from "../../../constants/colors";
import { Tags } from "./enum";
import { IText } from "./type";
import { fonts } from "../../../constants/fonts";
export const Typography: FC<IText> = ({
	as,
	font_size,
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
					<ST.H1
						color={color ? color : Colors.BLACK}
						font_size={font_size}
						weight={weight ? weight : 800}
						family={family ? family : fonts.Nunito}
						line_height={line_height ? line_height : "120%"}
						small_mq={small_mq ? small_mq : "30px"}
						medium_mq={medium_mq ? medium_mq : "36px"}
						large_mq={large_mq ? large_mq : "50px"}
						font_style={font_style ? font_style : "normal"}
					>
						{children}
					</ST.H1>
			);
		case Tags.h2:
			return (
					<ST.H2
						color={color ? color : Colors.BLACK}
						font_size={font_size}
						weight={weight ? weight : 600}
						family={family ? family : fonts.Nunito}
						line_height={line_height ? line_height : "120%"}
						medium_mq={medium_mq ? medium_mq : "28px"}
						large_mq={large_mq ? large_mq : "40px"}
						font_style={font_style ? font_style : "normal"}
					>
						{children}
					</ST.H2>
			);
		case Tags.h3:
			return (
				<ST.H3
					color={color ? color : Colors.BLACK}
					font_size={font_size}
					weight={weight ? weight : 600}
					family={family ? family : fonts.Nunito}
					line_height={line_height ? line_height : "100%"}
					medium_mq={medium_mq ? medium_mq : "16px"}
					large_mq={large_mq ? large_mq : "24px"}
					font_style={font_style ? font_style : "normal"}
				>
					{children}
				</ST.H3>
			);
		case Tags.p:
			return (
				<ST.P
					color={color ? color : Colors.BLACK}
					font_size={font_size}
					weight={weight ? weight : 400}
					family={family ? family : fonts.Nunito}
					line_height={line_height ? line_height : "normal"}
					medium_mq={medium_mq ? medium_mq : "12px"}
					large_mq={large_mq ? large_mq : "16px"}
					font_style={font_style ? font_style : "normal"}
				>
					{children}
				</ST.P>
			);

		case Tags.p1:
			return (
				<ST.P
					color={color ? color : Colors.BLACK}
					font_size={font_size ? font_size : "12px"}
					weight={weight ? weight : 400}
					family={family ? family : fonts.Nunito}
					line_height={line_height ? line_height : "normal"}
					font_style={font_style ? font_style : "normal"}
				>
					{children}
				</ST.P>
			);
		case Tags.p2:
			return (
				<ST.P
					color={color ? color : Colors.BLACK}
					font_size={font_size}
					weight={weight ? weight : 400}
					family={family ? family : fonts.Nunito}
					line_height={line_height ? line_height : "100%"}
					medium_mq={medium_mq ? medium_mq : "10px"}
					large_mq={large_mq ? large_mq : "12px"}
					font_style={font_style ? font_style : "normal"}
				>
					{children}
				</ST.P>
			);
		case Tags.p3:
			return (
				<ST.P
					color={color ? color : Colors.BLACK}
					font_size={font_size}
					weight={weight ? weight : 400}
					family={family ? family : fonts.Nunito}
					line_height={line_height ? line_height : "120%"}
					medium_mq={medium_mq ? medium_mq : "18px"}
					large_mq={large_mq ? large_mq : "24px"}
					font_style={font_style ? font_style : "normal"}
				>
					{children}
				</ST.P>
			);
		case Tags.span:
			return (
				<ST.Span
					color={color ? color : Colors.BLACK}
					font_size={font_size}
					weight={weight ? weight : 800}
					family={family ? family : fonts.Nunito}
					line_height={line_height ? line_height : "130%"}
					medium_mq={medium_mq ? medium_mq : "12px"}
					large_mq={large_mq ? large_mq : "16px"}
					font_style={font_style ? font_style : "normal"}
				>
					{children}
				</ST.Span>
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
