import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Siyasət from "./pages/Siyasət";
import İqtisadiyyat from "./pages/İqtisadiyyat";
import Cəmiyyət from "./pages/Cəmiyyət";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Baş səhifə" element={<Home/>}></Route>
      <Route path="/Siyasət" element={<Siyasət/>}></Route>
      <Route path="/Cəmiyyət" element={<Cəmiyyət/>}></Route>
      <Route path="/İqtisadiyyat" element={<İqtisadiyyat/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
