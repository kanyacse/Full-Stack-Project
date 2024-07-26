import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <MainContent />
      {/* Add Footer component if you have one */}
    </div>
  );
}

export default App;
