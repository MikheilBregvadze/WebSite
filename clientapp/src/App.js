import React, { useEffect } from 'react';
import Router from './pages/desktop/layout/routes/Routes';
import Header from './pages/desktop/layout/header/Header';
import { Auth, AuthContext } from './services/context/AuthContext';
import { initGA } from '.';

import './index.css'

function App() {
  const auth = AuthContext();
  useEffect(() => { initGA(); }, []);
  return (
    <Auth.Provider value={auth}>
      <div className="App">
        <Header/>
        <section>
          <Router />
        </section>
      </div>
    </Auth.Provider>
  );
}

export default App;
