import style from "./MainContent.module.css";
import React, { useEffect } from 'react';
import { getImages } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import '../../components/modal.css'

const Modal = ({
    visible = false,
    title = '',
    content = '',
    footer = '',
    onClose,
}) => {
    // создаем обработчик нажатия клавиши Esc
    const onKeydown = ({ key }) => {
        switch (key) {
            case 'Escape':
                onClose()
                break
        }
    }

    // c помощью useEffect цепляем обработчик к нажатию клавиш
    // https://ru.reactjs.org/docs/hooks-effect.html
    React.useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    // если компонент невидим, то не отображаем его
    if (!visible) return null

    // или возвращаем верстку модального окна
    return (
        <div className='modal' onClick={onClose}>
            <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h3 className='modal-title'>{title}</h3>
                    <span className='modal-close' onClick={onClose}>
                        &times;
          </span>
                </div>
                <div className='modal-body'>
                    <div className='modal-content'>{content}</div>
                </div>
                {footer && <div className='modal-footer'>{footer}</div>}
            </div>
        </div>
    )
}

const MainContent = () => {
    const [isModal, setModal] = React.useState(false)
    const onClose = () => setModal(false)

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
            <React.Fragment>
                {images.map((images, url) => {
                    return (
                        console.log("URL", url),
                        <div className={style.imgWrapper}>
                            <img src={images.url} onClick={() => setModal(true)}/>
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
