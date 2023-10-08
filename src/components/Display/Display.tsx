import React from "react";
import {default as bemCssModules} from 'bem-css-modules';
import {default as DisplayStyles} from './Display.module.scss';

const style = bemCssModules(DisplayStyles);

export const Display: React.FC = () => {
    return (
        <div
        className={style()}
        >
            0
        </div>
    );
};