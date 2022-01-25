import { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
