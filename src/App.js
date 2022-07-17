import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Hotel from "./pages/Hotel/Hotel";
import List from "./pages/List/List"
import "./App.css"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/register" element={<Register />}  />
      </Routes>
    </div>
  );
}

export default App;
