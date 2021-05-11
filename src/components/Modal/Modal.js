import React from 'react';

import "./Modal.css";

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
        <div className='modal' onClick={onClose}>
            <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                
                    <span className='modal-close' onClick={onClose}>
                        &times;
                    </span>
                
                <div className='modal-body'>
                    <div className='modal-content'>
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
