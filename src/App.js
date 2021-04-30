import './App.css';
import React, { useEffect } from 'react';
import home from "../src/assets/images/home.png";
import { getImages } from "../src/redux/actions";
import { useDispatch, useSelector } from 'react-redux';




const App = () => {
  const images = useSelector(state => state.imagesState.images);

  console.log("RFHNY", images)

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://boiling-refuge-66454.herokuapp.com/images')
      .then((res) => res.json())
      .then((resData) => dispatch(getImages(resData)))
  }, []);

  return (
    <div className="mainWrapper">
      <header>test app</header>

      <div className="imgWrapper">
        {images.map((images, url) => {
          return (
            console.log("URL", url),
            <div className="imgWrapper">
              <img src={images.url} />
            </div>)
        })}
      </div>

      <div className="voidContainer"></div>

      <div className="footerContainer">
        <footer>© 2018-2019</footer>
      </div>

    </div>
  );
}

export default App;
