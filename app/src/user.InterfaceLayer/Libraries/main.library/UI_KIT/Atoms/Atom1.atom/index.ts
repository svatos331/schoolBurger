/* eslint-disable max-lines */
import { FC } from "react";

export enum Icons { House, RoundPlus, ReactPlus, Moon, Clipboard, Copyright, Family, Job, Sport, Statistics, Compare, Exit, Clock, Calendar, Edit, TrashBin, Star, Settings, Profile, Sun, Facebook, Twitter, Check }

interface IIcon{
    icon: Icons,
    width: number,
    height: number,
    color: string,
}

export const Icon: FC<IIcon> = ({icon, width, height, color}) => {
    switch (icon) {
        case Icons.House:
            return (
                <svg width={width.toString()} height={height.toString()} viewBox="0 0 18 18" fill="none" stroke={color} xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M2.25 6.75L9 1.5L15.75 6.75V15C15.75 15.3978 15.592 15.7794 15.3107 16.0607C15.0294 16.342 14.6478 16.5 14.25 16.5H3.75C3.35218 16.5 2.97064 16.342 2.68934 16.0607C2.40804 15.7794 2.25 15.3978 2.25 15V6.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Vector_2" d="M6.75 16.5V9H11.25V16.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.RoundPlus:
            return (
                <svg width={width.toString()} height={height.toString()} viewBox="0 0 20 20" fill="none" stroke={color} xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Vector_2" d="M10 6.3999V13.5999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Vector_3" d="M6.40002 10H13.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        
        default:
            return <div/>;
    }
};