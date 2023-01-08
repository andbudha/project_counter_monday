import React from 'react';
import './App.css';
import {Button} from "./components/Button/Button";

function App() {

    const increaseCounterHandler = () => {
        console.log('increased')
    }

    const resetCounterHandler = () => {
        console.log('reset')
    }
    return (
        <div className="App">
            <div className={'counter-container'}>
                <div className={'counter-display'}>0</div>
                <div className={'button-container'}>
                    <Button title={'Increase'} callBack={increaseCounterHandler}/>
                    <Button title={'Reset'} callBack={resetCounterHandler}/>
                </div>
            </div>
        </div>
    );
}

export default App;
