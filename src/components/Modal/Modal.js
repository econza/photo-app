import React from 'react';
import styles from "./Modal.module.css";

const Modal = ({
    isModalVisible,
    onClose,
    children
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
    if (!isModalVisible) return null

    // или возвращаем верстку модального окна
    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modal_dialog} onClick={e => e.stopPropagation()}>
                
                    <span className={styles.modal_close} onClick={onClose}>
                        &times;
                    </span>
                
                <div className={styles.modal_body}>
                    <div className={styles.modal_content}>
                        <React.Fragment>
                            {children}
                        </React.Fragment>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Modal
