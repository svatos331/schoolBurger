import styled from "styled-components";

import BreakPoints from "../../../../constants/breakPoints";
import { TextProps } from "../type";

function style({
	size,
	family,
	lineHeight,
	color,
	weight,
	largeMQ,
	mediumMQ,
	smallMQ,
}: TextProps): String {
	return `
    font-size:  ${size ? size : "30px"};
    font-weight:  ${weight};
    color: ${color ? color : "#000000"};
    font-family: ${family};
    line-height: ${lineHeight};
    
  @media (max-width: ${BreakPoints.TABLET + "px"}) {
    font-size:  ${size ? size : largeMQ};
    color:red;
  }
  @media (max-width: ${BreakPoints.MOBILE + "px"}) {
      font-size:  ${size ? size : mediumMQ};
      color:green;
   }
   @media (max-width: ${BreakPoints.SMALL_MOBILE + "px"}) {
    font-size:   ${size ? size : smallMQ};
    color:blue;
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
