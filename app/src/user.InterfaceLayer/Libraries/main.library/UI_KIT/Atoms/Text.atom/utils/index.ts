import styled, { css } from "styled-components";
export const calcFluidFontSize = (params: number[]) => {
	const fMin: number = params[0];
	const fMax: number = params[1];
	const vMin: number = params[2];
	const vMax: number = params[3];
	const k = (fMax - fMin) / (vMax - vMin);
	const b = fMin - k * vMin;
	const bInPixels = `${b}px`;

	return `calc(

  ${k} * 100vw + ${bInPixels} 
  )`;
};
