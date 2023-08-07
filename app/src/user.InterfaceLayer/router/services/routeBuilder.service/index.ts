import Index from "../../routePath";

export const routeBuilder = (routes: Index | Index[]): string => {
	const isArray = Array.isArray(routes);
	const url = isArray ? routes.join("/") : routes;

	return `/${url}`;
};

export const routeBuilderWithReplace = (
	routes: Index | Index[],
	key: string,
	value: string | number
): string => {
	const url = routeBuilder(routes);

	return url.replace(`:${key}`, value.toString());
};
