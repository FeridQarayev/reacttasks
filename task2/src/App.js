import './App.css';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Button } from '@mui/material';

function App() {
  let [myColor,setmyColor] = useState("primary.dark")

  return (
    <>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: myColor,
          transition:"all 1s"
        }}
      />
      <Button variant="contained" color="error" onClick={()=>setmyColor("red")}>
        Error
      </Button>
      <Button variant="contained" color="success" onClick={()=>setmyColor("green")}>
        Success
        </Button>
    </>
  );
}

export default App;
