import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Sports } from "./Components/Sports/Sports";
import { Casino } from "./Components/Casino/Casino";
import { Promotions } from "./Components/Promotions/Promotions";
import { Aviator } from "./Components/Aviator/Aviator";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Casino" element={<Casino />} />
        <Route path="/Promotions" element={<Promotions />} />
        <Route path="/Aviator" element={<Aviator />} />
      </Routes>
    </div>
  );
}

export default App;
