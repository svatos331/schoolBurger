import React, { FC } from "react";

import * as ST from "./styled";
import { IProps } from "./type";

const Picture: FC<IProps> = ({ source, defaultImage, ...props }) => (
	<ST.Picture>
		{source.map((item) => (
			<ST.Source
				key={item.srcset}
				srcSet={item.srcset}
				width={item?.width}
				height={item?.height}
				type={item.type ? `image/${item.type}` : undefined}
				media={item?.media}
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
