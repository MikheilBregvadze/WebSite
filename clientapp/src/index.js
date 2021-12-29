import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import App from './App';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

// export const initGA = () => {       
//   ReactGA.initialize('G-5MH2XEDC0N'); 
// } 

export const GApageView = (page) => {   
  ReactGA.pageview(page);   
}

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  rootElement
);

