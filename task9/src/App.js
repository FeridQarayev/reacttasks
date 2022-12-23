import { useState,useEffect, useRef } from 'react'
import axios from 'axios';

function App() {
  const [data,setData] = useState({})
  let text = useRef()
  
  function getJoke(){
    
  }
  useEffect(()=>{
    axios("https://v2.jokeapi.dev/joke/Any").then((res)=>{
      setData(res.data)
    })
  },[])
  return (
    <div>
    <button onClick={}>Joke</button>
    <p ref={text}></p>
    </div>
  );
}

export default App;
