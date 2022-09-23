import React from 'react';
// import AnimatedCursor from 'react-animated-cursor';

import './index.css'
import BackToTop from './components/BackToTop/BackToTop';
import Router from "./views/Router/Router"


function App() {


  return (
    <div className="App">
      {/* <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="69, 45, 171"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      /> */}
      <Router/>
      <BackToTop />
    </div>
  );
}

export default App;
