import React from "react";

import {
	useGetTodoQuery,
	useLazyGetTodoQuery,
} from "../../../../business.InterfaceLayer/store/shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import Widget1 from "../../../Libraries/main.library/src/Widgets/widget1.widget";

const Component1 = () => {
	return (
		<Widget1
			useGetTodoQuery={useGetTodoQuery}
			useLazyGetTodoQuery={useLazyGetTodoQuery}
		/>
	);
};

export default Component1;
