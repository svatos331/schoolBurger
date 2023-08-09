/* eslint-disable max-lines */
import { FC, ReactNode } from "react";
import * as ST from "./styled";
export enum Tags {
	h1,
	h2,
	h3,
	p,
	span,
}

interface IText {
	type: Tags;
	size?: number;
	color?: string;
    weight?:number;
	children: ReactNode; //JSX.Element
}

//@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap');


export const Text: FC<IText> = ({ type, size, color, weight,children }) => {
	switch (type) {
		case Tags.h1:
			return (
				<>
					<ST.H1
						color={color}
						size={size}
                        weight={weight}
					>
						{children}
					</ST.H1>
				</>
			);
		case Tags.span:
			return (
				<ST.Span
					color={color}
					size={size}
                    weight={weight}
				>
					{children}
				</ST.Span>
			);
		case Tags.h2:
			return (
				<>
					<ST.H2
						color={color}
						size={size}
                        weight={weight}
					>
						{children}
					</ST.H2>
				</>
			);
		case Tags.h3:
			return (
				<>
					<ST.H3
						color={color}
						size={size}
                        weight={weight}
					>
						{children}
					</ST.H3>
				</>
			);
            case Tags.p:
                return (
                    <>
                        <ST.P
                            color={color}
                            size={size}
                            weight={weight}
                        >
                            {children}
                        </ST.P>
                    </>
                );
		default:
			return <div />;
	}
};
