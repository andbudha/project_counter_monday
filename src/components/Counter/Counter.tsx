import React, {useState} from 'react';
import {Button} from "../Button/Button";
import style from './Counter.module.css'

export const Counter = () => {

    //counter state
    const[counter, setCounter]=useState(0);


    const increaseCounterHandler = () => {
        setCounter(counter+1);

    }

    const resetCounterHandler = () => {
        setCounter(0);
    }
    return (
        <div className={style.counter_container}>
            <div className={`${style.counter_display} ${counter === 5 ? style.color_red : ''}`}>{counter}</div>
            <div className={style.button_container}>
                <Button title={'Increase'} callBack={increaseCounterHandler} />
                <Button title={'Reset'} callBack={resetCounterHandler} />
            </div>
        </div>
    );
};
