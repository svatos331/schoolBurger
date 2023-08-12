import { FC } from "react";
import styled from "styled-components";

import BreakPoints from "../../../../constants/breakPoints";
import { TextProps } from "../type";
import { Tags } from "../enum";
 




function style (props:TextProps): String {
		return `
    font-size:  ${props.size ? props.size : "30px"};
    font-weight:  ${props.weight};
    color: ${props.color ? props.color : "#000000"};
    font-family: ${props.family};
    line-height: ${props.lineHeight};
    
  @media (max-width: ${BreakPoints.TABLET + "px"}) {
    font-size:  ${props.size ? props.size : props.largeMQ};
  }
  @media (max-width: ${BreakPoints.MOBILE + "px"}) {
      font-size:  ${props.size ? props.size : props.mediumMQ};
   }
   @media (max-width: ${BreakPoints.SMALL_MOBILE + "px"}) {
    font-size:   ${props.size ? props.size : props.smallMQ};
  }
  `;
	}




export const P = styled.h1<TextProps>(({ size, family, lineHeight, color, weight, largeMQ, mediumMQ, smallMQ })=>{
  return `${style({ size, family, lineHeight, color, weight, largeMQ, mediumMQ, smallMQ })}`;

})
//${style()}
;

//export const H2 = styled(H1);

//export const H3 = styled(H1);

//export const Span = styled(H1);


// export const H1 = styled.h1<StyleComponentTextProps>(
// 	({ size, family, lineHeight, color, weight, largeMQ, mediumMQ, smallMQ }) => {
// 		return `
//     font-size:  ${size ? size : "30px"};
//     font-weight:  ${weight};
//     color: ${color ? color : "#000000"};
//     font-family: ${family};
//     line-height: ${lineHeight};
    
//   @media (max-width: ${BreakPoints.TABLET + "px"}) {
//     font-size:  ${size ? size : largeMQ};
//   }
//   @media (max-width: ${BreakPoints.MOBILE + "px"}) {
//       font-size:  ${size ? size : mediumMQ};
//    }
//    @media (max-width: ${BreakPoints.SMALL_MOBILE + "px"}) {
//     font-size:   ${size ? size : smallMQ};
//   }
//   `;
// 	}
// );


// const style: FC <TextProps> = ({ size, family, lineHeight, color, weight, largeMQ, mediumMQ, smallMQ }) => {
//   return `
//   font-size:  ${size ? size : "30px"};
//   font-weight:  ${weight};
//   color: ${color ? color : "#000000"};
//   font-family: ${family};
//   line-height: ${lineHeight};
  
// @media (max-width: ${BreakPoints.TABLET + "px"}) {
//   font-size:  ${size ? size : largeMQ};
// }
// @media (max-width: ${BreakPoints.MOBILE + "px"}) {
//     font-size:  ${size ? size : mediumMQ};
//  }
//  @media (max-width: ${BreakPoints.SMALL_MOBILE + "px"}) {
//   font-size:   ${size ? size : smallMQ};
// }
// `;
// }