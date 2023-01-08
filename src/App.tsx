import React from 'react';
import './App.css';
import {Button} from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <div className={'counter-container'}>
          <div className={'counter-display'}>0</div>
          <div className={'button-container'}>
              <Button title={'Increase'} callBack={()=>{}}/>
              <Button title={'Reset'} callBack={()=>{}}/>
          </div>
      </div>
    </div>
  );
}

export default App;
