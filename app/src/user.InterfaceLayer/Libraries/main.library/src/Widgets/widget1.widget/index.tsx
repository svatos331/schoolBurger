import React, { FunctionComponent } from "react";

// import {Icons , Icon } from "../../UI_KIT/Atoms/Atom1.atom/icons";
import Widget1Type from "./type";
import Typography from "../../UI_KIT/Atoms/Typography.atom";
import { Tags } from "../../UI_KIT/Atoms/Typography.atom/enum";

const Widget1: FunctionComponent<Widget1Type> = ({ useGetTodoQuery }) => {
	const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

	return (
		<div>
			data from jsonplaceholder : {JSON.stringify(data)}
			<Typography as={Tags.h1}>
				Lorem ipsum dolor sit amet consectetur.
			</Typography>
			<Typography
				as={Tags.p}
				color="#FF5CFF"
				children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non?"
			/>
			
		</div>
	);
};

export default Widget1;
