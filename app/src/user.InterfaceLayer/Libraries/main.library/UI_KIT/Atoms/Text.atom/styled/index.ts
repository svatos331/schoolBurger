import styled from "styled-components"

// interface DividerProps {
//     height?: number
//     heightMob?: number
//   }
//   export const Divider = styled.div<DividerProps>`
//     height: ${({ height = 8 }) => height}px;
  
//     // Медиа запрос
//     @media ${({ theme }) => theme.media.large} {
//       height: ${({ heightMob = 4 }) => heightMob}px;
//     }
//   `
  
//   // Пример заголовков разного уровня
//   interface TitleProps {
//     weight?: 200 | 300 | 400 | 500 | 600 | 700
//   }
  
//   export const Title1 = styled.h1<TitleProps>`
//     font-size: 24px;
//     font-weight: ${({ weight = 700 }) => weight};
//   `
  
//   export const Title2 = styled.h2<TitleProps>`
//     font-size: 18px;
//     font-weight: ${({ weight = 700 }) => weight};
//     `;

interface h1Props {
    size?: number | 50,
    color?: string | "#FFFFFF"
    colorSpan?: string | "FF5C00"
  }
  
  export const H1 = styled.h1<h1Props>`
    font-size:  ${({ size = 50 }) => size};

    & span{
        color: ${({colorSpan="FF5C00"})=>colorSpan}
    }
  `

  
  