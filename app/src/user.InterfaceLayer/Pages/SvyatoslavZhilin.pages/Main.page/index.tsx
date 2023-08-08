import React, { FC } from "react";
import Component1 from "user.InterfaceLayer/Components/SvyatoslavZhilin.components.bll/Components1.component.bll";
import { categoryData } from "user.InterfaceLayer/Components/SvyatoslavZhilin.components.bll/Components1.component.bll/const/categoryData";
import { socialData } from "user.InterfaceLayer/Components/SvyatoslavZhilin.components.bll/Components1.component.bll/const/socialData";
// import { Component1 } from "test-lib";

const MainPage: FC = () => {
	// eslint-disable-next-line no-console
	// console.log(Component1);

	return (
		<div>
			<div>SvyatoslavZhilinMainPage</div>
			<Component1
				category={categoryData}
				social={socialData}
			/>
		</div>
	);
};

export default MainPage;

