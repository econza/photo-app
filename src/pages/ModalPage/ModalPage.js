import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setImageInfo } from '../../redux/actions'

import Modal from '../../components/Modal'
import styles from './ModalPage.module.css'
import { formatDate } from '../../helpers/formatDate'


const ModalPage = (props) => {
    const imageInfo = useSelector(state => state.imagesState.imageInfo)
    const dispatch = useDispatch()

    useEffect(() => {
        if (props.selectedId) {
            fetch(`https://boiling-refuge-66454.herokuapp.com/images/${props.selectedId}`)
                .then(res => res.json())
                .then(data => dispatch(setImageInfo(data)))
        }
    }, [props.selectedId])

    return (
        <Modal {...props}>
            <div className={styles.modalWrapper}>
                <div className={styles.imageInfoWrapper}>
                    <img src={imageInfo?.url}></img>
                </div>
                <div className={styles.commentsWrapper}>
                    {imageInfo?.comments.map((item) => (
                        <div key={item.id}>
                            <div className={styles.dateContainer}>{formatDate(item.date)}</div>
                            <div className={styles.commentText}>{item.text}</div>
                        </div> 
                    ))}
                </div>
                <div className={styles.inputsWrapper}>
                    <input placeholder={"   Ваше Имя"}/>
                    <input placeholder={"   Ваш комментарий"}/>
                    <button>Оставить комментарий</button>
                
                </div>
            </div>
        </Modal>
    )
}

export default ModalPage
