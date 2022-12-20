import { useState } from 'react';
import './App.css';

function App() {
  let [counter,setCounter] = useState(0)

  return (
    <div>
      <span>{counter} {counter<=0? ":(":":)"}</span>
      <div>
        <button style={{backgroundColor: counter<=0?  "red": "white"}} onClick={()=>counter<=0? null :setCounter(--counter)}>Decrease</button>
        <button onClick={()=>setCounter(++counter)}>Increase</button>
      </div>
    </div>
  );
}

export default App;
