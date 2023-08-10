import React, { FC } from "react";
import Component1 from "user.InterfaceLayer/Components/ComponentsBll/Component1.bll";
import Picture from "user.InterfaceLayer/Libraries/main.library/src/UI_KIT/Atoms/Picture.atom";
import img from "./test.jpg"
import img_2 from "./test_2.jpg"

// import { Cells1.cell } from "test-lib";

const MainPage: FC = () => {
	// eslint-disable-next-line no-console
	// console.log(Cells1.cell);

	return (
		<div>
			SvyatoslavZhilinMainPage <Component1 />
			<Picture
				images={[
					{srcset: img, width: "100", height: "100", media: "(max-width: 768px)", type: "jpg"},
					{srcset: img_2, width: "400", media: "(min-width: 768.98px)", type: "jpg"}
				]}
				defaultImage={img}
				width="100"
				height="100"
			/>
		</div>
	);
};

export default MainPage;
