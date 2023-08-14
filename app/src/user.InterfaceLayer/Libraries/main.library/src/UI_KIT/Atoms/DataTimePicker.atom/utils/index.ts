/**
 * Примеры использования функции getOrDefault
 *
 * @example
 * type DataObject = { date?: Date };
 * // Возвращает новый экземпляр Date, так как date в объекте dO равно undefined
 * const dO = { date: undefined };
 * const date = getOrDefault<Date>(dO.date, new Date()); // new Date
 *
 * @example
 * type DataObject = { date?: Date };
 * // Возвращает существующий экземпляр Date, так как date в объекте dO содержит дату
 * const dO = { date: new Date(332) };
 * const date = getOrDefault<Date>(dO.date, new Date()); // new Date(332)
 *
 **/

const getOrDefault = <T>(val: T | null | undefined, def: T): T => {
	return val ? val : def;
};
export default getOrDefault;
