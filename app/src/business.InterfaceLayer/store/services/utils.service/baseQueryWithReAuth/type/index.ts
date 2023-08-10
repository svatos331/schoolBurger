import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from "@reduxjs/toolkit/dist/query/react";

type BaseQueryWithReAuthType = BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
>;

export default BaseQueryWithReAuthType;
