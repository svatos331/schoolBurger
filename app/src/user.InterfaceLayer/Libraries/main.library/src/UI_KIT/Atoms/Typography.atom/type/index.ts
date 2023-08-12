import { ReactNode } from "react";
import { Tags } from "../enum";

export interface IText extends TextProps {
    type: Tags;
    children: JSX.Element | ReactNode;
}

export interface TextProps {
    size?: string;
    color?: string;
    weight?:number;
    lineHeight?:string;
    family?:string;
  };