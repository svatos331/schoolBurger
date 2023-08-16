import { Dispatch, SetStateAction } from "react";

export interface ISelectObjectProps {
	name: string;
	valueArray: Array<{id: number, name:string}>;
	setValue: Dispatch<SetStateAction<{ id: number; name: string; }>>;
}

export interface IOptionsWrap {
	$active: boolean;
	$optionsCount: number;
}

export interface ISelectStyled {
	$animation: boolean;
	$timer: number;
}