import React from 'react';
import TagManager from 'react-gtm-module'
import Router from './pages/desktop/layout/routes/Routes';
import Header from './pages/desktop/layout/header/Header';
import { Auth, AuthContext } from './services/context/AuthContext';

import './index.css'

function App() {
  const auth = AuthContext();
  const tagManagerArgs = {
      gtmId: 'GTM-58MFBK7'
  };
  TagManager.initialize(tagManagerArgs)
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
