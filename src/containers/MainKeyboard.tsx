import React from "react";
import {default as bemCssModules} from 'bem-css-modules';
import {default as MainKeyboardStyles} from './MainKeyboard.module.scss'
import {Button} from '../components/Button/Button'
const style =bemCssModules(MainKeyboardStyles);

export const MainKeyboard: React.FC = () => {
    return (
        <div className={style()}>

        <Button content="%" onClick={()=> console.log("m")} />
        <Button content="CE" onClick={()=> console.log("")} />
        <Button content="C" onClick={()=> console.log("")} />
        <Button content="<=" onClick={()=> console.log("")} />
        <Button content="1/x" onClick={()=> console.log("")} />
        <Button content="x2" onClick={()=> console.log("")} />
        <Button content="sqrt" onClick={()=> console.log("")} />
        <Button content="/" onClick={()=> console.log("")} />
        <Button content="7" onClick={()=> console.log("")} />
        <Button content="8" onClick={()=> console.log("")} />
        <Button content="9" onClick={()=> console.log("")} />
        <Button content="*" onClick={()=> console.log("")} />
        <Button content="4" onClick={()=> console.log("")} />
        <Button content="5" onClick={()=> console.log("")} />
        <Button content="6" onClick={()=> console.log("")} />
        <Button content="-" onClick={()=> console.log("")} />
        <Button content="1" onClick={()=> console.log("")} />
        <Button content="2" onClick={()=> console.log("")} />
        <Button content="3" onClick={()=> console.log("")} />
        <Button content="+" onClick={()=> console.log("")} />
        <Button content="+/-" onClick={()=> console.log("")} />
        <Button content="0" onClick={()=> console.log("")} />
        <Button content="." onClick={()=> console.log("")} />
        <Button content="=" onClick={()=> console.log("")} />

            </div>
    )    
        }
   
