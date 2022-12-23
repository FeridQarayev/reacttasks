import React from 'react'
import { useRef } from 'react'
import './Trow.css'
import {toast} from 'react-hot-toast'

function TRow(data) {
    let text = useRef()
    // console.log(data.data) 
    function textChange(){
        // console.log(text.current.parentElement.previousElementSibling);
        // text.current.parentElement.previousElementSibling.style.textDecoration = "line-through"
        text.current.parentElement.previousElementSibling.classList.toggle("line")
        toast.success('Bomba Kimi')
    }
  return (
    <tr>
        <td>{data.data.id}</td>
        <td>{data.data.title}</td>
        <td><button ref={text} onClick={()=>{textChange()}}>Ok</button></td>
    </tr>
  )
}

export default TRow