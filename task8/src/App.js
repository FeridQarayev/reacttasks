import { useState, useRef } from 'react'
import Button from '@mui/material/Button';

function App() {
  let [start,setStart]= useState(false)
  let [stop,setStop]= useState(false)
  let [reset,setReset]= useState(false)
  let [myTime,setmyTime]= useState(0)
  let time = useRef(0);



  function startTime(){
    if(start) return
    setStart(true)
    setStop(false)
    setReset(false)
    time.current =setInterval(() => {
      console.log(time.current)
      setmyTime(++myTime)
    }, 1000);
  }
  function stopTime(){
    if(stop) return
    setStart(false)
    setStop(true)
    setReset(false)
    clearInterval(time.current)
  }
  function resetTime(){
    if(reset) return
    setStart(false)
    setStop(false)
    setReset(true)
    clearInterval(time.current)
    setmyTime(0)
  }
  return (
    <div>
    <div style={{fontSize:40}}>
      <p>Stop Watching ...</p>
      <span style={{display:"inline-block",marginRight:20}}>Timmer</span><span ref={time}>{myTime}s</span>
    </div>
    <div> 
      <Button style={{marginRight:10}} onClick={()=>{startTime()}} variant={start ? "outlined": "contained"} color="success">START</Button>
      <Button style={{marginRight:10}} onClick={()=>{stopTime()}} variant={stop ? "outlined": "contained"} color="error">STOP</Button>
      <Button style={{marginRight:10}} onClick={()=>{resetTime()}} variant={reset ? "outlined": "contained"} color="warning">RESET</Button>
    </div>
    </div>
  );
}

export default App;
