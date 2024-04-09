import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './Routes/Home';
import { AboutUs } from './Routes/AboutUs';
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
