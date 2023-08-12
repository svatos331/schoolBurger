import React, { FunctionComponent } from "react";

// import {Icons , Icon } from "../../UI_KIT/Atoms/Atom1.atom/icons";
import Widget1Type from "./type";
import Typography from "../../UI_KIT/Atoms/Typography.atom";
import { Tags } from "../../UI_KIT/Atoms/Typography.atom/enum";

const Widget1: FunctionComponent<Widget1Type> = ({ useGetTodoQuery }) => {
	const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

	return <div>data from jsonplaceholder : {JSON.stringify(data)}
		{/* <Icon width={20} height={20} color="#FAFAFA" icon={Icons.House}  /> */}

		<Typography type={Tags.h1} lineHeight={"50%"}>ddd <br /> ddd</Typography>
		<Typography type={Tags.h1} lineHeight={"normal"}>ddd <br /> ddd</Typography>
		<Typography type={Tags.h1} lineHeight={"100%"}>ddd <br /> ddd</Typography>
		
	</div>;
};

export default Widget1;
