import React, { FC } from "react";
import Component1 from "user.InterfaceLayer/Components/SvyatoslavZhilin.components.bll/Components1.component.bll";
import { iconsData } from "user.InterfaceLayer/Components/SvyatoslavZhilin.components.bll/Components1.component.bll/const";
// import { Component1 } from "test-lib";

const MainPage: FC = () => {
	// eslint-disable-next-line no-console
	// console.log(Component1);

	return (
		<div>
			<div>SvyatoslavZhilinMainPage</div>
			<Component1 icons={iconsData} />
		</div>
	);
};

export default MainPage;

