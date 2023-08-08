import React from "react";
import OrderBtn from "user.InterfaceLayer/Libraries/SvyatoslavZhilin.library/UI_KIT/Atoms/btn_order/index";
import CategoryBtn from "user.InterfaceLayer/Libraries/SvyatoslavZhilin.library/UI_KIT/Atoms/btn_category/index";
import SocialBtn from "user.InterfaceLayer/Libraries/SvyatoslavZhilin.library/UI_KIT/Atoms/btn_social/index";
import Button from "user.InterfaceLayer/Libraries/SvyatoslavZhilin.library/UI_KIT/Atoms/Button";

import { useGetTodoQuery } from "../../../../business.InterfaceLayer/store/shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import ButtonEnum from "../../../Libraries/SvyatoslavZhilin.library/UI_KIT/Atoms/Button/enum";

interface Component1Props {
	category: any;
	social: any;
}

const Component1: React.FC<Component1Props> = ({ category, social }) => {
	const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

	// eslint-disable-next-line no-console
	console.log(123, data);

	return (
		<div>
			<div>
				<OrderBtn value="Оформить заказ" />
				<br />
				<Button type={ButtonEnum.enum_1}>123</Button>
				<br />
				<CategoryBtn category={category} />
				<br />
				<SocialBtn social={social} />
			</div>
		</div>
	);
};

export default Component1;
