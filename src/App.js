import "./App.css";
import { NavC, HomeWolfCardsC, MemesCardsC,OrigC,QuotesC, BasketC } from "./Components";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {BasketStore} from './stores'


const store = new BasketStore();

function App() {
  return (
    <div className="App">
      <NavC butstore={store}/>
      <Router>
        <Routes>
          <Route path="/" element={<HomeWolfCardsC/>}/>
          <Route path="/memes" element={<MemesCardsC butstore={store}/>}/>
          <Route path="/orig" element={<OrigC butstore={store}/>}/>
          <Route path="/quotes" element={<QuotesC butstore={store}/>}/>
          <Route path="/basket" element={<BasketC butstore={store}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
