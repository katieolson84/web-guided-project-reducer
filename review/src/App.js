import React, { useReducer } from "react";
import reducer, { initialState } from './reducers/calcReducer';

import "./styles.css";

import {addAction, subtractAction, addToMemoryAction, clearAction} from './actions/calcAction';

//application
// let currentState = {
//   currentValue: 0,
//   memory: 0
// };


// currentState = reducer(currentState, addAction(5) );
// console.log(currentState);

// currentState = reducer(currentState, subtractAction(4));
// console.log(currentState);

// currentState = reducer(currentState, subtractAction(57232));
// console.log(currentState);

// currentState = reducer(currentState, addAction(1312312312));
// console.log(currentState);

// currentState = reducer(currentState, addToMemoryAction());
// console.log(currentState);

// currentState = reducer(currentState, clearAction());
// console.log(currentState);

// currentState = reducer(currentState, addAction(5) );
// console.log(currentState);

export default function App() {
  // const [state, setState ] = useState(initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddClick = () =>{
    dispatch(addAction(2));
  }

  const handleSubClick = () =>{
    dispatch(subtractAction(5));
  }

  const handleClearClick = ()=>{
    dispatch(clearAction());
  }

  return (
    <div className="App">
      <textarea rows="1" value={state.currentValue} id="total" type="text" name="ans"></textarea>
      <br />
      <button onClick={handleAddClick} type="button" className="btn">
        + 2
      </button>

      <button onClick={handleSubClick} type="button" className="btn">
        - 5
      </button>

      <button onClick={handleClearClick} type="button" className="btn">
        Clear
      </button>
    </div>
  );
}