import React from 'react';
import style from './Button.module.css'



type ButtonPropsType = {
    title: string
    id: number
    count: number
    callBack:()=>void
}
export const Button = (props: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        props.callBack();
    }

    return (
        <>
            <button
                disabled={props.count === 5 && props.id === 1 || props.count < 5 && props.id === 2}
                onClick={onClickButtonHandler}
                className={`${style.button} ${props.count === 5 && props.id === 1 || props.count < 5 && props.id === 2 ? style.disabled_button : ''}`}
            >{props.title}</button>
        </>
    );
};

