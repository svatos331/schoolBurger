import React from "react";

import * as ST from "../styled/styled";

interface Icon {
	name: string;
	url: string;
}

interface CategoryProps {
	category: Icon[];
}

const CategoryBtn: React.FC<CategoryProps> = ({ category }) => {
	return (
		<div>
			{category?.map((categories: any) => (
				<ST.btn key={categories.id}>
					<ST.img>
						<img
							src={categories.url}
							alt={categories.name}
						/>
					</ST.img>
					<ST.text>{categories.name}</ST.text>
				</ST.btn>
			))}
		</div>
	);
};

export default CategoryBtn;
