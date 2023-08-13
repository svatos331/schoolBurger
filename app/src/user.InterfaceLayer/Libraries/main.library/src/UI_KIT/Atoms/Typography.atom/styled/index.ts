import styled from "styled-components";

import BreakPoints from "../../../../constants/breakPoints";
import { TextProps } from "../type";

function style({
	font_size,
	family,
	line_height,
	color,
	weight,
	large_mq,
	medium_mq,
	small_mq,
	font_style,
}: TextProps): String {
	return `
    font-size:  ${font_size ? font_size : "16px"};
    font-weight:  ${weight};
    color: ${color ? color : "#000000"};
    font-family: ${family};
    line-height: ${line_height};
    font-style: ${font_style};
  @media (max-width: ${BreakPoints.TABLET + "px"}) {
    font-size:  ${font_size ? font_size : large_mq};
  }
  @media (max-width: ${BreakPoints.MOBILE + "px"}) {
      font-size:  ${font_size ? font_size : medium_mq};
   }
   @media (max-width: ${BreakPoints.SMALL_MOBILE + "px"}) {
    font-size:   ${font_size ? font_size : small_mq};
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
