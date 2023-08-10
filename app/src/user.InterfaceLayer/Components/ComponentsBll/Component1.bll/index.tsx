import React from "react";

import {
	useGetTodoQuery,
	useLazyGetTodoQuery,
} from "../../../../business.InterfaceLayer/store/shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import Widget1 from "../../../Libraries/main.library/src/Widgets/widget1.widget";
import Button from "user.InterfaceLayer/Libraries/main.library/src/UI_KIT/Atoms/Button";
import ButtonEnum from "user.InterfaceLayer/Libraries/main.library/src/UI_KIT/Atoms/Button/enum";

const Component1 = () => {
	return (
		<>
			<Widget1
				useGetTodoQuery={useGetTodoQuery}
				useLazyGetTodoQuery={useLazyGetTodoQuery}
			/>

			<Button type={ButtonEnum.enum_1}>Оформить заказ</Button>
			<Button type={ButtonEnum.enum_2}>Вторая кнопка</Button>
			<Button type={ButtonEnum.enum_3}>Категория</Button>
		</>
	);
};

export default Component1;
