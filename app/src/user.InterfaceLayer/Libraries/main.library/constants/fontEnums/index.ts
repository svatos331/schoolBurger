import BreakPoints from "../breakPoints";

export enum EFontFamily {
	"NUN" = "'Nunito', sans-serif",
}

/**
@description Возможные типы пользователя. 

TEXT_H1_36_50_900_1200
Где: 
TEXT префикс; 
H1 тег; 
шрифт: 
36 минимльный размер; 
50 максимальный размер; 
900 минимальная ширина viewport; 
1200 максимальная ширина viewport; 
*/
export enum EAdaptiveFluidFontValues {
	/**
h1 - Заголовок.
@type {string}*/
	"TEXT_H1_36_50_320_1440" = `36,50,320,1440`,
	/**
h2 - Заголовок.
@type {string}*/
	"TEXT_H2_28_40_320_1440" = `28,40,320,1440`,
	/**
p - NavMenu и для описания товаров, Итогов , стоимости и кнопки оформления заказа, для телефона в footer.
@type {string}*/
	"TEXT_P_12_16_320_1440" = `12,16,320,1440`,
/**
p - для "Корзина".
@type {string}*/
	"TEXT_P_16_24_320_1440" = `16,24,320,1440`,
	/**
p - для "бесплатная доставка".
@type {string}*/
"TEXT_P_10_12_320_1440" = `10,12,320,1440`,
	/**
p - для "Номер заказаб, Мы в соцсетях".
@type {string}*/
"TEXT_P_18_24_320_1440" = `18,24,320,1440`,

}

export default EFontFamily;
