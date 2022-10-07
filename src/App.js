import React from 'react';
import { Toaster } from 'react-hot-toast';

import './index.css'
import BackToTop from './components/BackToTop/BackToTop';
import Router from "./views/Router/Router"
// import CursorAnimated from './components/CursorAnimated/CursorAnimated';


function App() {

  return (
    <div className="App">

      {/* <CursorAnimated /> */}
      <Toaster
      toastOptions={{
        style: {
          fontFamily: 'var(--text-font)'
        }
      }}
      />
      
      <Router/>
      <BackToTop />
    </div>
  );
}

export default App;
