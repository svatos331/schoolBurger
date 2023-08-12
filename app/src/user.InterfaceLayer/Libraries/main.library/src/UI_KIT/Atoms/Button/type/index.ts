import { ICommonComponentProps } from "../../../../constants/commonComponentProps";
import ButtonEnum from "../enum";

interface ButtonType extends ICommonComponentProps {
	type: ButtonEnum;
	children: ICommonComponentProps["children"] | string; // TODO: В случае если нужна верстка в button добавить JSX.Element
	Icon?: JSX.Element;
	isLoading?: boolean;
}

export default ButtonType;
