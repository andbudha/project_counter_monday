import React, {useState} from 'react';
import {Button} from "../Button/Button";
import style from './Counter.module.css'

export const Counter = () => {

    //counter state
    const[count, setCount]=useState(0);


    const increaseCounterHandler = () => {
        setCount(count+1);

    }

    const resetCounterHandler = () => {
        setCount(0);
    }
    return (
        <div className={style.counter_container}>
            <div className={`${style.counter_display} ${count === 5 ? style.result_color : ''}`}>{count}</div>
            <div className={style.button_container}>
                <Button title={'Increase'} callBack={increaseCounterHandler} id={1} count={count}/>
                <Button title={'Reset'} callBack={resetCounterHandler} id={2} count={count}/>
            </div>
        </div>
    );
};
