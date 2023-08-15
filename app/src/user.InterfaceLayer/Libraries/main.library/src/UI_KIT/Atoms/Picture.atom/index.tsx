import React, { FC } from "react";

import * as ST from "./styled";
import { IProps } from "./type";

const Picture: FC<IProps> = ({ sources, defaultImage, radius, ...props }) => (
	<ST.Picture radius={radius}>
		{sources.map(({ srcset, type, ...item }) => (
			<ST.Source
				srcSet={srcset}
				type={type && `image/${type}`}
				{ ...item }
				key={srcset}
			/>
		))}
		<ST.Image
			loading="lazy"
			src={defaultImage}
			{...props}
		/>
	</ST.Picture>
);

export default Picture;
