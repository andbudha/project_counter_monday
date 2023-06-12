import React, { useState } from 'react';
import { Button } from "../Button/Button";
import style from './Counter.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../bll/store';
import { IncreaseCounterAC, ResetCounterAC } from '../../bll/reducer';

export const Counter = () => {

    const count = useSelector<AppRootStateType, number>(state => state.counter.value);

    const dispatch = useDispatch();

    const increaseCounterHandler = () => {
        dispatch(IncreaseCounterAC());
    }

    const resetCounterHandler = () => {
        dispatch(ResetCounterAC());
    }
    return (
        <div className={style.counter_container}>
            <div className={`${style.counter_display} ${count === 5 ? style.result_color : ''}`}>{count}</div>
            <div className={style.button_container}>
                <Button title={'Increase'} callBack={increaseCounterHandler} id={1} count={count} />
                <Button title={'Reset'} callBack={resetCounterHandler} id={2} count={count} />
            </div>
        </div>
    );
};
