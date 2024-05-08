import Nav from './components/Nav';
import Main from './components/Main';
import Card from './components/Card';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css';
import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Main2 from './components/Main2';


function App() {

  return (
    <div>
      <Nav />
      <Main2 />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Card />} />
        <Route path="/orderonline" element={<Card />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Card />
      <Main />
      <About />
      <Footer />
    </div>
  );
}


export default App;
