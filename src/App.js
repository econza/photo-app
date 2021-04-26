// import logo from './logo.svg';
import './App.css';
import home from "../src/assets/images/home.png"



function App() {
  return (
    <div className="mainWrapper">
      <header>test app</header>
      <div className="imgWrapper">
        <img src={home} />
        <img src={home} />
        <img src={home} />
        <img src={home} />
        <img src={home} />
        <img src={home} />
      </div>
      <div className="footerContainer">
        <footer>© 2018-2019</footer>
      </div>

    </div>
  );
}

export default App;
