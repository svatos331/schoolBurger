import { ReactNode } from "react";
import { Tags } from "../enum";
import Colors from "../../../../constants/colors";

export interface IText extends TextProps {
	as: Tags;
	children?: JSX.Element | ReactNode;
}

export interface TextProps extends MediaQuerySize {
	font_size?: string;
	color?: string| Colors;
	weight?: number;
	line_height?: string;
	family?: string;
	font_style?: string;
}
export interface MediaQuerySize {
	small_mq?: string;
	medium_mq?: string;
	large_mq?: string;
}
