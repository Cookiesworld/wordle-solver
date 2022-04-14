import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WordsProvider } from './wordsContext';
import ErrorBoundary from './ErrorBoundary';
import { AppInsightsContextProvider } from './appInsightsContext';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <WordsProvider>
        <App />
      </WordsProvider>
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
