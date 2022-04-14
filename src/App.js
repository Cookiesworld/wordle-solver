import './App.css';
import Solver from './solver';

function App() {

  let c = process.env.APPINSIGHTS_INSTRUMENTATIONKEY
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Helper</h1>
        {c}

      </header>

      <Solver></Solver>
    </div>
  );
}

export default App;
