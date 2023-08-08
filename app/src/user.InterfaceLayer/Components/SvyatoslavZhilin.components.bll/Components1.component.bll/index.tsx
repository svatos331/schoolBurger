import React from "react";
import OrderBtn from "user.InterfaceLayer/Libraries/SvyatoslavZhilin.library/UI_KIT/Atoms/btn_order/index";
import CartBtn from "user.InterfaceLayer/Libraries/SvyatoslavZhilin.library/UI_KIT/Atoms/btn_cart/index";
import CategoryBtn from "user.InterfaceLayer/Libraries/SvyatoslavZhilin.library/UI_KIT/Atoms/btn_category/index";

import { useGetTodoQuery } from "../../../../business.InterfaceLayer/store/shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";

interface Component1Props {
	icons: any;
}

const Component1: React.FC<Component1Props> = ({ icons }) => {
	const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

	// eslint-disable-next-line no-console
	console.log(123, data);

	return (
		<div>
			<div>
				<OrderBtn value="Оформить заказ" />
				<br />
				<CartBtn value="Добавить" />
				<br />
				<CategoryBtn icons={icons} />
			</div>
		</div>
	);
};

export default Component1;
