import style from "./MainContent.module.css";
import React, { useEffect } from 'react';
import { getImages } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

const MainContent = () => {
    const images = useSelector(state => state.imagesState.images);

    console.log("RFHNY", images)

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://boiling-refuge-66454.herokuapp.com/images')
            .then((res) => res.json())
            .then((resData) => dispatch(getImages(resData)))
    }, []);

    return (
        <div className={style.imgWrapper}>
            {images.map((images, url) => {
                return (
                    console.log("URL", url),
                    <div className={style.imgWrapper}>
                        <img src={images.url} />
                    </div>)
            })}
        </div>
    )
}

export default MainContent;
