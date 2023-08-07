import React from "react";

import * as ST from "./styled";

const Error = () => (
	<ST.Error>
		<ST.ErrText>Произошла ошибка</ST.ErrText>
		<ST.Btns>
			{window.location.pathname !== "/" && <ST.Btn onClick={() => window.location.href = '/'}>На главную</ST.Btn>}
            <ST.Btn onClick={() => window.location.reload()}>Перезагрузить</ST.Btn>
		</ST.Btns>  
	</ST.Error>
);

export default Error;
