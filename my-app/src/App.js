import React from 'react';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Page1 } from "./components/page1";
import { Page2 } from "./components/page2";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Link to="/">Header</Link>
      <br />
      <Link to="/Home">Home</Link>
      <br />
      <Link to="/Page1">Page1</Link>
      <br />
      <Link to="/Page2">Page2</Link>
      <br />

      
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
