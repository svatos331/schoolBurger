import { lazy } from "react";

export const LastPageAsync = lazy(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
	() => import("./LastPage")
);