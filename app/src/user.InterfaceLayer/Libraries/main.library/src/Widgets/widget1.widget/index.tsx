import React, { FunctionComponent } from "react";

// import {Icons , Icon } from "../../UI_KIT/Atoms/Atom1.atom/icons";
import Widget1Type from "./type";
import Typography from "../../UI_KIT/Atoms/Typography.atom";
import { Tags } from "../../UI_KIT/Atoms/Typography.atom/enum";

const Widget1: FunctionComponent<Widget1Type> = ({ useGetTodoQuery }) => {
	const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

	return <div>data from jsonplaceholder : {JSON.stringify(data)}
		{/* <Icon width={20} height={20} color="#FAFAFA" icon={Icons.House}  /> */}
		<Typography as={Tags.h1} ></Typography>
		<Typography as={Tags.h1} >Lorem ipsum dolor sit amet consectetur.</Typography>
		<Typography as={Tags.p}  color="#FF5CFF" weight={600} lineHeight="120%" >ddd dd ddd</Typography>
		<Typography as={Tags.span}  color="#FF5CFF" weight={600} lineHeight="120%" >ddd dd ddd</Typography>
		
	</div>;
};

export default Widget1;
