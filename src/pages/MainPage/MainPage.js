import React, { useEffect } from 'react';
import { getImages, setImgId, setImageInfo } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import ModalPage from '../ModalPage'
import styles from "./MainPage.module.css";

const MainPage = () => {
    const images = useSelector(state => state.imagesState.images);
    const seletedId = useSelector(state => state.imagesState.seletedId);

    const dispatch = useDispatch();

    const isModalVisible = Boolean(seletedId)

    const onClose = () => {
        dispatch(setImageInfo(null))
        dispatch(setImgId(null))
    }

    useEffect(() => {
        fetch('https://boiling-refuge-66454.herokuapp.com/images')
            .then((res) => res.json())
            .then((resData) => dispatch(getImages(resData)))
    }, []);

    return (

        <div className={styles.imgWrapper}>
            <React.Fragment>
                {images.map((image) => {
                    return (
                        <div key={image.id}>
                            <img src={image.url} onClick={() => dispatch(setImgId(image.id))} />
                        </div>)
                })}
                <ModalPage
                    selectedId={seletedId}
                    isModalVisible={isModalVisible}
                    onClose={onClose}
                />
            </React.Fragment>
        </div>

    )
}

export default MainPage;
