import "./App.css";
import { CounterClass } from "./Components/CounterClass.js";
import { CounterF } from "./Components/CounterF.js";
import { NavC } from "./Components/NavC";
import { HomeWolfCardsC } from "./Components/HomeWolfCardsC.js";

function App() {
  return (
    <div className="App">
    <NavC />
      <div className="text">
        <h1>На нашем сайте вы сможете найти:</h1>
      </div>
      
      <div className="cards">
        <HomeWolfCardsC />
      </div>
    </div>
  );
}

export default App;
