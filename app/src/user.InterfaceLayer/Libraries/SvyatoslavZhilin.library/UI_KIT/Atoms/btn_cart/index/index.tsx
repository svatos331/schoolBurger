import React from "react";

import * as ST from "../styled/styled";

type Props = {
	value: any;
};

const CartBtn = ({ value }: Props) => {
	return <ST.btn>{value}</ST.btn>;
};

export default CartBtn;
