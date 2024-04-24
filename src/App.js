import Nav from './components/Nav';
import Header from './components/Header'
import Main from './components/Main';
import Card from './components/Card';
import About from './components/About';
import Footer from './components/Footer';
import Reservations from './components/Reservations';
import Login from './components/Login';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Card />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderonline" element={<Card />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Header />
      <Card />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
