import React from 'react';
import style from './Button.module.css'



type ButtonPropsType = {
    title: string
    callBack:()=>void
}
export const Button = (props: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        props.callBack();
    }

    return (
        <>
            <button
                onClick={onClickButtonHandler}
                className={style.button}
            >{props.title}</button>
        </>
    );
};

