import { createApi } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../../reducerPaths";
import httpMethods from "../../../../../http/httpMethods";
import { todoFromDtoServiceArray } from "../../services/dto/from.dto";
import validateStatus from "../../../../../../services/utils.service/validateStatus";
import baseQueryWithReAuth from "../../../../../../services/utils.service/baseQueryWithReAuth";
import url from "business.InterfaceLayer/store/shared/entities/svyatoslavZhilin.entities/todo.entity/services/url";

export interface Props {
	authToken: string;
	params: { id: string };
}

export const todoApi = createApi({
	reducerPath: `${reducerPaths.todo}/api`,
	baseQuery: baseQueryWithReAuth,
	tagTypes: [`${reducerPaths.todo}TAG`],

	endpoints: (build) => ({
		getTodo: build.query<any, Props>({
			query: ({ authToken, params }) => ({
				url: url.todo,
				method: httpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: params,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.todo}TAG`],
			transformResponse: todoFromDtoServiceArray,
		}),
	}),
});

export const { useGetTodoQuery, useLazyGetTodoQuery } = todoApi;
