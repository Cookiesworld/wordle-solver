import './App.css';
import Solver from './solver';
import { reactPlugin } from "./appInsights";
import { AppInsightsErrorBoundary } from "@microsoft/applicationinsights-react-js";
import { WordsProvider } from './context/wordsContext';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Helper</h1>
      </header>
      <AppInsightsErrorBoundary onError={() => <h1>Something went wrong</h1>} appInsights={reactPlugin}>
        <WordsProvider>
          <Solver />
        </WordsProvider>
      </AppInsightsErrorBoundary>
    </div>
  );
}

export default App;
