import React, { useReducer } from "react";
import reducer from './reducers/calcReducer';
import "./styles.css";


let currentState = {
  currentValue: 0
};

console.log(currentState);
currentState = reducer(currentState, { type: "ADD", payload: 5});
console.log(currentState);
currentState = reducer(currentState, { type: "SUBTRACT", payload: 1});
console.log(currentState);

export default function App() {
  return (
    <div className="App">
      <textarea rows="1" value="0" id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" className="btn">
        +
      </button>
    </div>
  );
}