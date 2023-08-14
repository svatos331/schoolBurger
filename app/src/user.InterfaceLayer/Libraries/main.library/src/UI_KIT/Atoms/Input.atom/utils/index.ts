import { inputTypeEnum, likeTxtTypeEnum } from "../type";

export const checkType = (type: string) => {
	return type in likeTxtTypeEnum;
};

export const setDateRange = (range: number) => {
	const date: Date = new Date(new Date().setDate(new Date().getDate() + range));
	return { min: formatDate(new Date()), max: formatDate(date) };
};

export const InputMask = (type: inputTypeEnum, val: string) => {
	switch (type) {
		case inputTypeEnum.NUMBER:
			return validateValue(val, /^[0-9]*$/);
		case inputTypeEnum.CVV:
			if (val.length === 4) return val.slice(0, -1);
			return validateValue(val, /^[0-9]*$/);
		case inputTypeEnum.TEXT_ONLY:
			return validateValue(val, /^[a-zA-Zа-яА-Я\s]+$/);
		case inputTypeEnum.CARD: {
			return validateValue(val, /^(\d{0,4} ){0,3}\d{0,4}$/);
		}
		case inputTypeEnum.CARD_DATE: {
			return validateValue(val, /^(\d{0,2}\/){0,1}\d{0,2}$/);
		}
		case inputTypeEnum.TEL: {
			if (val.length === 12) return val.slice(0, -1);
			return validateValue(val, /^[7-8][0-9]*$/);
		}
		default:
			return val;
	}
};

export const validateValue = (value: string, rule: RegExp) => {
	return rule.test(value) ? value : value.slice(0, -1);
};

export const formatDate = (date: Date) => {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");

	return `${year}-${month}-${day}T${hours}:${minutes}`;
};
