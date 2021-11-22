import React from 'react';
import Router from './pages/desktop/layout/routes/routes';
import Header from './pages/desktop/layout/header/header';

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
