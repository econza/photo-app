import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import styles from './App.module.css';


const App = () => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
        <MainPage />
      <Footer />
    </div>
  );
}

export default App;
