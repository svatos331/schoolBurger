import React from "react";

import * as ST from "../styled/styled";

interface Icon {
	name: string;
	url: string;
}

interface CategoryListProps {
	icons: Icon[];
}

const CategoryBtn: React.FC<CategoryListProps> = ({ icons }) => {
	return (
		<div>
			{icons?.map((icon: any) => (
				<ST.btn key={icon.id}>
					<ST.img>
						<img
							src={icon.url}
							alt={icon.name}
						/>
					</ST.img>
					<ST.text>{icon.name}</ST.text>
				</ST.btn>
			))}
		</div>
	);
};

export default CategoryBtn;
