import React from 'react';
import Home from './pages/Home';
import Nav from './components/Nav';
import GlobalStyles from './components/GlobalStyles';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
