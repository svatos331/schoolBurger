import React, { FC } from "react";
import Picture from "user.InterfaceLayer/Libraries/main.library/src/UI_KIT/Atoms/Picture.atom";
import horizontal from "../../../Libraries/main.library/src/UI_KIT/Atoms/Picture.atom/mock/horizontal.jpg";
import vertical from "../../../Libraries/main.library/src/UI_KIT/Atoms/Picture.atom/mock/vertical.jpg";
import { Format } from "user.InterfaceLayer/Libraries/main.library/src/UI_KIT/Atoms/Picture.atom/enum";

const LastPage: FC = () => (
	<div>
		SvyatoslavZhilinLastPage
		<Picture
			source={[
				{
					srcset: vertical,
					width: "400",
					media: "(max-width: 768px)",
				},
				{
					srcset: horizontal,
					width: "400",
					media: "(min-width: 768.98px)",
					type: Format.JPG,
				},
			]}
			defaultImage={horizontal}
			alt="Hello image"
		/>
	</div>
);

export default LastPage;
