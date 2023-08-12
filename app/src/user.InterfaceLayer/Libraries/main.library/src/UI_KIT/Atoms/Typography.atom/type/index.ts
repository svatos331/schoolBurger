import { ReactNode } from "react";
import { Tags } from "../enum";

export interface IText extends TextProps {
    as: Tags;
    children?: JSX.Element | ReactNode;
}

export interface StyleComponentTextProps extends TextProps {
    as?: keyof JSX.IntrinsicElements ;
}

export interface TextProps extends MediaQuerySize{
    
    size?: string;
    color?: string;
    weight?:number;
    lineHeight?:string;
    family?:string;

  };
  export interface MediaQuerySize{
    smallMQ?:string;
    mediumMQ?:string;
    largeMQ?:string;
  }