import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Sections/Home";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
