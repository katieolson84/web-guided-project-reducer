import React, { useReducer } from "react";
import reducer from './reducers/calcReducer';
import "./styles.css";



//action creators
const addAction = () => {
  return({ type: "ADD", payload: 5});
}

//application
let currentState = {
  currentValue: 0,
  memory: 0
};

console.log(currentState);



currentState = reducer(currentState, );
console.log(currentState);

currentState = reducer(currentState, { type: "SUBTRACT", payload: 1});
console.log(currentState);

currentState = reducer(currentState, { type: "SUBTRACT", payload: 12332});
console.log(currentState);

currentState = reducer(currentState, { type: "ADD", payload: 4352345234532});
console.log(currentState);

currentState = reducer(currentState, { type: "ADD_TO_MEMORY"});
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