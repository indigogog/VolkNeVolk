import "./App.css";
import { NavC } from "./Components/NavC";
import { HomeWolfCardsC } from "./Components/HomeWolfCardsC.js";
import {MemesCardsC } from "./Components/MemesCardsC.js"
import {OrigC } from "./Components/OrigC.js"
import {QuotesC } from "./Components/QuotesC.js"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavC />
      <Router>
        <Routes>
          <Route path="/" element={<HomeWolfCardsC/>}/>
          <Route path="/memes" element={<MemesCardsC/>}/>
          <Route path="/orig" element={<OrigC/>}/>
          <Route path="/quotes" element={<QuotesC/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
