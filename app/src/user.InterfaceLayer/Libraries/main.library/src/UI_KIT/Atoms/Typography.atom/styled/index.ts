import styled from "styled-components";

import BreakPoints from "../../../../constants/breakPoints";
import { TextProps } from "../type";

function style({
	font_size,
	family,
	line_height,
	color,
	weight,
	large_extra_mq,
	large_mq,
	medium_mq,
	small_mq,
	font_style,
}: TextProps): String {
	return `
    font-size:  ${font_size ? font_size : "inherit"};
    font-weight:  ${weight ? weight : "inherit"};
    color: ${color ? color : "inherit"};
    font-family: ${family ? family : "inherit"};
    line-height: ${line_height ? line_height : "inherit"};
    font-style: ${font_style ? font_style : "inherit"};
 ${
		large_extra_mq&&!font_size
			? ` @media  (max-width:${BreakPoints.EXTRA_TABLET + "px"} ) or
    (width > ${BreakPoints.EXTRA_TABLET + "px"} )  {
    font-size:  ${large_extra_mq};
  };`
			: ""
 }
 ${
		large_mq&&!font_size
			? `@media (max-width: ${BreakPoints.TABLET + "px"}) {
    font-size:  ${large_mq};
  };`
			: ""
 }
 ${
		medium_mq&&!font_size
			? ` @media (max-width: ${BreakPoints.MOBILE + "px"}) {
    font-size:  ${medium_mq};
  };`
			: ""
 }
${
	small_mq&&!font_size
		? ` @media (max-width: ${BreakPoints.SMALL_MOBILE + "px"}) {
    font-size:   ${small_mq};
  };`
		: ""
}
  `;
}
export const P = styled.p<TextProps>((props) => {
	return `${style(props)}`;
});

export const H1 = styled.h1<TextProps>((props) => {
	return `${style(props)}`;
});
export const H2 = styled.h2<TextProps>((props) => {
	return `${style(props)}`;
});
export const H3 = styled.h3<TextProps>((props) => {
	return `${style(props)}`;
});
export const Span = styled.span<TextProps>((props) => {
	return `${style(props)}`;
});
