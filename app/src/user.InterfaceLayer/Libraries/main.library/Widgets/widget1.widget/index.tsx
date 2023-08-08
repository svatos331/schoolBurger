import React, { FunctionComponent } from "react";
// import {Icons , Icon } from "../../UI_KIT/Atoms/Atom1.atom/icons";
import { Text, Tags } from "../../UI_KIT/Atoms/Text.atom";
import Widget1Type from "./type";

const Widget1: FunctionComponent<Widget1Type> = ({ useGetTodoQuery }) => {
	const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

	return <div>data from jsonplaceholder : {JSON.stringify(data)}
			{/* <Icon width={20} height={20} color="#FAFAFA" icon={Icons.House}  /> */}

			<Text type={Tags.h1}> Hello World</Text>
			<Text type={Tags.h2} weight={800}> Hello <Text type={Tags.span}> World</Text></Text>
			<Text type={Tags.h3} color="#FFCCFF"> Lorem ipsum dolor sit amet.</Text>
			<Text type={Tags.p}  > Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
			<Text type={Tags.p} size={20} color="#F05C00" > Lorem ipsum dolor sit amet consectetur adipisicing.</Text>

	</div>;
};

export default Widget1;
