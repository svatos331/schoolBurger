import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import url from "../../../shared/entities/svyatoslavZhilin.entities/todo.entity/services/url";
import logout from "../logout";
import BaseQueryWithReAuthType from "./type";

const baseQuery = fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL });

const baseQueryWithReAuth: BaseQueryWithReAuthType = async (
	args,
	api,
	extraOptions
) => {
	let result = await baseQuery(args, api, extraOptions);
	//TODO заменить на 401
	if (result?.meta?.response?.status === 404) {
		const refreshResult = await baseQuery(args, api, extraOptions);
		if (refreshResult.data) {
			// Диспатчим что новыый токен
			//api.dispatch(tokenReceived(refreshResult.data))
			console.log(api.dispatch);
			result = await baseQuery(args, api, extraOptions);
			if (result?.meta?.response?.status === 404) {
				logout();
			}
		} else {
			logout();
		}
	}
	return result;
};

export default baseQueryWithReAuth;
