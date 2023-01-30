import React from 'react';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Map from './components/pages/Map';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Container>
        <NavBar />
        <Map />
      </Container>
    </div>
  );
}

export default App;


