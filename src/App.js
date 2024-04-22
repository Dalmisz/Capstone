import Nav from './components/Nav';
import Header from './components/Header'
import Main from './components/Main';
import Card from './components/Card';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Card />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
