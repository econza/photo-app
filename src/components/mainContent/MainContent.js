import React, { useEffect } from 'react';
import { getImages } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal/Modal'
import styles from "./MainContent.module.css";


const MainContent = () => {
    const [isModal, setModal] = React.useState(false)
    const onClose = () => setModal(false)

    const images = useSelector(state => state.imagesState.images);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://boiling-refuge-66454.herokuapp.com/images')
            .then((res) => res.json())
            .then((resData) => dispatch(getImages(resData)))
    }, []);

    return (

        <div className={style.imgWrapper}>
            <React.Fragment>
                {images.map((images, url) => {
                    return (
                        <div className={styles.imgWrapper}>
                            <img src={images.url} onClick={() => setModal(true)} />
                        </div>)
                })}
                <Modal
                    visible={isModal}
                    title='Заголовок'
                    content={<p>Что-то важное</p>}
                    footer={<button onClick={onClose}>Закрыть</button>}
                    onClose={onClose}
                />
            </React.Fragment>
        </div>

    )
}

export default MainContent;
