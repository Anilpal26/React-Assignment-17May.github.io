import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const like = useState(0);

  const counter = like[0];
  const updateCounter = like[1];

  const inc = _ => {
    updateCounter((current_value) => {
      const new_value = current_value + 1;
      return new_value;
    });
  }

  const dic = _ =>{
    updateCounter((current_value) => {
      const new_value = current_value - 1;
      return new_value;
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={inc}>👍</button>
        <p>Like & Dislike : {counter} times</p>
        <button onClick={dic}>👎</button>
      </header>
    </div>
  );
}

export default App;