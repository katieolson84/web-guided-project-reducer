import { ADD_ACTION, SUBTRACT_ACTION, CLEAR_ACTION, ADD_TO_MEMORY_ACTION} from './../actions/calcAction';

export const initialState = {
  currentValue: 12322,
  memory: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, currentValue: state.currentValue + action.payload };
    case "SUBTRACT":
      return { ...state, currentValue: state.currentValue - action.payload };
    case "CLEAR":
      return { ...state, currentValue: 0 };
    case "ADD_TO_MEMORY":
      return { ...state, memory: state.currentValue };
    default:
      return state;
  }
};
  
export default reducer;
  