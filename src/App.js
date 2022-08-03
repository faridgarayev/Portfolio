import React from 'react';
import '../src/sass/style.css';

import Header from './components/Header';
import Routers from './routes/Routers';


function App() {
  return (
    <>
      <Header />
      <Routers />
    </>
  );
}

export default App;
