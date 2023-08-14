const getOrDefault = <T>(val: T | null | undefined, def: T): T => {
	return val ? val : def;
};
export default getOrDefault;
