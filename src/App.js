import Home from "./Home";
import Create from "./Create";
import Navbar from "./Navbar";
import Update from "./Update";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
          <Route path="/update"element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
