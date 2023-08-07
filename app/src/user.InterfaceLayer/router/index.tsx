import React from "react";
import { RouteObject } from "react-router-dom";

import svyatoslavZhilinRoutes from "./routes/svyatoslavZhilin.route";
import RoutesPaths from "./routePath";
import CheckAuth from "./services/Components/CheckAuth";
import Error from "../Components/generalComponents/Error";

const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
		element: <CheckAuth />,
		errorElement: <Error />,
		children: [...svyatoslavZhilinRoutes],
	},
];

export default mainRouter;
