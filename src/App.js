import './App.css';
import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/Footer';
import VoidContainer from './components/mainContent/VoidContainer';
import MainContent from './components/mainContent/MainContent';
import ModalWindow from './components/modal';


const App = () => {
  return (
    <div className="mainWrapper">
      <Header />
      <MainContent />
      <ModalWindow />
      <VoidContainer />
      <Footer />
    </div>
  );
}

export default App;
