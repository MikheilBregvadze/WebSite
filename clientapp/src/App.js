import React from 'react';
import Router from './pages/desktop/layout/routes/Routes';
import Header from './pages/desktop/layout/header/Header';

import './index.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <Router />
      </section>
    </div>
  );
}

export default App;
