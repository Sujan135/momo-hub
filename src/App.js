import React from 'react';

import { AboutUs, FindUs, Gallery, Header,  } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Gallery />
    <FindUs />
  </div>
);

export default App;
