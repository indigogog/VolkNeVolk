import "./App.css";
import { NavC, HomePageC } from "./Components";
import {BasketStore} from './stores'


const store = new BasketStore();

function App() {
  return (
    <div className="App">
      <HomePageC/>
    </div>
  );
}

export default App;
