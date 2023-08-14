import React, { FC } from "react";
import Button from "user.InterfaceLayer/Libraries/main.library/src/UI_KIT/Atoms/Button";
import ButtonEnum from "user.InterfaceLayer/Libraries/main.library/src/UI_KIT/Atoms/Button/enum";

const LastPage: FC = () => (
	<div>
		SvyatoslavZhilinLastPage
		<Button type={ButtonEnum.enum_orderButton}>Оформить заказ</Button>
		<Button type={ButtonEnum.enum_cartButton}>Вторая кнопка</Button>
		<Button type={ButtonEnum.enum_categoryButton}>Категория</Button>
		<Button type={ButtonEnum.enum_socialBtn}>Социальные сети</Button>
	</div>
);

export default LastPage;
