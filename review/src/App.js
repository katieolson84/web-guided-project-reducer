import React, { useReducer } from "react";
import reducer from './reducers/calcReducer';
import "./styles.css";



//action creators
const addAction = (input) => {
  return({ type: "ADD", payload: input});
}

const subtractAction = (input) => {
  return({ type: "SUBTRACT", payload: input});
}

const clearAction = () => {
  return({ type: "CLEAR"});
}

const addToMemoryAction = ()=> {
  return({type: "ADD_TO_MEMORY"})
}

//application
let currentState = {
  currentValue: 0,
  memory: 0
};

console.log(currentState);



currentState = reducer(currentState, addAction(5));
console.log(currentState);

currentState = reducer(currentState, subtractAction(4));
console.log(currentState);

currentState = reducer(currentState, subtractAction(57232));
console.log(currentState);

currentState = reducer(currentState, addAction(1312312312));
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