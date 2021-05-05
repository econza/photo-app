import React from 'react'
import './modal.css'
import home from "../assets/images/home.png"

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

const ModalWindow = () => {
  const [isModal, setModal] = React.useState(false)
  const onClose = () => setModal(false)
  return (
    <React.Fragment>
      <img src={home} onClick={() => setModal(true)}></img>
      <Modal
        visible={isModal}
        title='Заголовок'
        content={<p>Что-то важное</p>}
        footer={<button onClick={onClose}>Закрыть</button>}
        onClose={onClose}
      />
    </React.Fragment>
  )
}

export default ModalWindow;


  // ReactDOM.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>,
  //   document.getElementById('root'),
  // )