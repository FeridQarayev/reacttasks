import React from 'react'
import { useState } from 'react'

const Form = () => {
    let [boxState,setBoxState] = useState({})
    const [boxColor,setBoxColor] = useState()
    const [boxWidth,setBoxWidth] = useState()
    const [boxHeight,setBoxHeight] = useState()
    let Id = 0;

    function createBox(){
        setBoxState({
            id:`${Id++}`,
            width:`${boxWidth}`,
            height:`${boxHeight}`,
            color:`${boxColor}`
        })
        console.log(boxColor);
        console.log(boxHeight);
        console.log(boxWidth);
    }
    function changeColor(color){
        setBoxColor(color)
    }
    function changeWidth(width){
        setBoxWidth(width)
    }
    function changeHeight(height){
        setBoxHeight(height)
    }
    function test(){
        console.log(boxState)
    }
  return (
    <div>
        <input onChange={(e)=>{changeWidth(e.target.value)}} placeholder='Enter width' type="number" />
        <input onChange={(e)=>{changeHeight(e.target.value)}} placeholder='Enter height' type="number" />
        <input onChange={(e)=>{changeColor(e.target.value)}} id='colorInp' type="color" />
        <button onClick={()=>{createBox()}}>Create a box</button>
        <button onClick={()=>{test()}}>Test</button>
    </div>
  )
}

export default Form