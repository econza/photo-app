import './App.css';
import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/Footer';
import MainPage from './pages/MainPage/MainPage';


const App = () => {
  return (
    <div className="mainWrapper">
      <Header />
        <MainPage />
      <Footer />
    </div>
  );
}

export default App;
