import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";
import Card from '../components/Card/Card';


function Home() {
  let [datas,setDatas] = useState([])

  useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/photos").then((res)=>setDatas(res.data))
  },[])
  return (
  <>
    {
      datas.map((data)=>{
        return(
        <Card key={data.id} dataa={data}/>
      )})
    }
  </>
  )
}

export default Home