import styled from "styled-components"
import BreakPoints from "../../../../constants/breakPoints";

import { TextProps } from "../type";

  
export const Span = styled.span<TextProps>`
color: ${({ color = "#FF5C00" }) => color};
font-weight:  ${({ weight }) => weight};  //question
font-size:  ${({ size }) => size};
font-family: ${({ family }) => family};
`;

  export const H1 = styled.h1<TextProps>`
    font-size:  ${({ size = 50 }) => size+"px"};
    font-weight:  ${({ weight = 800 }) => weight};
    color: ${({ color = "#FFFFFF" }) => color};
    font-family: ${({ family }) => family};
    
    
  @media (max-width: ${BreakPoints.MOBILE+"px"}) {
      font-size:  ${({ size = 36 }) => size+"px"};
      color:red;
   }
  @media (max-width: ${BreakPoints.SMALL_MOBILE+"px"}) {
    font-size:  ${({ size = 30 }) => size+"px"};
    color:green;
  }
  `;

  export const H2 = styled.h2<TextProps>`
    font-size:  ${({ size = 40 }) => size+"px"};
    font-weight:  ${({ weight = 600 }) => weight};
    color: ${({ color = "#000000" }) => color};
    font-family: ${({ family }) => family};
   
  `;

  export const H3 = styled.h3<TextProps>`
  font-size:  ${({ size = 30 }) => size+"px"};
  font-weight:  ${({ weight = 600 }) => weight}; //question
  color: ${({ color = "#FFCCFF" }) => color};
  font-family: ${({ family }) => family};
  line-height: ${({ lineHeight }) => lineHeight+"px"};

  `;
// p 400;600;800
  export const P = styled.p<TextProps>`
  font-size:  ${({ size = 16 }) => size+"px"};
  font-weight:  ${({ weight = 400 }) => weight};
  font-family: ${({ family }) => family};
  color: ${({ color = "#FFFFFF" }) => color};
  
`;
