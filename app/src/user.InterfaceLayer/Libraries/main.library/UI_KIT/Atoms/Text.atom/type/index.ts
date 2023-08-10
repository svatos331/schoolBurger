import { ReactNode } from "react";
import Colors from "user.InterfaceLayer/Libraries/main.library/constants/colors";
import { EAdaptiveFluidFontValues } from "user.InterfaceLayer/Libraries/main.library/constants/fontEnums";

export type ITypographyProps = {
	family?: string;
	weight?: number | string;
	color?: Colors;
	size?: string;
	children:   JSX.Element| ReactNode | string;
	className?: string;
};

export type CleanTagProps = {
	as?: keyof JSX.IntrinsicElements;
	adaptivevalues?: EAdaptiveFluidFontValues;
} & ITypographyProps;
