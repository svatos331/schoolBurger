import React, { FC } from "react";

import * as ST from "./styled";
import { IProps } from "./type";

const Picture: FC<IProps> = ({
	images,
	width,
	height,
	defaultImage,
	alt,
	...other
}) => (
	<ST.Picture>
		{images.map((source) => (
			<ST.Source
				key={source.type}
				srcSet={source.srcset}
				width={source.width}
				height={source.height}
				type={`image/${source.type}`}
				media={source.media}
			/>
		))}

		<ST.Image
			src={defaultImage}
			width={width}
			height={height}
			alt={alt}
			{...other}
		/>
	</ST.Picture>
);

export default Picture;
