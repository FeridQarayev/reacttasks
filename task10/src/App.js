import axios from 'axios';
import React, { useEffect } from 'react';

function App() {
  const [datas, setDatas] = React.useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/users').then((res)=>setDatas(res.data))
  },[])
  return (
    <div>
      {datas.map((data) => {
      return (
      <div>
        <h1>{data.name}</h1>
        <h3>{data.surname}</h3>
        <h3>{data.category}</h3>
      </div>
        )
      })}
    </div>
  );
}

export default App;
