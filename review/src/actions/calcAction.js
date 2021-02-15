export const ADD_ACTION = "ADD";
export const SUBTRACT_ACTION = "SUBTRACT";
export const CLEAR_ACTION = "CLEAR";
export const ADD_TO_MEMORY_ACTION = "ADD_TO_MEMORY";

//action creators
export const addAction = (input) => {
    return({ type: "ADD", payload: input});
}
  
export const subtractAction = (input) => {
    return({ type: "SUBTRACT", payload: input});
}

export const clearAction = () => {
    return({ type: "CLEAR"});
}

export const addToMemoryAction = ()=> {
    return({type: "ADD_TO_MEMORY"})
}