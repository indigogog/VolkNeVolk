import './App.css';
import {CounterClass} from './Components/CounterClass.js'
import {CounterF} from './Components/CounterF.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterClass initialCount={5}/>
        <CounterF initialCount={10}/>
          
        
      </header>
    </div>
  );
}

export default App;
