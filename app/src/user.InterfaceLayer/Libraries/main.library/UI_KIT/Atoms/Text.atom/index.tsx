// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC, memo } from "react";
import { styled } from "styled-components";
import { calcFluidFontSize } from "./utils";
import { CleanTagProps } from "./type";
import {Tags} from "./enum";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CleanTag: FC<CleanTagProps> = ({ as: Tag = Tags.p }) => {
	return <Tag /> 
};
/**
 * Компонент Typography для отображения текста с заданными стилями.
 * @param {Object} props - Пропсы компонента Typography.
 * @param {Tags} [props.as=Tags.p] - Тег элемента, который будет использован для отображения текста.
 * @param {string} [props.family] - Семейство шрифта.
 * @param {number} [props.size] - Размер шрифта.
 * @param {string} [props.color] - Цвет текста.
 * @param {number} [props.weight] - Толщина шрифта (жирность).
 * @return {JSX.Element} - Возвращает элемент с заданным текстом и стилями.
 */
const Typography = styled(CleanTag)<CleanTagProps>((props) => {
	let fontSize = props.size;
	const arrayAdaptiveValues = props.adaptivevalues?.split(",").map((e) => +e);
	if (arrayAdaptiveValues?.length === 4) {
		fontSize = calcFluidFontSize(arrayAdaptiveValues);
	}
	return `
      font-size: ${fontSize};
      font-weight: ${props.weight};
      font-family: ${props.family};
      color: ${props.color};
    `;
	// Другие стили, которые вам нужны для вашего Typography
});

export default memo(Typography);
