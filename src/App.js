import './App.css';
import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/Footer';
import VoidContainer from './components/mainContent/VoidContainer';
import MainContent from './components/mainContent/MainContent';

const App = () => {
  return (
    <div className="mainWrapper">
      <Header />
      <MainContent />
      <VoidContainer />
      <Footer />
    </div>
  );
}

export default App;
