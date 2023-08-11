import MultiControlEnum from "../enum";
import { ICommonComponentProps } from "../../../../constants/commonComponentProps";

interface MultiControlType extends ICommonComponentProps {
	checked: boolean;
	type: MultiControlEnum;
}

export default MultiControlType;
