/* eslint-disable max-lines */
import { FC } from "react";
import * as ST from "./styled"
export enum Tags { h1, h2, h3, p, span}

interface IText{
    type: Tags,
    size: number,
    color?: string,
}

export const Text: FC<IText> = ({type, size, color}) => {
    switch (type) {
        case Tags.h1:
            return (
                <>
                    <ST.H1>ddd<span>ddd</span></ST.H1>
                </>
            );
        case Tags.h2:
            return (
                <></>
            );
       
        default:
            return <div/>;
    }
};