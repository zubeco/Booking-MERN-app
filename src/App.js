import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Hotel from "./pages/Hotel/Hotel";
import List from "./pages/List/List"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </div>
  );
}

export default App;
