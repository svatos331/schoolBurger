import styled from "styled-components";
import BreakPoints from "../../../../constants/breakPoints";

import { TextProps } from "../type";
import { useMemo } from "react";

export const Span = styled.span<TextProps>`
	color: ${({ color = "#FF5C00" }) => color};
	font-weight: ${({ weight }) => weight}; //question
	font-size: ${({ size }) => size};
	font-family: ${({ family }) => family};
`;

export const H1 = styled.h1<TextProps>(
	({ size, family, lineHeight, color, weight, largeMQ, mediumMQ, smallMQ }) => {
		return `
    font-size:  ${size ? size : "30px"};
    font-weight:  ${weight};
    color: ${color ? color : "#000000"};
    font-family: ${family};
    line-height: ${lineHeight};
    
  @media (max-width: ${BreakPoints.TABLET + "px"}) {
    font-size:  ${size ? size : largeMQ};
  }
  @media (max-width: ${BreakPoints.MOBILE + "px"}) {
      font-size:  ${size ? size : mediumMQ};
   }
   @media (max-width: ${BreakPoints.SMALL_MOBILE + "px"}) {
    font-size:   ${size ? size : smallMQ};
  }
  `;
	}
);

export const H2 = styled.h2<TextProps>(
	({ size, family, lineHeight, color, weight, largeMQ, mediumMQ, smallMQ }) => {
		return `
    font-size:  ${size ? size : "30px"};
    font-weight:  ${weight};
    color: ${color ? color : "#000000"};
    font-family: ${family};
    line-height: ${lineHeight};
    
  @media (max-width: ${BreakPoints.TABLET + "px"}) {
    font-size:  ${size ? size : largeMQ};
  }
  @media (max-width: ${BreakPoints.MOBILE + "px"}) {
      font-size:  ${size ? size : mediumMQ};
    
      color:red;
   }
   @media (max-width: ${BreakPoints.SMALL_MOBILE + "px"}) {
    font-size:   ${size ? size : smallMQ};
    color:green;
  }
  `;
	}
);


export const H3 = styled.h3<TextProps>`
	font-size: ${({ size = 30 }) => size + "px"};
	font-weight: ${({ weight = 600 }) => weight}; //question
	color: ${({ color = "#FFCCFF" }) => color};
	font-family: ${({ family }) => family};
	line-height: ${({ lineHeight }) => lineHeight + "px"};
`;
// p 400;600;800
// export const P = styled.p<TextProps>`
// 	font-size: ${({ size = 16 }) => size + "px"};
// 	font-weight: ${({ weight = 400 }) => weight};
// 	font-family: ${({ family }) => family};
// 	color: ${({ color = "#FFFFFF" }) => color};
// `;
export const P = styled.p<TextProps>(
	({ size, family, lineHeight, color, weight, largeMQ, mediumMQ, smallMQ }) => {
		return `
    font-size:  ${size ? size : "30px"};
    font-weight:  ${weight};
    color: ${color ? color : "#000000"};
    font-family: ${family};
    line-height: ${lineHeight};
    
  @media (max-width: ${BreakPoints.TABLET + "px"}) {
    font-size:  ${size ? size : largeMQ};
  }
  @media (max-width: ${BreakPoints.MOBILE + "px"}) {
      font-size:  ${size ? size : mediumMQ};
    
      color:red;
   }
   @media (max-width: ${BreakPoints.SMALL_MOBILE + "px"}) {
    font-size:   ${size ? size : smallMQ};
    color:green;
  }
  `;
	}
);