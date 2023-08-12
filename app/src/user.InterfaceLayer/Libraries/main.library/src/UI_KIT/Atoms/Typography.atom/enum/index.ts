import { ReactNode } from "react";

export enum Tags {
    h1,
    h2,
    h3,
    p,
    span,
}

export interface IText {
    type: Tags;
    size?: number;
    color?: string;
    weight?:number;
    children: JSX.Element | ReactNode;
}

export interface TextProps {
    size?: number ,
    weight?: number,
    color?: string ,
  };