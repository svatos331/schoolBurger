import { ReactNode } from "react";
import { Tags } from "../enum";

export interface IText extends TextProps {
    type: Tags;
    children: JSX.Element | ReactNode;
}

export interface TextProps {
    size?: number;
    color?: string;
    weight?:number;
    lineHeight?:number;
    family?:string;
  };