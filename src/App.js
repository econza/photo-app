import './App.css';
import React, { useEffect } from 'react';
import home from "../src/assets/images/home.png";
import { getImages } from "../src/redux/actions";
import { useDispatch, useSelector } from 'react-redux';




const App = () => {
	const images = useSelector(state => state);
console.log("RFHNY", images)
	const dispatch = useDispatch();

	useEffect(() => {
		fetch('https://boiling-refuge-66454.herokuapp.com/images')
			.then((res) => res.json())
			.then((resData) => dispatch(getImages(resData.images)))
	}, []);
  
  return (
    <div className="mainWrapper">
      <header>test app</header>

      {/* {images.map((url) => { */}
					{/* return ( */}
          
          <div className="imgWrapper">
            <img src={home} />
          </div>)

          
				{/* })} */}

      {/* <div className="imgWrapper">
        <img src={home} />
        <img src={home} />
        <img src={home} />
        <img src={home} />
        <img src={home} />
        <img src={home} />
      </div> */}
      <div className="footerContainer">
        <footer>© 2018-2019</footer>
      </div>

    </div>
  );
}

export default App;
