import React from 'react';
import { Toaster } from 'react-hot-toast';

import './App.css';
import BackToTop from './components/BackToTop/BackToTop';
import Router from "./components/Router/Router"
import CursorAnimated from './components/CursorAnimated/CursorAnimated';

function App() {
  return (
    <>
      <CursorAnimated />
      <Toaster
      toastOptions={{
        style: {
          fontFamily: 'var(--text-font)'
        }
      }}
      />
      
      <Router/>
      <BackToTop />
    </>
  )
}

export default App;
