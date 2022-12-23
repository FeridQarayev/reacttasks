import { useEffect, useState } from "react";
import TRow from "./components/TRow";
import axios from 'axios';
import {toast, Toaster} from 'react-hot-toast'

function App() {
  const [datas,setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/photos").then((res)=>{
      setData(res.data)
      setLoading(false)
      toast.success('Successfully get data!')
    }).catch(()=>{
      setLoading(false)
      toast.error("Error partdadi")
    })
  },[])
  return (
    <>
     {loading ? (
        <div>
          <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden"></span>
          </div>
        </div>):
        (
          <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
          <tbody>
              {datas.map((item)=>{
              return <TRow key={item.id} data={item}/>
            })}
          </tbody>
          </table>
        )}
        <Toaster />
    </>
  );
}

export default App;
