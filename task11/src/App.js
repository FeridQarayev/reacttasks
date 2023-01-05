import React, { useReducer } from "react";
import reducer from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    number: 0,
  });

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <span>{state.number}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}

export default App;
