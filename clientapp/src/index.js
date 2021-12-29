import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import App from './App';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
// const TRACKING_ID = "UA-216007932-1";
// ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  rootElement
);

