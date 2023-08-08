import ButtonEnum from "../enum";

interface ButtonType {
	type: ButtonEnum;
	children: string; // TODO: В случае если нужна верстка в button добавить JSX.Element
	Icon?: JSX.Element;
	isLoading?: boolean;
}

export default ButtonType;
