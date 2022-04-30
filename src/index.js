import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WordsProvider } from './wordsContext';
import ErrorBoundary from './ErrorBoundary';


import 'bootstrap/dist/css/bootstrap.min.css';
import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';

ReactDOM.render(
  <React.StrictMode>
    <WordsProvider>
      <App />
    </WordsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
