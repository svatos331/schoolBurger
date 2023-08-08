import React, { Suspense } from "react";
import { RouteObject } from "react-router-dom";

import Index from "../../routePath";
import Error from "../../../Components/generalComponents/Error";
import svyatoslavZhilinRoutesPaths from "./svyatoslavZhilin.routesPaths";
import Loader from "../../../Components/generalComponents/Loader";
import MainLayout from "../../../Layouts/Main.layout";
import { LastPage } from "user.InterfaceLayer/Pages/Last.page";
import { MainPage } from "user.InterfaceLayer/Pages/Main.page";

const svyatoslavZhilinRoutes: RouteObject[] = [
	{
		path: Index.SVYATOSLAV_ZHILIN,
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<MainPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: svyatoslavZhilinRoutesPaths.LAST,
				element: (
					<Suspense fallback={<Loader />}>
						<LastPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: Index.NOT_FOUND,
				element: <div>страницы нет</div>,
			},
		],
	},
];

export default svyatoslavZhilinRoutes;
