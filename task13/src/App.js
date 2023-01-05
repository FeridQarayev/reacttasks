import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount} from "./redux/counter/counter"
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  let inputRef = useRef()
  return (
    <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      <span>{count}</span>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <input ref={inputRef} type="number"></input>
      <button onClick={()=>{dispatch(incrementByAmount(inputRef.current.value))}}>Vur bana</button>
    </div>
  );
}

export default App;
